import React from "react";
import style from "./Navbar.module.css"
import { Link } from "react-router-dom";

export default function Navbar() {
  return <>
  
 

<nav className="bg-[#2c3e50] border-gray-200 fixed z-10  top-0 left-0 right-0 py-2 scroll-auto">
    <div className="flex flex-wrap justify-center md:justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to=""  className="self-center text-3xl py-1 mr-4 whitespace-nowrap text-white font-bold">
        START FRAMEWORK </Link>

        <div className="flex items-center ">
          <ul className="flex gap-5 text-white  ">
            <li className="mr-4  "><Link className="font-bold text-base p-2 focus:bg-[#1abc9c] focus:rounded-md " to="about">ABOUT</Link></li>
            <li className="mr-4"><Link className="font-bold text-base  p-2 focus:bg-[#1abc9c] focus:rounded-md" to="protfolio">PROTFOLIO</Link></li>
            <li className="mr-4"><Link className="font-bold text-base  p-2 focus:bg-[#1abc9c] focus:rounded-md" to="contact">CONTACT</Link></li>
          </ul>
        </div>
    </div>
</nav>
  </>;
}
