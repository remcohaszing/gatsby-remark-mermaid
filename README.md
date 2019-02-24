# gatsby-remark-mermaid
![npm](https://img.shields.io/npm/v/gatsby-remark-mermaid.svg?style=flat-square)

Create [mermaid](https://mermaidjs.github.io/) graphs and diagrams in your markdown files.

This plugin uses **server-side rendering**. This means the svg is rendered on build time instead of having a runtime
dependency on mermaid.

## Install

`npm install --save gatsby-remark-mermaid gatsby-transformer-remark`


## How to Use

This plugin processes markdown code blocks. If you have any other plugins which do that such as syntax highlighters,
make sure you **import this before those plugins**.

Add the plugin to your `gatsby-config.js`.
```js
{
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-mermaid'
        ]
      }
    }
  ]
}
```

Now you can use markdown:

    ```mermaid
    graph LR
    install[Install Plugin] 
    install --> configure[Configure Plugin]
    configure --> draw[Draw Fancy Diagrams]
    ```

To generate: 

![example](https://github.com/ChappIO/gatsby-remark-mermaid/raw/master/example_graph.png)

## Options

| Name       | Default     | Description                                                                                                                                                                   |
| ---        | ---         | ---                                                                                                                                                                           |
| `language` | `"mermaid"` | Set this value to the identifier which will replace the code block. If you set it to `"graph"` then you can create graphs using ` ```graph ...`.                              |
| `theme`    | `"default"` | Set this value to one of `"dark"`, `"neutral"`, `"forrest"`, or `"default"`. You can preview the themes in the [Live Editor](https://mermaidjs.github.io/mermaid-live-editor) |

### Defaults

```js
{
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
             resolve: 'gatsby-remark-mermaid',
             options: {
                 language: 'mermaid',
                 theme: 'default'
             } 
          }
        ]
      }
    }
  ] 
}
```
