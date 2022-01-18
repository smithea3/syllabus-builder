import MarkdownIt from "markdown-it";

class HintExtension {
  tags = ["hint"];

  parse(parser, nodes, lexer) {
    // tag token
    let tok = parser.nextToken();
    // parseSignature(throwErrors, noParentheses)
    // Not going to throw errors, args don't use parentheses in custom tags
    let args = parser.parseSignature(null, true);
    parser.advanceAfterBlockEnd(tok.value);

    let body = parser.parseUntilBlocks("endhint");
    parser.advanceAfterBlockEnd();

    return new nodes.CallExtension(this, "run", args, [body]);
  }

  run(context, format, body) {
    switch (format) {
      case ".docx":
        return `_${body()}_`;
      case ".md":
        return `<!---${body()}-->`;
      default:
        return `<!--${body()}-->`;
    }
  }
}

function markdownify(str) {
  const md = new MarkdownIt({ html: true });
  return md.render(str);
}

export { HintExtension, markdownify };
