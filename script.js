var _a, _b, _c;
var form = document.getElementById('resumeForm');
var resumeContent = document.getElementById('resumeContent');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
    event.preventDefault();
    var personalInfo = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };
    var education = Array.from(document.querySelectorAll('#educationFields .education')).map(function (edu) { return ({
        institution: edu.querySelector('.institution').value,
        degree: edu.querySelector('.degree').value,
        year: edu.querySelector('.year').value
    }); });
    var workExperience = Array.from(document.querySelectorAll('#workExperienceFields .workExperience')).map(function (work) { return ({
        company: work.querySelector('.company').value,
        role: work.querySelector('.role').value,
        duration: work.querySelector('.duration').value
    }); });
    var skills = Array.from(document.querySelectorAll('#skillsFields .skill')).map(function (skill) { return skill.value; });
    var data = {
        personalInfo: personalInfo,
        education: education,
        workExperience: workExperience,
        skills: skills
    };
    displayResume(data);
});
function displayResume(data) {
    resumeContent.innerHTML = "\n      <h3>".concat(data.personalInfo.name, "</h3>\n      <p>Email: ").concat(data.personalInfo.email, "</p>\n      <p>Phone: ").concat(data.personalInfo.phone, "</p>\n      <h4>Education</h4>\n      <ul>").concat(data.education.map(function (edu) { return "<li>".concat(edu.institution, " - ").concat(edu.degree, " (").concat(edu.year, ")</li>"); }).join(''), "</ul>\n      <h4>Work Experience</h4>\n      <ul>").concat(data.workExperience.map(function (work) { return "<li>".concat(work.company, " - ").concat(work.role, " (").concat(work.duration, ")</li>"); }).join(''), "</ul>\n      <h4>Skills</h4>\n      <ul>").concat(data.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</ul>\n    ");
}
// Add Education
(_a = document.getElementById('addEducation')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var educationFields = document.getElementById('educationFields');
    educationFields.insertAdjacentHTML('beforeend', "\n      <div class=\"education\">\n        <input type=\"text\" class=\"institution\" placeholder=\"Institution\" required>\n        <input type=\"text\" class=\"degree\" placeholder=\"Degree\" required>\n        <input type=\"text\" class=\"year\" placeholder=\"Year\" required>\n      </div>\n    ");
});
// Add Work Experience
(_b = document.getElementById('addWorkExperience')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var workExperienceFields = document.getElementById('workExperienceFields');
    workExperienceFields.insertAdjacentHTML('beforeend', "\n      <div class=\"workExperience\">\n        <input type=\"text\" class=\"company\" placeholder=\"Company\" required>\n        <input type=\"text\" class=\"role\" placeholder=\"Role\" required>\n        <input type=\"text\" class=\"duration\" placeholder=\"Duration\" required>\n      </div>\n    ");
});
// Add Skill
(_c = document.getElementById('addSkill')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var skillsFields = document.getElementById('skillsFields');
    skillsFields.insertAdjacentHTML('beforeend', "\n      <input type=\"text\" class=\"skill\" placeholder=\"Skill\" required>\n    ");
});
