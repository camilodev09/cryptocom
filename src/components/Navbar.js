


import React, { useState } from "react";

import { Link } from "react-router-dom";

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

import logo from "../assets/favicon22.svg"

const Navbar = () => {
  /*Show & Hidden Menu initial state = false then throught toogle it change  */
  const [showMenu, setShowMenu] = useState(false);
  /*Show & Hidden Menu initial state = false then throught toogle it change  */
 

  return (
    <div className="w-full h-15 bg-[#09090B] border-b-[1px] border-b-gray-700  font-titleFont sticky top-0 z-50 px-4"> 
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div className='flex flex-row justify-center items-center '>

          <img  src={logo} alt='logo-crytocom' />

           <h1 className=' ml-2 text-yellow-500 text-3xl'> Crypto<span className='text-yellow-300'>com</span></h1>
          </div>
        </Link>
        <div className="flex  items-center gap-3 md:gap-8 ">
          <ul className="hidden mdl:inline-flex items-center gap-6 lgl:gap-10">
            <li className="text-base text-gray-400 font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              <a href="/">Home</a>
            </li>
            <li className="text-base text-gray-400 font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              <a href="/">Contact</a>
            </li>
            <li className="text-base text-gray-400 font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              <a href="/market">Market</a>
            </li>

            <li className="text-base text-gray-400 font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              <a href="/">Wallet</a>
            </li>
          </ul>
          {/*MID  POSITION MENU */}
          
          {/*MID POSITION MENU */}

          <div
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl mdl:hidden  w-10 h-12 inline-flex items-center  "
          >
            {showMenu ? <MdClose /> : <FiMenu />}
          </div>
          {showMenu && (
            <div className="w-[100%] h-screen m-0 overflow-scroll absolute  left-0 bg-neutral-900 p-4 scrollbar-hide rounded-br-3xl top-16 ">
              <div className="flex flex-col gap-5 py-6 relative pb-10">
                <div className='w-full'>
                  <p className="text-sm text-gray-300 mt-2 w-full text-center">
                  Discover the incredible investment opportunity in cryptocurrencies on our platform!. At Cryptocom, we offer you a safe and reliable cryptocurrency investment experience with an intuitive <br/> and easy-to-use interface.
                  </p>
                </div>

                <ul className="flex flex-col gap-4 pt-5">
                  <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    <a href="/">Home</a>
                  </li>
                  <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    <a href="/">About Us</a>
                  </li>
                  <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    <a href="/">Contact</a>
                  </li>
                  <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    <a href="/market">Market</a>
                  </li>
                  <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    <a href="/Store">Wallet</a>
                  </li>
                  <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    <a href="/Login">Sign In</a>
                  </li>
                </ul>

                <div className="flex flex-col gap-4">
                  <h2 className="fond-bold text-base font-titleFont mb-4">
                    Find me in
                  </h2>
                  <div className="flex gap-4">
                    <span className="bannerIcon">
                      <FaFacebookF />
                    </span>
                    <span className="bannerIcon">
                      <FaTwitter />
                    </span>
                    <span className="bannerIcon">
                      <FaLinkedinIn />
                    </span>
                  </div>
                </div>
                <div className="w-full p-0 ">
                  <div className=" bg-slate-600 mt-5 text-base w-50 h-10 tracking-wide border-[1px] border-gray-600 rounded-md flex items-center justify-center  hover:border-blue-600 cursor-pointer duration-300">
                    <span className="text-sm text-gray-900">
                      {" "}
                      <a href="./Login"> Sign in and Enjoy!</a>
                    </span>
                  </div>

                  <div className="bg-slate-600  mt-1 text-base w-50 h-10 tracking-wide border-[1px] border-gray-600 rounded-md flex items-center justify-center  hover:border-blue-600 cursor-pointer duration-300">
                    <span className="text-sm text-gray-900">
                      {" "}
                      <a href="./Store">Start Shopping Now!</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
