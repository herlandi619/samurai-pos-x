import React,  { useEffect } from 'react'

//aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Post = (props) => {

    useEffect(()=>{
        AOS.init({
          once: true,
          duration: 1000,
        })
      }, [])

  return (
    <div className='bg-[#8FE4FF] flex pt-5'>

        <div data-aos="fade-right" className='post w-1/2 mx-auto p-7  mb-5 bg-white rounded-xl shadow-lg md:w-1/3  '>
            <div className='img-thumb'>
                <img src="http://placeimg.com/200/150/tech" className='w-full' alt="dummy" />
            </div>
            <div className='content'>
                <p className='title text-xl font-bold mb-3'>{props.data.title}</p>
                <p className='desc'>{props.data.email}</p>
                <button className='py-3 px-3 mt-3 bg-red-500 text-white rounded-lg shadow-lg hover:opacity-80 duration-300' onClick={() => props.remove(props.data.id)}>Remove</button>
                <button className='update py-3 px-3 mt-3 mx-3 bg-green-500 text-white rounded-lg shadow-lg hover:opacity-80 duration-300' onClick={() => props.update(props.data)}>Update</button>
            </div>

          
        </div>

        <div>
              
        </div>

    </div>
  )
}

export default Post
