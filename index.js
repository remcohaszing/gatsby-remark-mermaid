'use strict'

async function gatsbyRemarkMermaid({ markdownAST, markdownNode }, options) {
  const { VFile } = await import('vfile')
  const { default: plugin } = await import('remark-mermaidjs')

  const vfile = new VFile({
    value: markdownNode.rawMarkdownBody,
    path: markdownNode.fileAbsolutePath
  })
  const transformer = plugin(options)
  await transformer(markdownAST, vfile)
}

module.exports = gatsbyRemarkMermaid
