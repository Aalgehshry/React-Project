import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
  return (<>
<footer className="bg-[#2c3e50]">
    <div className="p-5">    
        <div className="flex  justify-around items-center m-6  max-sm:flex-col">
            <div className="text-center p-4 sm:flex-1  md:mb-0 sm:mb-3">
                <h3 className="text-white font-semibold text-[26.8px] pt-5 mb-2">LOCATION</h3>
                <p className="text-white mb-4 text-base">2215 John Daniel Drive</p>
                <p className="text-white mb-4 text-base">Clark, MO 65243</p>
            </div>
            <div className="text-center p-4 sm:flex-1  md:mb-0 sm:mb-3">
                <h3 className="text-white font-semibold text-[26.8px] pt-5 mb-2">AROUND THE WEB</h3>
                <div className="text-white">
                    <i className="fa-brands fa-facebook text-base mx-1 border border-white p-2.5 rounded-[50%]"></i>
                    <i className="fa-brands fa-twitter text-base mx-1 border border-white p-2.5 rounded-[50%]"></i>
                    <i className="fa-brands fa-linkedin text-base mx-1 border border-white p-2.5 rounded-[50%]"></i>
                    <i className="fa-solid fa-globe text-base mx-1 border border-white p-2.5 rounded-[50%]"></i>
                </div>
            </div>
            <div className="text-center p-4 sm:flex-1  md:mb-0 sm:mb-3">
                <h3 className="text-white font-semibold text-[26.8px] pt-5 mb-2">ABOUT FREELANCER</h3>
                <p className="text-white mb-4 text-base">
                    Freelance is a free to use, licensed Bootstrap theme <br />
                    created by Route
                </p>
            </div>
        </div>
    </div>

    <div className="p-2.5 bg-[#1a252f]">
        <p className="text-white text-center text-lg mb-4 leading-6 pt-2.5">
            Copyright © Your Website 2021
        </p>
    </div>
</footer>
    </>
  );
}
