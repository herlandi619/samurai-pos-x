import React from 'react'

import blogs from '../img/blogs.png'

const Blogs = () => {
  return (
    <div className='mx-auto lg:flex justify-center'>

      <div className='p-16 mx-auto lg:w-1/2'>
        
        <img src={blogs} alt="about" width={300} className='mx-auto' />
        <p className='text-xl font-semibold text-center my-3 text-slate-700 mb-5 font-karsha'>Hardware</p>
      </div>
    
    <div className='pb-20 lg:w-1/2 lg:p-24'>
      <h1 className='text-5xl font-semibold font-[Poppins] text-slate-900 text-center my-5 font-karsha '>-Hardware Kami-</h1>
      <p className='text-xl lg:text-2xl text-slate-700 px-12 font-karsha '>Hardware pelengkap mesin kasir untuk bisnis Anda dan Memudahkan semua urusan transaksi penjualan</p>
      
    </div>

    

   </div>
  )
}

export default Blogs
