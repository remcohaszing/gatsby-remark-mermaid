# gatsby-remark-mermaid
[![npm](https://img.shields.io/npm/v/gatsby-remark-mermaid.svg?style=flat-square)](https://www.npmjs.com/package/gatsby-remark-mermaid)

Create [mermaid](https://mermaidjs.github.io/) graphs and diagrams in your markdown files.

This plugin uses [remark-mermaidjs](https://github.com/remcohaszing/remark-mermaidjs) to generate SVG diagrams at build time. The mermaid code blocks are replaced with an inline SVG in the generated HTML. This prevents any runtime
dependencies on `mermaid.js`.

## Install

```sh
npm install gatsby-remark-mermaid gatsby-transformer-remark
```

## Usage

Configure this plugin as a plugin of [gatsby-transformer-remark](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/).

**NOTE:** Make sure you add this plugin **before** any other plugins that process code blocks.

Example configuration

```js
// In your gatsby-config.js

plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-mermaid`,
          options: {
            launchOptions: {
              executablePath: 'path/to/chrome/executable',
            },
            svgo: {
              plugins: [
                { name: 'removeTitle', active: false },
              ],
            },
            mermaidOptions: {
              theme: 'neutral',
              themeCSS: '.node rect { fill: #fff; }',
            },
          },
        },
      ]
    }
  }
],
```

## Options

The configuration options for this plugin are the same as for `remark-mermaidjs` [provided here](https://github.com/remcohaszing/remark-mermaidjs#options).
However, the table below describes the configuration details as they apply to Gatsby.

| Name                            | Default              | Description                                                                                                                                                                                                                                                               |
| :------------------------------ | :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `launchOptions.executablePath`  |                      | (Required) String path to the chrome executable that puppeteer uses to render the mermaid diagrams to SVGs.                                                                                                                                                               |
| `mermaidOptions`                | `{}`                 | (Optional) Configuration object for customizing themes, styles, and properties of all mermaid diagrams. See [mermaidAPI configuration options](https://mermaid-js.github.io/mermaid/#/Setup).                                                                             |
| `mermaidOptions.theme`          | `"default"`          | (Optional) Name of mermaid theme. Valid options: `'default'`, `'forest'`, `'dark'`, `'neutral'`, `'null'`. See [mermaid themes](https://mermaid-js.github.io/mermaid/#/Setup?id=theme).                                                                                   |
| `mermaidOptions.themeCSS`       | `""`                 | (Optional) Override mermaid styles using `themeCSS`. See [mermaid themes](https://mermaid-js.github.io/mermaid/#/Setup?id=theme).                                                                                                                                         |
| `mermaidOptions.themeVariables` | `{}`                 | (Optional) Override mermaid variables using `themeVariables`. See [Customizing Themes with themeVariables](https://mermaid-js.github.io/mermaid/#/./theming?id=customizing-themes-with-themevariablesSpecifies).)                                                         |
| `svgo.plugins`                  | `defaultSVGOOptions` | (Optional) Override default optimizations for the generated SVG files. Set to `null` to disable minifying using SVGO completely. See [defaultSVGOOptions](https://github.com/remcohaszing/remark-mermaidjs/blob/v4.0.0/index.ts#L18)).) |

**NOTE:** You can use the [Mermaid Live Editor](https://mermaidjs.github.io/mermaid-live-editor) to preview the theme options described below.

## How it works

This plugin processes markdown code blocks set with `mermaid` as the language. It relies

For example, this mermaid code block:

    ```mermaid
    graph LR
      install[Install Plugin]
      install --> configure[Configure Plugin]
      configure --> draw[Draw Fancy Diagrams]
    ```

Generates the following SVG image:

![example](https://github.com/remcohaszing/gatsby-remark-mermaid/raw/master/example_graph.png)

### Credits

This package was originally developed by [Thomas Biesaart](https://github.com/ChappIO).
