import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education' 
import Experience from './components/Experience'
import CVDisplay from './components/CVDisplay'
import './styles/App.css'

function App() {
  const [formData, setFormData] = useState({
    generalInfo: { name: '', email: '', phone: '' },
    education: [{ school: '', degree: '', date: '' }],
    experience: [{company: '', position: '', responsibilities: '', startDate: '', endDate: ''}],
  });

  const updateFormData = (section, newData) => {
    setFormData((prev) => ({ ...prev, [section]: newData}));
  }


  return (
    <>
    <h1>CV Generator</h1>
    <div className="container">  
      <div className="form-container">
        <GeneralInfo data={formData.generalInfo} onUpdate={(newData) => updateFormData('generalInfo', newData)} />
        <Education data={formData.education} onUpdate={(newData) => updateFormData('education', newData)} />
        <div className="experience-container"> 
          <Experience data={formData.experience} onUpdate={(newData) => updateFormData('experience', newData)} />
        </div>
      </div>
      <CVDisplay formData={formData} />
    </div>
  </>
  );
}

export default App;
