import { BrowserRouter, Routes, Route } from "react-router-dom"

import DoctorProfile from './components/DoctorProfile'
import DoctorsList from './components/DoctorsList'
import NotFound from "./components/NotFound"

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DoctorProfile />} />
          <Route path="/doctorprofile" element={<DoctorProfile />} />
          <Route path="/doctorslist" element={<DoctorsList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
