import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'

import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Blogs from './Components/Blogs'
import Contacts from './Components/Contacts'

import bg from './img/bg.png'
import Footer from './Components/Footer'

const App = () => {
  return (
   <Router>
      
        <Navbar />
        
        <Routes>  
            <Route path='/' exact element={<Hero />} /> 
            <Route path='/About' element={<About />} />
            <Route path='/Blogs' element={<Blogs />} />
            <Route path='/Contacts' element={<Contacts />} />
            
        </Routes>

        <Footer />
   </Router>
  )
}

export default App