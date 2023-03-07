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
                <Link className="block text-3xl font-[Golos] text-[#8FE4FF]" to='/'>X-SM</Link>
                <ul className="hidden md:flex">

                    <Link className="p-5 pt-7 text-xl font-[Golos Text] hover:text-slate-300 duration-500" to='hero'>Home</Link>
                    <Link className="p-5 pt-7 text-xl font-[Golos] hover:text-slate-300 duration-500" to='about'>About</Link>
                    <Link className="p-5 pt-7 text-xl font-[Golos] hover:text-slate-300 duration-500" to='blogs'>Hardware</Link>
                    <Link className="p-5 pt-7 text-xl font-[Golos] hover:text-slate-300 duration-500" to='contacts'>Contacts</Link>
                    {/* <Link className="p-5 pt-7 text-xl font-[Golos] hover:text-slate-300 duration-500" to='blogpost'>BlogPost</Link> */}

                </ul>

                <div onClick={handleNav} className="block md:hidden ">
                    {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                <div className={!nav ? "fixed left-0 top-0 w-[40%] h-full z-20 border-r border-r-gray-900 bg-slate-900 ease-in-out duration-500" : "fixed left-[-100%]"}>
            <h1 className="w-full text-3xl font-bold text-[#8FE4FF] m-4">X-SM</h1>
                <ul className="uppercase p-4">

                    <li className="p-2 border-b border-gray-600 hover:text-white duration-500"><Link to='hero'>Home</Link></li>

                    <li className="p-2 border-b border-gray-600 hover:text-white duration-500"><Link to='about'>About</Link></li>

                    <li className="p-2 border-b border-gray-600 hover:text-white duration-500"><Link to='blogs'>Hardware</Link></li>

                    <li className="p-2 border-b border-gray-600 hover:text-white duration-500"><Link to='contacts'>Contact</Link></li> 

                    {/* <li className="p-2 border-b border-gray-600 hover:text-white duration-500"><Link to='blogpost'>BlogPost</Link></li>  */}
                </ul>
            </div>
            </div>
        </div>
    )
}


export default Navbar;

