declare class HintExtension {
  tags: string[];
  parse(parser: any, nodes: any, lexer: any): string;
  run(context: any, format: string, body: any): string;
}

declare function markdownify(str: string): string;

export { HintExtension, markdownify };
