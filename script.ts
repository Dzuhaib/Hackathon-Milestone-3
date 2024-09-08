interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
  }
  
  interface Education {
    institution: string;
    degree: string;
    year: string;
  }
  
  interface WorkExperience {
    company: string;
    role: string;
    duration: string;
  }
  
  interface FormData {
    personalInfo: PersonalInfo;
    education: Education[];
    workExperience: WorkExperience[];
    skills: string[];
  }
  
  const form = document.getElementById('resumeForm') as HTMLFormElement;
  const resumeContent = document.getElementById('resumeContent') as HTMLDivElement;
  
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const personalInfo: PersonalInfo = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      phone: (document.getElementById('phone') as HTMLInputElement).value
    };
  
    const education = Array.from(document.querySelectorAll('#educationFields .education')).map(edu => ({
      institution: (edu.querySelector('.institution') as HTMLInputElement).value,
      degree: (edu.querySelector('.degree') as HTMLInputElement).value,
      year: (edu.querySelector('.year') as HTMLInputElement).value
    }));
  
    const workExperience = Array.from(document.querySelectorAll('#workExperienceFields .workExperience')).map(work => ({
      company: (work.querySelector('.company') as HTMLInputElement).value,
      role: (work.querySelector('.role') as HTMLInputElement).value,
      duration: (work.querySelector('.duration') as HTMLInputElement).value
    }));
  
    const skills = Array.from(document.querySelectorAll('#skillsFields .skill')).map(skill => (skill as HTMLInputElement).value);
  
    const data: FormData = {
      personalInfo,
      education,
      workExperience,
      skills
    };
  
    displayResume(data);
  });
  
  function displayResume(data: FormData) {
    resumeContent.innerHTML = `
      <h3>${data.personalInfo.name}</h3>
      <p>Email: ${data.personalInfo.email}</p>
      <p>Phone: ${data.personalInfo.phone}</p>
      <h4>Education</h4>
      <ul>${data.education.map(edu => `<li>${edu.institution} - ${edu.degree} (${edu.year})</li>`).join('')}</ul>
      <h4>Work Experience</h4>
      <ul>${data.workExperience.map(work => `<li>${work.company} - ${work.role} (${work.duration})</li>`).join('')}</ul>
      <h4>Skills</h4>
      <ul>${data.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
    `;
  }
  
  // Add Education
  document.getElementById('addEducation')?.addEventListener('click', () => {
    const educationFields = document.getElementById('educationFields') as HTMLDivElement;
    educationFields.insertAdjacentHTML('beforeend', `
      <div class="education">
        <input type="text" class="institution" placeholder="Institution" required>
        <input type="text" class="degree" placeholder="Degree" required>
        <input type="text" class="year" placeholder="Year" required>
      </div>
    `);
  });
  
  // Add Work Experience
  document.getElementById('addWorkExperience')?.addEventListener('click', () => {
    const workExperienceFields = document.getElementById('workExperienceFields') as HTMLDivElement;
    workExperienceFields.insertAdjacentHTML('beforeend', `
      <div class="workExperience">
        <input type="text" class="company" placeholder="Company" required>
        <input type="text" class="role" placeholder="Role" required>
        <input type="text" class="duration" placeholder="Duration" required>
      </div>
    `);
  });
  
  // Add Skill
  document.getElementById('addSkill')?.addEventListener('click', () => {
    const skillsFields = document.getElementById('skillsFields') as HTMLDivElement;
    skillsFields.insertAdjacentHTML('beforeend', `
      <input type="text" class="skill" placeholder="Skill" required>
    `);
  });
  