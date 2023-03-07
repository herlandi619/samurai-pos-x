import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Typed from 'react-typed';

import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Blogs from './Components/Blogs'
import Contacts from './Components/Contacts'
import BlogPost from './Components/BlogPost';

import Footer from './Components/Footer'
import bg from './img/moka.jpg'

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'


const App = () => {

  useEffect(()=>{
    AOS.init({
      once: true,
      duration: 1000
    })
  }, [])

  return (
   <Router>
      
        <Navbar />

       <div>
   

        <div className='p-24 mx-auto bg-gradient-to-t from-[#8FE4FF] to-slate-900'>
        
          <h1 data-aos="fade-up" className='text-lg p-2 text-[#8FE4FF] font-bold text-center  rounded-lg max-w-sm mx-auto md:text-2xl'>Aplikasi kasir online</h1>

          <div className='max-w-md mx-auto mt-4 '>
          <h3 data-aos="fade-up" className='text-3xl font-bold ] text-slate-100 text-center lg:max-w-xl mx-auto md:text-4xl '>berbasis cloud yang dapat membawa </h3>
          
          <p data-aos="fade-up" className='text-3xl font-bold text-slate-100 text-center md:text-4xl'> potensi usaha baik</p>
          </div>
              
              <div data-aos="fade-up" className='flex justify-center'>
              <Typed  className='text-3xl font-bold text-slate-100 text-center' strings={['Online', 'Maupun', 'Offline']} typeSpeed={120} backSpeed={140} loop />
              </div>
         


          <span className='flex justify-center p-5'>

          <Link data-aos="fade-up" to='blogpost' className='mx-auto py-3 px-16 bg-[#8FE4FF] text-gray-100 font-bold text-xl rounded-xl drop-shadow-md mt-3 hover:scale-105 duration-300 '>Get Started</Link>

          {/* <Link className="p-5 pt-7 text-xl font-[Golos] hover:text-slate-300 duration-500" to='blogpost'>Get Strated</Link> */}

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
            <Route path='/BlogPost' element={<BlogPost />} />
        </Routes>

        <Footer />
   </Router>
  )
}

export default App
