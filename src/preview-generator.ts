import nunjucks from 'nunjucks';
import { getMeetDates } from './date-generator';
import renderPreview from './templates/preview.js';

const intro = 'Hello and welcome to this course! The Duke Honor Code applies to all assignments, quizzes, and exams.';

export async function generatePreview(data: FormData): Promise<String> {
  const meetings: string[] = getMeetDates(
    Number(data.get('termNum')),
    data.getAll('weekday').map((val) => Number(val)),
    data.get('dateformat') as string,
  );
  const coursename: String = data.get('coursename');
  const context: TemplateContext = {
    introduction: intro,
    meetings,
    coursename: coursename
  };
  let output: String;

  output = nunjucks.renderString(renderPreview, context);
  return output;
}

export interface TemplateContext {
  introduction: string;
  meetings: string[];
}
