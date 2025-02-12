import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Doctor from './pages/Doctor';
import About from './pages/About';
import Login from './pages/Login';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import MyAppoinments from './pages/MyAppoinments';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mx-4 sm:mn-[10%]'>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/doctor" element={<Doctor/>} />
        <Route path="/doctor/:speciality" element={<Doctor/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/my-profile" element={<MyProfile/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/my-appointments" element={<MyAppoinments/>} />
        <Route path="/appointment/:docId" element={<Appointment/>} />
      </Routes>
      </div>
    </>
  )
}

export default App
