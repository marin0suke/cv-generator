import '../styles/CVDisplay.css'

const CVDisplay = ({ formData }) => {
  return (
    <div className="cv-container">
      <h2>{formData.generalInfo.name}</h2>
      <p>{formData.generalInfo.email} | {formData.generalInfo.phone}</p>

      <h3>Education</h3>
      {formData.education.map((edu, index) => (
        <div key={index} className="cv-section">
          <p><strong>{edu.school}</strong> - {edu.degree} ({edu.date})</p>
        </div>
      ))}

      <h3>Experience</h3>
      {formData.experience.map((exp, index) => (
        <div key={index} className="cv-section">
          <p><strong>{exp.company}</strong> - {exp.position}</p>
          <p>{exp.startDate} - {exp.endDate}</p>
          <p>{exp.responsibilities}</p>
        </div>
      ))}
    </div>
  );
};

export default CVDisplay;