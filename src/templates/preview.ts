const renderPreview = `
  <h4>Syllabus for {{ coursename }}</h4>
  <p>{{ introduction }}</p>

  {% for meeting in meetings -%}
  <h5>{{ meeting }}</h5>

  {% endfor %}
`;
export default renderPreview;
