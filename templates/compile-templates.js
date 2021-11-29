import nunjucks from "nunjucks";
import { HintExtension } from "../src/nunjucks-plugins.js";

var njEnv = new nunjucks.Environment();
njEnv.addExtension("HintExtension", new HintExtension());
console.log(
  // This process runs from the project root
  nunjucks.precompile("./templates", {
    env: njEnv,
    include: [".njk"],
  })
);
