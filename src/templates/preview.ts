const renderPreview = `
  <h2 style="border-bottom: 2px solid; text-align: center">Syllabus for {{ coursename }}</h2>
  <p>{{ introduction }}</p>

  <h3 style="border-bottom: 2px solid;">Class Meeting Dates</h3>
    <ul>
      {% for meeting in meetings -%}
      <li>{{ meeting }}</li>
      {% endfor %}
    </ul>
  
    <h3 style="border-bottom: 2px solid;">Prerequisite Knowledge and Skills</h3>
  
  <h4>Prerequisite and  Corequisite Course(s)</h4>
  <p>A list of prerequisites courses and corequisite courses can be located in the Basic Academic Requirements linked within the Getting Started section of Blackboard.</p>

  <h4>Prerequisite Knowledge</h4>
  <p>In addition to the prerequisite courses listed in the Basic Academic Requirements, this course also requires that you have the following prerequisite knowledge for success.
    <ul>
      <li>List prerequisite knowledge here.</li>
    </ul>
  </p>

  <h4>Minimum Computer Skills</h4>
  <p>Below is an example of Minimum Computer Skills for an online/hybrid/blended course model. You should add to/remove items that do not fit your course or delivery format. You may also wish to reference the Annotations for SRS 1.6 in the QM Rubric for more information regarding Minimum Computer Skills.</p>
  <p>
  To be successful in this course, you should be able to successfully:
  <ul>
    <li>navigate within Blackboard;</li>
    <li>use an email account for communication (specific requirements below);</li>
  </ul>
  </p>
`;
export default renderPreview;
