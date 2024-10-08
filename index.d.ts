import type { RemarkMermaidOptions } from 'remark-mermaidjs' with { 'resolution-mode': 'import' }

declare namespace gatsbyRemarkMermaid {
  export { RemarkMermaidOptions as Options }
}

declare function gatsbyRemarkMermaid(
  gatsbyRemarkOptions: unknown,
  options: gatsbyRemarkMermaid.Options
): Promise<undefined>

export = gatsbyRemarkMermaid
