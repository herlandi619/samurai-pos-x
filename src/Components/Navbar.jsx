import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";


const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="bg-slate-900">
            <div className="text-[#8FE4FF] flex justify-between items-center h-24 max-w-[1240px] mx-auto p-10 ">
                <Link className="w-full text-3xl font-[Golos] text-[#8FE4FF]" to='/'>X-SM</Link>
                <ul className="hidden md:flex">

                    <Link className="p-5 pt-7 text-xl font-[Golos Text] hover:text-slate-300 duration-500" to='hero'>Home</Link>
                    <Link className="p-5 pt-7 text-xl font-[Golos] hover:text-slate-300 duration-500" to='about'>About</Link>
                    <Link className="p-5 pt-7 text-xl font-[Golos] hover:text-slate-300 duration-500" to='blogs'>Hardware</Link>
                    <Link className="p-5 pt-7 text-xl font-[Golos] hover:text-slate-300 duration-500" to='contacts'>Contacts</Link>

                </ul>

                <div onClick={handleNav} className="block md:hidden">
                    {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                <div className={!nav ? "fixed left-0 top-0 w-[40%] h-full bg-slate-900 ease-in-out duration-500" : "fixed left-[-100%]"}>
                    <Link className="w-full text-2xl font-[Golos] text-[#8FE4FF] p-8 " to='/'>X-SM</Link>
                    <ul className=" p-8">

                        {/* <li className="p-4 border-b border-gray-600 hover:text-[#8FE4FF] duration-500"><a href="#">About</a></li>
                    <li className="p-4 border-b border-gray-600 hover:text-[#8FE4FF] duration-500"><a href="#">Company</a></li>
                    <li className="p-4 border-b border-gray-600 hover:text-[#8FE4FF] duration-500"><a href="#">Resources</a></li>
                    <li className="p-4 hover:text-[#8FE4FF] duration-500"><a href="#">Contact</a></li> */}
                        
                        <li><Link className="text-2xl font-[Golos] border-b border-gray-600 hover:text-[#8FE4FF] duration-500" to='hero'>Home</Link></li>

                        <li><Link className="text-2xl font-[Golos] border-b border-gray-600 hover:text-[#8FE4FF] duration-500" to='about'>About</Link></li>

                        <li><Link className="text-2xl font-[Golos] border-b border-gray-600 hover:text-[#8FE4FF] duration-500" to='blogs'>Hardware</Link></li>

                        <li><Link className="text-2xl font-[Golos] border-b border-gray-600 hover:text-[#8FE4FF] duration-500" to='contacts'>Contacts</Link></li>

                     </ul>
                </div>
            </div>
        </div>
    )
}


export default Navbar;