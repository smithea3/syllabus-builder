import nunjucks from 'nunjucks';
import getMeetDates from './date-generator';
import renderPreview from './templates/preview.js';

const intro = 'Hello and welcome to this course! The Duke Honor Code applies to all assignments, quizzes, and exams.';

export interface TemplateContext {
  introduction: string;
  meetings: string[];
  coursename: string;
}
export async function generatePreview(data: FormData): Promise<String> {
  const meetings: string[] = getMeetDates(
    Number(data.get('termNum')),
    data.getAll('weekday').map((val) => Number(val)),
    data.get('dateformat') as string,
  );
  const coursename: string = data.get('coursename');
  const context: TemplateContext = {
    introduction: intro,
    meetings,
    coursename,
  };
  const output: String = nunjucks.renderString(renderPreview, context);
  return output;
}
