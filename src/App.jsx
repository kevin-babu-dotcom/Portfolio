import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import myVideo from "./assets/images/video8.webm"; // <-- Import video
import "./App.css";

function App() {
  return (
    <div className="relative md:m-0 m-3 min-h-screen ">
      {/* 1. Background Video */}
      <video
        className="w-full h-full object-cover   absolute top-0 left-0 md:px-8 py-3 z-0  "
        src={myVideo}  // Use the imported video
        autoPlay
        loop
        muted
      />

      {/* 2. Main Content (z-10 above video) */}

      <div className="md:bg-white/1 backdrop-blur border-2 bg-transparent shadow-[inset_0_3px_6px_rgba(255,255,255,0.15),inset_0_-3px_6px_rgba(0,0,0,0.15),inset_2px_0_4px_rgba(255,255,255,0.08),inset_-2px_0_4px_rgba(0,0,0,0.08)]  border-white/30  rounded-xl md:relative md:z-10 md:flex md:min-h-screen md:items-center md:m-8 md:p-9 ">

        <PageTransition>
          <Navbar />
          <div className="md:flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </PageTransition>
      </div>
    </div>
  );
}

export default App;
