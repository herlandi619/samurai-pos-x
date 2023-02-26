import React from 'react'

import blogs from '../img/blogs.png'

const Blogs = () => {
  return (
    <div className='mx-auto lg:flex justify-center'>

      <div className='p-16 mx-auto lg:w-1/2'>
        
        <img src={blogs} alt="about" width={300} className='mx-auto' />
        <p className='text-xl font-semibold text-center my-3 text-slate-700 mb-5'>Lorem ipsum dolor sit amet.</p>
      </div>
    
    <div className='p-16 lg:w-1/2'>
      <h1 className='text-4xl font-semibold font-[Poppins] text-slate-700 text-center my-5 '>Blogs Kami</h1>
      <p className='text-md text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odio amet optio nisi eveniet iusto atque quo, nobis beatae rerum doloremque corporis deserunt aliquam. Maiores doloremque dicta pariatur veritatis aspernatur?</p>
    </div>

    

   </div>
  )
}

export default Blogs
