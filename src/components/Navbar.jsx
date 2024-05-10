import { useState } from "react";
import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
    const [nav,setNave]= useState(false)

    const handleNav = () => {
        setNave(!nav)
    }


    return (
        <div>
            <div className= " bg-black  text-gray-400 h-[100px] mx-auto flex justify-between items-center max-w-[1240px] fixed left-0 right-0 ">

                <h1 className="text-3xl font-bold primary-color ml-4"> Iqbal Ahmed</h1>
                <ul className="hidden md:flex">
                    <li className="p-5">About</li>
                    <li className="p-5">Work</li>
                    <li className="p-5">Contact</li>
                </ul>

                <div onClick={handleNav} className="block p-4 md:hidden" >
                    {nav ? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20} />}
                </div>
                <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-black ease-in-out duration-500': 'fixed left-[-100%]'}>
                    <h1 className=" text-3xl primary-color m-4">Md Iqbal Ahmed</h1>
                    <ul className=" p-8 text-2xl ">
                    <li className="p-2">About</li>
                    <li className="p-2">Work</li>
                    <li className="p-2">Contact</li> 
                    <li className="p-2">Contact</li> 
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;