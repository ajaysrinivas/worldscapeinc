# WorldScape Inc. Website

A Website for WorldScape Inc.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/)

```sh
$ git clone https://github.com/ajaysrinivas/worldscapeinc.git # or clone your own fork
$ cd worldscapeinc
$ npm install
$ npm start

Your website should now be running on [localhost:5000](http://localhost:5000/).

## Adding new position in career section

- Access openings.json file under /data folder and add below JSON object to the array. Please ensure that JSON keys are added as specified below.
```sh
Ex: {
    "jobid": "SD009",
    "location": "Fremont, CA",
    "Title": "Software Developer (multiple openings)",
    "description": "<div class='job_description'> <p><strong>Job Title:</strong>Software Developer (multiple openings)</p> <p><strong>Job Duties:</strong>Specific duties Include</p> <ul style='padding-left:17px;'> <li>Analyzes, documents, codes, tests, maintains, and documents complex Java-language routines to accommodate the needs of user departments.</li> <li>Works with Developers, Analysts and business users to ensure application systems change as necessary to meet business requirements and to ensure programs meet technical requirements for performance and results.</li> <li>Candidates must have the ability to perform the essential functions of the position with or without a reasonable accommodation. Design complex object-oriented solutions based on advanced software development practices and methodologies. </li> <li>Design and perform unit testing plans and project implementation in an open source environment. </li> </ul> <p></p> <p><strong>JOB QUALIFICATIONS:</strong></p> <ul style='padding-left:17px;'> <li>Bachelor’s degree in Computer Science, Engineering or a related field plus 2 years of experience. Foreign degree equivalent based on education, training, and/or experience is acceptable. </li> <li>Excellent mathematical, analytical and problem-solving skills plus. </li> <li> General Programming Skills, Analyzing Information, Problem Solving, Software Algorithm Design, Software Performance Tuning, Attention to Detail, Software Design, Software Debugging, Software Development Fundamentals, Software Documentation, Software Testing. </li> <li>Experience with JSP/CSS/JavaScript/AJAX/HTML5. </li> </ul> <p></p> <p><strong>HOURS:</strong>40 hours per week; M-F, 9:00 a.m. – 6:00 p.m. </p> <p><strong>CONTACT PERSON:</strong>Mail resume referencing job code# SD009 to: Worldscape Inc., at jobs@worldscapeinc.com. </p> <p><strong>Note:</strong>This position is eligible for the company’s referral incentive program. Please refer to the posted policy for details. </p></div>"
}
- HTML included in description field will be rendered in description sections of openings page.
- Use any HTML beautifier tool to format and edit HTML snippet that will be included in description field and later minify before copying over. Code Beautify (https://codebeautify.org/htmlviewer/) is one of the tool that can be used for both beautifying and minifying too.
- Restart node server and should be able to see new position included.
