import React from 'react'
import topeng from '../img/topeng.png'
import shadow from '../img/shadow.png'

const About = () => {
  return (
   <div>

    <div className='mx-auto lg:flex justify-center'>

    <div className='p-16 lg:w-1/2'>
      <h1 className='text-4xl font-semibold font-[Poppins] text-slate-700 text-center my-5 '>Tentang Kami ?</h1>
      <p className='text-md text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odio amet optio nisi eveniet iusto atque quo, nobis beatae rerum doloremque corporis deserunt aliquam. Maiores doloremque dicta pariatur veritatis aspernatur?</p>
    </div>

    <div className='p-16 mx-auto lg:w-1/2'>
    
      <img src={topeng} alt="about" width={270} className='mx-auto' />

    </div>

    </div>

    <div className='my-16'></div>


   </div>
  )
}

export default About
