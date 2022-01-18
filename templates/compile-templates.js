import nunjucks from "nunjucks";
import { HintExtension, markdownify } from "../src/nunjucks-plugins.js";

var njEnv = new nunjucks.Environment();
njEnv
  .addExtension("HintExtension", new HintExtension())
  .addFilter("MarkdownFilter", markdownify);
console.log(
  // This process runs from the project root
  nunjucks.precompile("./templates", {
    env: njEnv,
    include: [".njk"],
  })
);
