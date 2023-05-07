import { RemarkMermaidOptions } from 'remark-mermaidjs'

declare namespace gatsbyRemarkMermaid {
  type Options = RemarkMermaidOptions
}

declare function gatsbyRemarkMermaid(
  gatsbyRemarkOptions: unknown,
  options: RemarkMermaidOptions
): Promise<void>

export = gatsbyRemarkMermaid
