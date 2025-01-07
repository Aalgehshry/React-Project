import React from "react";
import style from "./Protfolio.module.css";
import img1 from "../../assets/images1.png";
import img2 from "../../assets/images2.png";
import img3 from "../../assets/images3.png";

export default function Protfolio() {
  return (
    <>
<div
  className="mt-48 text-white min-h-screen flex flex-col justify-center items-center"
  style={{ marginTop: "86px" }}>
  
  <div className="text-center mt-8 ">
    <h2 className="mb-4 text-black text-3xl sm:text-4xl font-bold">
      PORTFOLIO COMPONENT
    </h2>
    <div className="flex items-center justify-center mb-4">
      <div
        className="me-4 bg-black"
        style={{ height: "4px", width: "80px" }}
      ></div>
      <i className="fas fa-star text-black text-base"></i>
      <div
        className="ms-4 bg-black"
        style={{ height: "4px", width: "80px" }}
      ></div>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px[24px] mt-12 sm:gap-8  mb-8 px-4 sm:px-0">
    {[img1, img2, img3, img1, img2, img3].map((image, index) => (
      <div
        key={index}
        className="relative rounded-lg overflow-hidden  cursor-pointer w-full sm:w-[400px] h-[240px] sm:h-[320px]"
      >
        <img
          className="w-full h-full rounded-lg object-cover"
          src={image}
          alt=""
        />
        <div
          className={`${style.layer} start-0 top-0 w-full h-full flex justify-center items-center absolute`}
        >
          <i className="text-white fas fa-plus text-4xl sm:text-5xl"></i>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  );
}
