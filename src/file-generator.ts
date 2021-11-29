import nunjucks from "nunjucks";
import { getMeetDates } from "./date-generator";
import { renderDocx } from "./word-docx";
import { HintExtension } from "./nunjucks-plugins";

const njEnv = nunjucks
  .configure({ autoescape: false })
  .addExtension("HintExtension", new HintExtension());

export async function generateFile(data: FormData): Promise<Blob> {
  const meetings: string[] = getMeetDates(
    Number(data.get("termNum")),
    data.getAll("weekday").map((val) => Number(val)),
    data.get("dateformat") as string
  );
  const context: TemplateContext = {
    format: data.get("fileformat") as string,
    meetings: meetings,
  };
  let blob: Blob;
  switch (data.get("fileformat")) {
    case ".md":
      blob = new Blob([njEnv.render("syllabus-contents.njk", context)], {
        type: "octet/stream",
      });
      break;
    case ".html":
      blob = new Blob([njEnv.render("html.njk", context)], {
        type: "octet/stream",
      });
      break;
    case ".docx":
      blob = new Blob([njEnv.render("syllabus-contents.njk", context)]);
      // blob = await renderDocx(context);
      break;
    default:
      blob = new Blob([meetings.join("\n")], { type: "octet/stream" });
  }
  return blob;
}

export interface TemplateContext {
  format: string;
  meetings: string[];
}
