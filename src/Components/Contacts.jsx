import React from 'react'

import contacts from '../img/contact.png'

//aos
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const Contacts = () => {

  useEffect(()=>{
    AOS.init({
      once: true,
      duration: 1000,
    })
  }, [])

  return (
    <div>

<div className='mx-auto lg:flex justify-center'>

  <div data-aos="fade-right" className='p-16 lg:w-1/2'>
  <h1 className='text-5xl   text-slate-900 text-center my-5 font-[Golos Text]'>-Kontak Kami-</  h1>
    <p className='py-5 text-3xl text-slate-700 md:text-center'>Kami ada di sini jika Anda punya masalah menggunakan Moka?</p>
    <p className='text-3xl text-slate-700 md:text-center'>Kami berkomitmen melayani Anda dengan baik, termasuk menyelesaikan masalah Anda. </p>

    <span className='py-7 flex justify-center'>
    <button className='px-10 py-3 bg-[#8FE4FF] rounded-xl shadow-lg text-white font-[Golos Text] hover:scale-105 duration-500'>Pusat Bantuan</button>
    </span>
  </div>

  <div data-aos="fade-left" className='p-16 mx-auto lg:w-1/2'>
    <img src={contacts} alt="about" width={300} className='mx-auto' />
  </div>

</div>

    <div className='my-16'></div>

    </div>
  )
}

export default Contacts
