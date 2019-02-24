const path = require('path');
const visit = require('unist-util-visit');
const puppeteer = require('puppeteer');

async function render(browser, definition, theme) {
    const page = await browser.newPage();
    page.setViewport({width: 200, height: 200});
    await page.goto(`file://${path.join(__dirname, 'render.html')}`);
    await page.addScriptTag({
        path:  require.resolve('mermaid/dist/mermaid.min.js')
    });
    return await page.$eval('#container', (container, definition, theme) => {
        container.innerHTML = `<div class="mermaid">${definition}</div>`;

        try {
            window.mermaid.initialize({theme: theme});
            window.mermaid.init();
            return container.innerHTML;
        } catch (e) {
            return `${e}`
        }
    }, definition, theme);
}

function mermaidNodes(markdownAST, language) {
    const result = [];
    visit(markdownAST, 'code', node => {
        if ((node.lang || '').toLowerCase() === language) {
            result.push(node);
        }
    });
    return result;
}

module.exports = async ({markdownAST},
                        {
                            language = 'mermaid',
                            theme = 'default'
                        }) => {

    // Check if there is a match before launching anything
    let nodes = mermaidNodes(markdownAST, language);
    if (nodes.length === 0) {
        // No nodes to process
        return;
    }

    // Launch virtual browser
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});

    await Promise.all(nodes.map(async node => {
        node.type = 'html';
        node.value = await render(browser, node.value, theme);
    }));
    browser.close();
};
