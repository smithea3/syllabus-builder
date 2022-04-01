const renderMd = `
# Syllabus for {{ coursename }}

{{ introduction }}

{% for meeting in meetings -%}
## {{ meeting }}

{% endfor %}
`;
export default renderMd;
