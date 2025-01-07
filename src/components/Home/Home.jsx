import React from "react";
import style from "./Home.module.css";
import logo from "../../assets/logo.png";

export default function Home() {
  return (
    <>
       <div
  className="bg-[#1abc9c] flex justify-center items-center text-white h-screen"
  style={{ minHeight: "calc(-92px + 100vh)", marginTop: "80px" }}>
  <div className="flex flex-col justify-center items-center text-center">
    <img
      src={logo}
      className="mb-4 w-[250px] max-w-full max-h-full"
      alt="logo"
    />
    <h2 className="mb-4 text-4xl font-bold">START FRAMEWORK</h2>
    <div className="flex items-center justify-center mb-4">
      <div
        className="me-4 bg-white"
        style={{ height: "4px", width: "80px" }}
      ></div>
      <i className="fas fa-star text-base"></i>
      <div
        className="ms-4 bg-white"
        style={{ height: "4px", width: "80px" }}
      ></div>
    </div>
    <div className="font-sans text-center">
      Graphic Artist - Web Designer - Illustrator
    </div>
  </div>
</div>

    </>
  );
}
