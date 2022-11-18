module.exports = async (ast, options) => {
    const { default: plugin } = await import('remark-mermaidjs')
    const transformer = plugin(options)
    return transformer(ast)
};
