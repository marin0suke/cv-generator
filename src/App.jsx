import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'

function App() {
  const [formData, setFormData] = useState({
    generalInfo: { name: '', email: '', phone: '' }
  });

  const updateGeneralInfo = (newData) => {
    setFormData((prev) => ({ ...prev, generalInfo: newData }));
  };

  return (
    <>
      <h1>CV Generator</h1>
      <GeneralInfo data={formData.generalInfo} onUpdate={updateGeneralInfo} />
    </>
  )
}

export default App;
