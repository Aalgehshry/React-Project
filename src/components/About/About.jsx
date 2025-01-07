import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <>
<div
  className="bg-[#1abc9c] flex justify-center items-center text-white h-screen"
  style={{ minHeight: "calc(-92px + 100vh)", marginTop: "80px" }}
>
  <div className="text-base w-full">
    <div>
      <div className="text-center pt-6 text-white">
        <h2 className="mb-4 text-3xl sm:text-4xl font-bold">ABOUT COMPONENT</h2>
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
      </div>

      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 px-4">
            <p className="mb-4 text-base text-center md:text-left">
              Freelancer is a free bootstrap theme created by Route. The download
              includes the complete source files including HTML, CSS, and
              JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <p className="mb-4 text-base text-center md:text-left">
              Freelancer is a free bootstrap theme created by Route. The download
              includes the complete source files including HTML, CSS, and
              JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
