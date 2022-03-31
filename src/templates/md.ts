export const renderMd = `
# Syllabus for [Your Course]

{{ introduction }}

{% for meeting in meetings -%}
## {{ meeting }}

{% endfor %}
`;