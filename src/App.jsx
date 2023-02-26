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

       
        <div className='p-24 bg-slate-200'>
          <h1 className='text-3xl font-semibold font-[Poppins] text-slate-900 text-center'>Get Starting</h1>
          <h3 className='text-base font-[Poppins] text-slate-700 text-center p-2'>Masuk Dan Buat Mesin Kasir Pribadi Kamu Sendiri Dengan Kami</h3>
          <span className='flex justify-center p-3'>
          <button className='mx-auto py-3 px-5 bg-[#8FE4FF] text-white rounded-xl shadow-xl hover:scale-105 duration-300 '>Daftar</button>
          </span>
        </div>
        


        <Routes> 
            <Route path='/' exact element={<Hero />} /> 
            <Route path='/about' element={<About />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/contacts' element={<Contacts />} />
        </Routes>

        <Footer />
   </Router>
  )
}

export default App
