import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Navigation'
import { Footer } from './Footer'
import Landing from './Landing'
import { BrowserRouter, Route, Routes, UNSAFE_DataRouterStateContext } from 'react-router-dom'
import Sign_In from './Sign_In'
import Home from './Home'
import Login from './Components/Login'
import Dashboard from './Dashboard'
import About from './About'
import Overview from './Components/Overview'
import Profile from './Components/Profile'
import Prescription from './Components/Prescription'
import Records from './Components/Records'
import Medicines from './Components/Medicines'
import Appointments from './Components/Appointments'
import Treatment_history from './Components/Treatment_history'
import Medical_directives from './Components/Medical_directives'
import Vaccination_history from './Components/Vaccination_history'
import Allergies from './Components/Allergies'
import Fam_Med_History from './Components/Fam_Med_History'
import Social_history from './Components/Social_history'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><BrowserRouter><Routes>
      <Route path={'/'} element={<Home/>} exact />
      <Route path={'Sign_In/'} element={<Sign_In/>} exact />
      <Route path={'Login/'} element={<Login/>} exact />
      <Route path={'Dashboard/'} element={<Dashboard/>} exact />
      <Route path={'AboutUs/'} element={<About/>} exact />
      <Route path={'Overview/'} element={<Overview/>} exact />
      <Route path={'Profile/'} element={<Profile/>} exact />
      <Route path={'Prescription/'} element={<Prescription/>} exact />
      <Route path={'Records/'} element={<Records/>} exact />
      <Route path={'Medicines/'} element={<Medicines/>} exact />
      <Route path={'Appointments/'} element={<Appointments/>} exact />
      <Route path={'Treatment_history/'} element={<Treatment_history/>} exact />
      <Route path={'Medical_directives/'} element={<Medical_directives/>} exact />
      <Route path={'Vaccination_history/'} element={<Vaccination_history/>} exact />
      <Route path={'Allergies/'} element={<Allergies/>} exact />
      <Route path={'Fam_Med_History/'} element={<Fam_Med_History/>} exact />
      <Route path={'Social_history/'} element={<Social_history/>} exact />
      </Routes>
      </BrowserRouter>
      </div>

    </>
  )
}

export default App
