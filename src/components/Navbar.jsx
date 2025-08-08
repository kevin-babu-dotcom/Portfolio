import React, { useState } from "react";
import { Link } from "react-router-dom";
import FancyButton from "./fancybutton";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full w-full my-5 p-2 md:p-0 md:my-0 grid">
      <nav className="bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] rounded-3xl border shadow-sm md:m-0 md:text-base py-3 md:px-8">
        {/* Top row: brand + hamburger (hamburger hidden on md+) */}
        <div className="mx-auto flex items-center justify-between px-3 md:px-0">
          <div className="mb-0">
            <FancyButton
              to="/"
              className="border-2 border-black bg-orange-300 rounded-full text-black no-underline px-6 py-4 m-3 md:m-0 md:text-xl"
            >
              <span className="italic font-medium">KEVIN&nbsp;</span>
              <span className="font-bold">BABU</span>
            </FancyButton>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex gap-3 py-3 md:py-0">
            <FancyButton text="PROJECTS" className="border bg-orange-300 text-black text-sm p-3 px-6" to="/projects" />
            <FancyButton text="RESUME" className="border bg-orange-300 text-black text-sm p-3 px-6" to="/resume" />
            <FancyButton text="CONTACT" className="border bg-orange-300 text-black text-sm p-3 px-6" to="/contact" />
          </div>

          {/* Mobile hamburger using FancyButton */}
          <FancyButton
            className="md:hidden border-2 border-black bg-orange-300  p-3 m-3"
            onClick={() => setOpen((v) => !v)}
            icon={
              open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )
            }
          />
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div id="mobile-menu" className="md:hidden px-3 pb-3">
            <div className="flex flex-col gap-2">
              <FancyButton
                text="PROJECTS"
                className="border bg-orange-300 text-black text-sm p-3 px-6 w-full"
                to="/projects"
                onClick={() => setOpen(false)}
              />
              <FancyButton
                text="RESUME"
                className="border bg-orange-300 text-black text-sm p-3 px-6 w-full"
                to="/resume"
                onClick={() => setOpen(false)}
              />
              <FancyButton
                text="CONTACT"
                className="border bg-orange-300 text-black text-sm p-3 px-6 w-full"
                to="/contact"
                onClick={() => setOpen(false)}
              />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
