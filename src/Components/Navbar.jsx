import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";


const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="text-[#8FE4FF] flex justify-between items-center h-24 max-w-[1240px] mx-auto p-10">
            <Link className="w-full text-3xl font-bold text-[#8FE4FF]" to='/hero'>Samurai POS-X</Link>
            <ul className="hidden md:flex">
                
                <Link className="p-5 pt-7 text-xl font-semibold hover:text-slate-300 duration-500" to='about'>About</Link>
                <Link className="p-5 pt-7 text-xl font-semibold hover:text-slate-300 duration-500" to='blogs'>Blogs</Link> 
                <Link className="p-5 pt-7 text-xl font-semibold hover:text-slate-300 duration-500" to='contacts'>Contacts</Link>  
                
            </ul>

            <div onClick={handleNav} className="block md:hidden">
                { !nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
            <Link className="w-full text-2xl font-bold text-[#8FE4FF] p-4" to='/hero'>Samurai POS-X</Link>  
                <ul className="flex p-3">
                    
                    {/* <li className="p-4 border-b border-gray-600 hover:text-[#8FE4FF] duration-500"><a href="#">About</a></li>
                    <li className="p-4 border-b border-gray-600 hover:text-[#8FE4FF] duration-500"><a href="#">Company</a></li>
                    <li className="p-4 border-b border-gray-600 hover:text-[#8FE4FF] duration-500"><a href="#">Resources</a></li>
                    <li className="p-4 hover:text-[#8FE4FF] duration-500"><a href="#">Contact</a></li> */}
                    
                    <li><Link className="p-4 border-b border-gray-600 hover:text-[#8FE4FF] duration-500" to='about'>About</Link></li>

                    <li><Link className="p-4 border-b border-gray-600 hover:text-[#8FE4FF] duration-500" to='blogs'>Blogs</Link></li>

                    <li><Link className="p-4 border-b border-gray-600 hover:text-[#8FE4FF] duration-500" to='contacts'>Contacts</Link></li>

                    

                    
                    
                    
                    

                </ul>
            </div>
        </div>

    )
}


export default Navbar;