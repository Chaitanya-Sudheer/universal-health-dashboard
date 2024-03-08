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
      </Routes>
      </BrowserRouter>
      </div>

    </>
  )
}

export default App
