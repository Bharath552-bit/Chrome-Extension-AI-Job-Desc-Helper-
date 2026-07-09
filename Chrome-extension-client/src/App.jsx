import { useState } from 'react'
import './App.css'

function App() {

  async function getResume(e){
    const file = e.target.files[0]

    if(!file){
      alert("Upload Resume from app.jsx")
      return
    }

    const reader = new FileReader()

    reader.onload = async (e)=>{
      const pdfToString = e.target.result

      await chrome.storage.local.set({resume :{ name : file.name, content: pdfToString}})
    }

    reader.readAsDataURL(file)
  }

  return (
    <div>
      <h1>Upload Resume</h1>

      <input type="file" name='resume' accept='application/pdf' onChange={getResume} />
    </div>
  ) 
}

export default App