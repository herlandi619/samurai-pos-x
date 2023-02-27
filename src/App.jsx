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

       <div className=''>
        <div className='p-24 mx-auto bg-slate-200  '>
          <h1 className='py-5 text-5xl font-semibold font-karsha text-slate-900 text-center'>-Get Started-</h1>
          <h3 className='text-2xl text-slate-700 text-center font-karsha xl:text-4xl '>Aplikasi kasir online berbasis cloud yang dapat membawa potensi usaha Anda ke level tertinggi, baik online maupun offline.</h3>
          <span className='flex justify-center p-5'>
          <button className='mx-auto py-3 px-16 bg-[#8FE4FF] text-white rounded-xl shadow-xl xl:mt-9 hover:scale-105 duration-300 '>Daftar</button>
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
