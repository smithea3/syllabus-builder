import * as docx from 'docx';
import { TemplateContext } from '../file-generator';

export default async function renderDocx(context: TemplateContext): Promise<Blob> {
  const meetings = context.meetings.map((meeting) => new docx.Paragraph({
    heading: docx.HeadingLevel.HEADING_3,
    text: meeting,
  }));
  const doc = new docx.Document({
    title: `Syllabus for ${context.coursename}`,
    sections: [
      {
        children: [
          // Course Syllabus Title
          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_1,
            text: `Course Syllabus - ${context.coursename}`,
          }),
          // Introduction Statement
          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_1,
            text: 'Introduction',
          }),
          new docx.Paragraph(
            'Type introduction here.',
          ),
          // Module/unit-level Objectives Section
          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_1,
            text: `Module-level Objectives for ${context.coursename}`,
          }),
          new docx.Paragraph(
            'Type module/unit-level objectives here.',
          ),
          // Class meeting schedule.
          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_2,
            text: 'Class Meetings',
          }),
          ...meetings,
        ],
      },
    ],
  });
  return docx.Packer.toBlob(doc);
}
