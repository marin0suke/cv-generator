import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education' 
import Experience from './components/Experience'
import CVDisplay from './components/CVDisplay'

function App() {
  const [formData, setFormData] = useState({
    generalInfo: { name: '', email: '', phone: '' },
    education: [{ school: '', degree: '', date: '' }],
    experience: [{company: '', position: '', responsibilities: '', startDate: '', endDate: ''}],
  });

  const updateGeneralInfo = (newData) => {
    setFormData((prev) => ({ ...prev, generalInfo: newData }));
  };

  const updateEducation = (newData) => {
    setFormData((prev) => ({ ...prev, education: newData }));
  };

  const updateExperience = (newData) => {
    setFormData((prev) => ({ ...prev, experience: newData }));
  };



  return (
    <>
      <h1>CV Generator</h1>
      <GeneralInfo data={formData.generalInfo} onUpdate={updateGeneralInfo} />
      <Education data={formData.education} onUpdate={updateEducation} />
      <Experience data={formData.experience} onUpdate={updateExperience} />
      <CVDisplay formData={formData} />
    </>
  );
}

export default App;
