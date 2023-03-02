import React from 'react'
import topeng from '../img/topeng.png'
import shadow from '../img/shadow.png'

//aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {

  useEffect(()=>{
    AOS.init({
      once: true,
      duration: 1000,
    })
  }, [])

  return (

   <div>

    <div className='mx-auto lg:flex justify-center'>

    <div className='p-16 lg:w-1/2'>
      <h1 data-aos="fade-right" className='text-5xl font-semibold font-[Golos Text] text-slate-900 text-center my-5 '>-Tentang Kami-</h1>
      <p data-aos="fade-right"  className="py-5 text-base text-slate-700 md:text-xl">Misi kami adalah memberdayakan merchant untuk tumbuh dengan usaha mereka sendiri.</p>

      <p data-aos="fade-right"  className="py-5 text-base text-slate-700 md:text-xl">Moka ingin meringankan beban mengelola usaha Anda sehingga Anda bisa fokus dengan apa yang sebenarnya penting: melayani pelanggan dan mengembangkan usaha.</p>

      

      <p data-aos="fade-right"  className="py-5 text-base text-slate-700 md:text-xl">Tapi, tidak hanya itu.
Kami juga paham bahwa sebuah ekosistem solusi usaha harus diciptakan sehingga Moka bisa menjadi produk yang diterima semua jenis usaha.</p>

     

      <p data-aos="fade-right"  className="py-5 text-base text-slate-700 md:text-xl">Sejak 2020, Moka sudah tergabung dalam ekosistem Gojek. Bergabungnya Moka ini menjadikan kami sistem pergerakan utama bagi merchant, dengan solusi penjualan online dan offline untuk membantu usaha berjualan dan bertumbuh kembang.</p>

    </div>

    <div className='p-16 mx-auto lg:w-1/2'>
    
      <img data-aos="fade-left" src={topeng} alt="about" width={270} className='mx-auto' />

      <p data-aos="fade-left" className="py-5 text-base text-slate-700 md:text-xl">Itulah kenapa kami mendesain sebuah aplikasi kasir yang bisa diunduh dari handphone dengan dasbor untuk memantau laporan penjualan harian secara real-time.</p>

      <p data-aos="fade-left" className="py-5 text-base text-slate-700 md:text-xl">Saat ini, Moka adalah platform terintegrasi di Indonesia yang terdiri atas POS (aplikasi kasir), toko online, pembayaran, manajemen inventori, program loyalitas, pembukuan, pengadaan bahan baku, dan pinjaman uang.</p>

    </div>
 
    </div>

    <div className='my-16'></div>


   </div>
  )
}

export default About
