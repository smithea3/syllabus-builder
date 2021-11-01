import nunjucks from "nunjucks";
import { getMeetDates } from "./date-generator";

const intro = `Hello and welcome to this course! The Duke Honor Code applies to all assignments, quizzes, and exams.`;

export function generateFile(data: FormData): Blob {
  const meetings: string[] = getMeetDates(
    Number(data.get("termNum")),
    data.getAll("weekday").map((val) => Number(val)),
    data.get("dateformat") as string
  );
  const context = {
    introduction: intro,
    meetings: meetings,
  };
  let blob: Blob;
  switch (data.get("fileformat")) {
    case ".md":
      blob = new Blob([nunjucks.render("markdown.njk", context)], {
        type: "octet/stream",
      });
      break;
    case ".html":
      blob = new Blob([nunjucks.render("html.njk", context)], {
        type: "octet/stream",
      });
      break;
    default:
      blob = new Blob([meetings.join("\n")], { type: "octet/stream" });
  }
  return blob;
}
