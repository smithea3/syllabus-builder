const renderPreview = `
  <h2 style="border-bottom: 2px solid; text-align: center">Syllabus for {{ coursename }}</h2>
  <p>{{ introduction }}</p>

  <h3 style="border-bottom: 2px solid;">Class Meeting Dates</h3>
  {% for meeting in meetings -%}
  <h5>{{ meeting }}</h5>

  {% endfor %}
`;
export default renderPreview;
