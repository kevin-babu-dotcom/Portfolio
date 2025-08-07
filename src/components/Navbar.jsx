import React from "react";
import { Link } from "react-router-dom";
import FancyButton from "./fancybutton";

const Navbar = () => (
  <div className="h-full w-full my-8 md:my-0  grid ">
    <nav className=" bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] rounded-3xl border shadow-sm md:m-0  md:text-base py-3 md:px-8 ">
    <div className=" mx-auto flex bg-white  flex-col sm:flex-row items-center justify-between rounded-full">
      <div className="mb-0 sm:mb-0" >
          <FancyButton to="/" className="border-2 border-black bg-orange-300 rounded-full text-black no-underline px-6 py-4 m-3 md:m-0  md:text-xl ">
          <span className="italic font-medium ">KEVIN&nbsp;</span>
          <span className="font-bold">BABU</span>
        </FancyButton>
      </div>
      <div className="flex gap-3 py-3 md:py-0 ">
        <FancyButton text="PROJECTS" className="border bg-orange-300 text-black text-sm p-3 px-6 "to="/projects" />
        <FancyButton text="RESUME" className="border bg-orange-300 text-black text-sm p-3 px-6" to="/resume" />
        <FancyButton text="CONTACT" className="border bg-orange-300 text-black text-sm p-3 px-6"  to="/contact" />
      </div>
    </div>
  </nav>
  </div>
);

export default Navbar;
