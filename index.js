module.exports = async ({ markdownAST }, options) => {
    const { default: plugin } = await import('remark-mermaidjs')
    const transformer = plugin(options);
    return transformer(markdownAST)
};
