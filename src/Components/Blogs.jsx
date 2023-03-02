import React from 'react'

import blogs from '../img/blogs.png'

//aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Blogs = () => {

  useEffect(()=>{
    AOS.init({
      once: true,
      duration: 1000,
    })
  }, [])

  return (
    <div className='mx-auto lg:flex justify-center'>

      <div className='p-16 mx-auto lg:w-1/2'>
        
        <img data-aos="fade-right" src={blogs} alt="about" width={300} className='mx-auto' />
        <p data-aos="fade-right" className='text-xl font-semibold text-center my-3 text-slate-700 mb-5 font-[Golos Text]'>Hardware</p>
      </div>
    
    <div className='pb-20 lg:w-1/2 lg:p-24'>
      <h1 data-aos="fade-left" className='text-5xl font-semibold font-[Poppins] text-slate-900 text-center my-5 font-[Golos Text] '>-Hardware Kami-</h1>
      <p data-aos="fade-left" className='text-xl lg:text-2xl text-slate-700 px-12 md:text-xl '>Hardware pelengkap mesin kasir untuk bisnis Anda dan Memudahkan semua urusan transaksi penjualan</p>
      
    </div>
   </div>
  )
}

export default Blogs
