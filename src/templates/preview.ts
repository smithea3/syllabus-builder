const renderPreview = `
<h2 style="border-bottom: 2px solid; text-align: center">Syllabus for {{ coursename }}</h2>
<p>{{ introduction }}</p>

<h3 style="border-bottom: 2px solid;">Class Meeting Dates with Important Dates</h3>
<ul>
    {% for meeting in meetings -%}
    <li>{{ meeting }}</li>
    {% endfor %}
</ul>

<h3 style="border-bottom: 2px solid;">Prerequisite Knowledge and Skills</h3>

<h4>Prerequisite and Corequisite Course(s)</h4>
<p>A list of prerequisites courses and corequisite courses can be located in the Basic Academic Requirements linked
    within the Getting Started section of Blackboard.</p>

<h4>Prerequisite Knowledge</h4>
<p>In addition to the prerequisite courses listed in the Basic Academic Requirements, this course also requires that
    you
    have the following prerequisite knowledge for success.
    <ul>
        <li>List prerequisite knowledge here.</li>
    </ul>
</p>

<h4>Minimum Computer Skills</h4>
<p>Below is an example of Minimum Computer Skills for an online/hybrid/blended course model. You should add
    to/remove
    items that do not fit your course or delivery format. You may also wish to reference the Annotations for SRS 1.6
    in
    the QM Rubric for more information regarding Minimum Computer Skills.</p>
<p>
    To be successful in this course, you should be able to successfully:
    <ul>
        <li>navigate within Blackboard;</li>
        <li>use an email account for communication (specific requirements below);</li>
    </ul>
</p>

<h4>Minimum Digital Literacy Skills</h4>
<p>
    To be successful in this course, students should be able to successfully:
    <li>use the college's online library databases to locate and gather appropriate information when conducting
        research.</li>
    <li>use online search tools for specific academic purposes; this includes being able to use Boolean logic when
        performing searches to narrow the scope of the search.</li>
    <li>provide a proper in-text citation of academic sources and references page using APA formatting when
        required.
    </li>
</p>

<h3 style="border-bottom: 2px solid;">Course-level Objectives</h3>
<p>
    The course-level of objectives for this course are listed in the Basic Academic Requirements linked within the
    Getting Started section of Blackboard.
</p>

<h3 style="border-bottom: 2px solid;">Module/Unit-level Objectives</h3>
<p>
    <ul>
        <li>MLO1-1: </li>
    </ul>
</p>

<h3 style="border-bottom: 2px solid;">Required Materials and Technology</h3>

<h4>Textbook(s)</h4>

<h4>Ancillary Resources</h4>

<h4>MyCVCC Portal</h4>

<h4>Blackboard</h4>

<h4>CVCC Email</h4>

<h4>Other Technology Requirements</h4>

<h3 style="border-bottom: 2px solid;">Institutional Policies and Procedures</h3>

<h3 style="border-bottom: 2px solid;">Course Policies</h3>

<h4>Course Grading Policy and Calculation</h4>

<h5>Description of Graded Assignment Categories</h5>

<h4>Grading and Feedback</h4>
<p>
    Here you will type when and how the learner should expect feedback on the assignment types described above
    (unless
    you provided such information in the above descriptions).
</p>

<h4>Late Work Policy</h4>
<p>
    Type your late work policy here. Even if you accept late work without any penalty, please state that here.
</p>

<h4>Academic Honesty Policy</h4>
<p>
    In accordance with CVCC Academic and Instructional Policy 2.16: Academic Honesty, students at CVCC are expected
    to
    be honest in all academic pursuits, whether class, lab, shop, or clinical. Acts of academic dishonesty are
    considered unethical and subject to behavior sanctions. For more information regarding CVCC's Academic Honesty
    Policy, please see the Basic Academic Requirements linked within the Getting Started section of Blackboard.
</p>
<p>
    You may wish to add more about academic honesty and plagiarism here, including consequences thereof.
</p>

<h3 style="border-bottom: 2px solid;">Attendance Policy</h3>
<p>
    Please see the Attendance Requirement Section of the Basic Academic Requirements for this course linked within
    the
    Getting Started section of the course.
</p>
<p>
    You may wish to add additional attendance requirements based on departmental and dean approval.
</p>

<h3 style="border-bottom: 2px solid;">Tutoring</h3>
<p>
    CVCC offers several cost-free services to students who find themselves needing academic assistance. Please ask
    your
    instructor about the Learning Assistance Center and/or the Peer Tutoring Program, or you can contact the LAC at
    (828) 327-7000, extension 4381, or drop by and pick up the information.
</p>

<h3 style="border-bottom: 2px solid;">Department Chair's Contact Information</h3>
<p></p>
`;
export default renderPreview;
