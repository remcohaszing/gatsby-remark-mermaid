# gatsby-remark-mermaid
[![npm](https://img.shields.io/npm/v/gatsby-remark-mermaid.svg?style=flat-square)](https://www.npmjs.com/package/gatsby-remark-mermaid)

Creates [mermaid](https://mermaidjs.github.io/) graphs and diagrams in your markdown files.

This plugin uses **server-side rendering**, meaning that the mermaid SVGs are generated at build time instead of having a runtime
dependency on `mermaid.js`.

## Install

```bash
npm install gatsby-remark-mermaid gatsby-transformer-remark &&
npm install --save-dev puppeteer
```

## How to use

Configure this plugin as a plugin of [gatsby-transformer-remark](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/). 

**NOTE:** Make sure you add this plugin **before** any other plugins that process code blocks.


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
                executablePath: puppeteer.executablePath(),
                defaultViewport: {
                  width: 600,
                  height: 3000,
                }
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

## How it works

This plugin processes markdown code blocks set with `mermaid` as the language.

For example, this mermaid code block:

    ```mermaid
    graph LR
      install[Install Plugin]
      install --> configure[Configure Plugin]
      configure --> draw[Draw Fancy Diagrams]
    ```

Generates the following SVG image:

![example](https://github.com/remcohaszing/gatsby-remark-mermaid/raw/master/example_graph.png)

## Configuration Options

| Name              | Default     | Description                                                                                                                                                                   |
| ---               | ---         | ---                                                                                                                                                                           |
| `language`        | `"mermaid"` | Set this value to the identifier which will replace the code block. If you set it to `"graph"` then you can create graphs using ` ```graph ...`.                              |
| `theme`           | `"default"` | Set this value to one of `"dark"`, `"neutral"`, `"forrest"`, or `"default"`. You can preview the themes in the [Live Editor](https://mermaidjs.github.io/mermaid-live-editor) |
| `viewport.width`  | `200`       | Set this value to the desired viewport width while rendering the svg                                                                                                          |
| `viewport.height` | `200`       | Set this value to the desired viewport height while rendering the svg                                                                                                         |
| `mermaidOptions`  | `{}`        | This object specifies the [configuration options](https://mermaidjs.github.io/#/mermaidAPI) passed to `mermaid.initialize()`                                                                                              |

### Defaults

### Credits

This package was originally developed by [Thomas Biesaart](https://github.com/ChappIO).
