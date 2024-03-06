import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Navigation'
import { Footer } from './Footer'
import Landing from './Landing'
import { BrowserRouter, Route, Routes, UNSAFE_DataRouterStateContext } from 'react-router-dom'
import Second_page from './Second_page'
import Home from './Home'
import Login from './Components/Login'
import Dashboard from './Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><BrowserRouter><Routes>
      <Route path={'/'} element={<Home/>} exact />
      <Route path={'Second_page/'} element={<Second_page/>} exact />
      <Route path={'Login/'} element={<Login/>} exact />
      <Route path={'Dashboard/'} element={<Dashboard/>} exact />
      </Routes>
      </BrowserRouter>
      </div>

    </>
  )
}

export default App
