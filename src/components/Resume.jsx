// Resume.jsx
import React from 'react';
import '../styled-components/Resume.css';
import resumeImage from '../assets/images/luke-resume.jpg';

const Resume = () => {
  const proficiencyCategories = [
    {
      title: 'Programming Languages',
      proficiencies: ['JavaScript', 'HTML', 'CSS', 'Apex', 'Computer Science', ''],
    },
    {
      title: 'Databases',
      proficiencies: ['MongoDB', 'MySQL', 'NoSQL', 'GraphQL', ''],
    },
    {
      title: 'Frameworks',
      proficiencies: ['React', 'Bulma', 'Bootstrap', 'Node.js', 'Express.js', 'Handlebars.js', 'Jest', ''],
    },
    {
      title: 'Fundraising',
      proficiencies: ['Grant Writing', 'Grant Management', 'Microsoft Office Applications', ''],
    },
    // Add more proficiency categories as needed
  ];

  return (
    <section className="resume">
      <h2>Resume</h2>
      <div className="proficiency-categories">
        {proficiencyCategories.map((category, index) => (
          <div key={index} className="proficiency-category">
            <h3>{category.title}</h3>
            <ul>
              {category.proficiencies.map((proficiency, proficiencyIndex) => (
                <li key={proficiencyIndex}>{proficiency}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="download-resume">
        <a href={resumeImage} download="luke-resume.jpg">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
