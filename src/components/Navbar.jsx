import React from "react";
import { Link } from "react-router-dom";
import FancyButton from "./fancybutton";

const Navbar = () => (
  <div className=" h-full  md:w-full max-w-[375]">
    <nav className="sticky bg-white md:m-0 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] shadow-sm md:text-base border py-3 px-3 sm:px-8 md:rounded-3xl">
    <div className=" mx-auto flex bg-white  flex-col sm:flex-row items-center justify-between rounded-full">
      <div className="mb-0 sm:mb-0" >
          <FancyButton to="/" className="px-6 py-4 border-2 border-black bg-orange-300 rounded-full text-black text-xl no-underline font-gilroy">
          <span className="italic font-medium ">KEVIN&nbsp;</span>
          <span className="font-bold">BABU</span>
        </FancyButton>
      </div>
      <div className="flex gap-3 ">
        <FancyButton text="PROJECTS" className="border  p-3 px-6 bg-orange-300 text-black text-sm"to="/projects" />
        <FancyButton text="RESUME" className="border p-4 px-8 bg-orange-300 text-black text-sm" to="/resume" />
        <FancyButton text="CONTACT" className="border p-4 px-6 bg-orange-300 text-black text-sm"  to="/contact" />
      </div>
    </div>
  </nav>
  </div>
);

export default Navbar;
