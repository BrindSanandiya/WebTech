import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import About from './Components/Aboutus'
import Contact from './Components/Contact'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/Home" element={<Home />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/About" element={<About />}/>
  </Routes>
  </BrowserRouter>
  </>
)