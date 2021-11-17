import nunjucks from "nunjucks";

let env = new nunjucks.Environment();
console.log(
  // This process runs from the project root
  nunjucks.precompile("./templates", {
    env: env,
    include: [".njk"],
  })
);
