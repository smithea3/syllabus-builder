import nunjucks from 'nunjucks';
import getMeetDates from './date-generator';
import renderDocx from './templates/word-docx';
import renderHtml from './templates/html';
import renderMd from './templates/md';

const intro = 'This is a programmatically generated course syllabus with various headings. Please feel free to edit as you see fit.';

export interface TemplateContext {
  introduction: string;
  meetings: string[];
  coursename: string;
}
export async function generateFile(data: FormData): Promise<Blob> {
  const meetings: string[] = getMeetDates(
    Number(data.get('termNum')),
    data.getAll('weekday').map((val) => Number(val)),
    data.get('dateformat') as string,
  );
  const coursename: String = data.get('coursename');

  const context: TemplateContext = {
    introduction: intro,
    meetings,
    coursename,
  };
  let blob: Blob;
  switch (data.get('fileformat')) {
    case '.md':
      blob = new Blob([nunjucks.renderString(renderMd, context)], {
        type: 'octet/stream',
      });
      break;
    case '.html':
      blob = new Blob([nunjucks.renderString(renderHtml, context)], {
        type: 'octet/stream',
      });
      break;
    case '.docx':
      blob = await renderDocx(context);
      break;
    default:
      blob = new Blob([meetings.join('\n')], { type: 'octet/stream' });
  }
  return blob;
}
