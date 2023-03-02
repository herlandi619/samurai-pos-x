import React, { useEffect } from 'react'
import tombol from '../img/tombol.png'
import hero from '../img/hero.png'

//aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  useEffect(()=>{
    AOS.init({
      once: true,
      duration: 1000,
    })
  }, [])

  return (
    
    <div className=' lg:flex xl:flex 2xl:flex'>

        <div data-aos="fade-right" className='p-20 '>
            <h1 className='text-2xl font-semibold cover-full font-[Golos Text] text-slate-700 text-center md:text-3xl lg:text-4xl'>Atur Kasir Lebih Mudah</h1>

            <h1 className='text-4xl font-semibold font-[Golos Text] text-slate-700 text-center  md:text-5xl lg:text-5xl'>Dengan <span className='text-[#8FE4FF]'>X-SM</span> POS</h1>

            <h3 className='text-slate-700  text-center my-5 md:text-md lg:text-xl'>Kami Membantu Bisnis Anda Mempercepat Proses Penjualan Dengan Aplikasi Kasir MOKA</h3>

            <span className='flex justify-center'>
            <button className='py-3 px-3 bg-[#8FE4FF] text-white font-[Golos Text] rounded-xl shadow-xl items-center my-2 hover:scale-105 duration-300 '>COBA GRATIS SEKARANG</button>
            </span>

                <div className='flex justify-center'>
                    <img src={tombol} alt="tombol" className='w-6 my-5' />
                    <h3 className='self-center px-2'>Tonton Video Kami</h3> 
                </div>

            </div>

            <div data-aos="fade-left" className='lg:my-auto pb-20'>

                <img src={hero} alt="hero" className='w-1/2 mx-auto'/>

            </div>


    </div>
    
  )
}

export default Hero
