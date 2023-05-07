# gatsby-remark-mermaid

[![github actions](https://github.com/remcohaszing/gatsby-remark-mermaid/actions/workflows/ci.yaml/badge.svg)](https://github.com/remcohaszing/gatsby-remark-mermaid/actions/workflows/ci.yaml)
[![npm](https://img.shields.io/npm/v/gatsby-remark-mermaid.svg)](https://www.npmjs.com/package/gatsby-remark-mermaid)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)

Create [mermaid](https://mermaidjs.github.io/) graphs and diagrams in your markdown files.

This plugin uses [remark-mermaidjs](https://github.com/remcohaszing/remark-mermaidjs) to generate
SVG diagrams at build time. The mermaid code blocks are replaced with an inline SVG in the generated
HTML. This prevents any runtime dependencies on `mermaid.js`.

## Installation

```sh
npm install gatsby-remark-mermaid gatsby-transformer-remark
```

## Usage

Configure this plugin as a plugin of
[gatsby-transformer-remark](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/).

**NOTE:** Make sure you add this plugin **before** any other plugins that process code blocks.

Example configuration

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-mermaid`,
            options: {
              mermaidConfig: {
                theme: 'neutral',
                themeCSS: '.node rect { fill: #fff; }'
              }
            }
          }
        ]
      }
    }
  ]
}
```

## Options

### `browser`

The Playwright browser to use. (`object`, default: chromium)

### `css`

A URL that points to a custom CSS file to load. Use this to load custom fonts. This option is
ignored in the browser. You need to include the CSS in your build manually. (`string` | `URL`)

### `errorFallback`

Create a fallback node if processing of a mermaid diagram fails. If nothing is returned, the code
block is removed. The function receives the following arguments:

- `node`: The mdast `code` node that couldn’t be rendered.
- `error`: The error message that was thrown.
- `file`: The file on which the error occurred.

### `launchOptions`

The options used to launch the browser. (`object`)

### `mermaidOptions`

The [mermaid options](https://mermaid-js.github.io/mermaid/#/Setup) to use.

### `prefix`

A custom prefix to use for Mermaid IDs. (`string`, default: `mermaid`)

## How it works

This plugin processes markdown code blocks set with `mermaid` as the language. It relies

For example, this mermaid code block:

````markdown
```mermaid
graph LR
  install[Install Plugin]
  install --> configure[Configure Plugin]
  configure --> draw[Draw Fancy Diagrams]
```
````

Generates the following SVG image:

![example](https://github.com/remcohaszing/gatsby-remark-mermaid/raw/HEAD/example_graph.png)

## Credits

This package was originally developed by [Thomas Biesaart](https://github.com/ChappIO).

## License

[MIT](LICENSE.md) © [Thomas Biesaart](https://github.com/ChappIO)
