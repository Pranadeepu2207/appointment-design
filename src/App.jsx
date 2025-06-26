import { BrowserRouter, Routes, Route } from "react-router-dom"

import DoctorProfile from './components/DoctorProfile'
import DoctorsList from './components/DoctorsList'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DoctorProfile />} />
          <Route path="/doctorprofile" element={<DoctorProfile />} />
          <Route path="/doctorslist" element={<DoctorsList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
