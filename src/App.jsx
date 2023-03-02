import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Typed from 'react-typed';

import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Blogs from './Components/Blogs'
import Contacts from './Components/Contacts'


import Footer from './Components/Footer'
import bg from './img/moka.jpg'

const App = () => {
  return (
   <Router>
      
        <Navbar />

       <div className=''>
   

        <div className='p-24 mx-auto bg-slate-900'>
        
          <h1 className='text-lg p-2 text-[#8FE4FF] font-bold text-center  rounded-lg max-w-sm mx-auto md:text-2xl'>Aplikasi kasir online</h1>

          <div className='max-w-md mx-auto mt-4 '>
          <h3 className='text-3xl font-bold ] text-slate-100 text-center lg:max-w-xl mx-auto md:text-4xl '>berbasis cloud yang dapat membawa </h3>
          
          <p className='text-3xl font-bold text-slate-100 text-center md:text-4xl'> potensi usaha baik</p>
          </div>
              
              <div className='flex justify-center'>
              <Typed className='text-3xl font-bold text-slate-100 text-center' strings={['Online', 'Maupun', 'Offline']} typeSpeed={120} backSpeed={140} loop />
              </div>
         


          <span className='flex justify-center p-5'>
          <button className='mx-auto py-3 px-16 bg-[#8FE4FF] text-slate-100 font-bold text-xl rounded-xl shadow-slate-100 mt-3 hover:scale-105 duration-300 '>Get Started</button>
          </span>
          <div className='py-12'></div>
        </div>
        </div>
        


        <Routes> 
            <Route path='/' exact element={<Hero />} />
            <Route path='/hero' element={<Hero />} /> 
            <Route path='/about' element={<About />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/contacts' element={<Contacts />} />
        </Routes>

        <Footer />
   </Router>
  )
}

export default App
