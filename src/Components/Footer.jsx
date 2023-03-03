import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
<div className='bg-gradient-to-b from-[#8FE4FF] '>
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-800 ">
            
    <div>
        <h1 className="w-full text-3xl font-bold text-gray-800">X-SM</h1>
        <p className="py-4">Get free POS that comes with advanced privacy and security tools.</p>
        <div className="flex justify-between md:w-[75%] my-6">
            <FaDribbbleSquare size={30} />
            <FaFacebookSquare size={30} />
            <FaGithubSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
        </div>
    </div>

    <div className="lg:col-span-3 flex justify-between">

    <div>
        <h6 className="font-medium text-gray-500">Solutions</h6>
        <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
        </ul>
    </div>

    <div>
        <h6 className="font-medium text-gray-500">Support</h6>
        <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Dcumentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
        </ul>
    </div>

    <div>
        <h6 className="font-medium text-gray-500">Company</h6>
        <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Carerrs</li>
        </ul>
    </div>

    <div>
        <h6 className="font-medium text-gray-500">Legal</h6>
        <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
         
        </ul>
    </div>

    </div>
    
    
</div>

<div className=''>
        <p className='font-[Golos Text] text-xs py-7 text-center text-gray-600'>Copyright Herlandi || Tailwindcss / RectJs / Figma 2023</p>
    </div>
</div>

    
  )
}

export default Footer