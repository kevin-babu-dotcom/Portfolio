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
import myVideo from "./assets/images/video4.webm"; // <-- Import video
import "./App.css";

function App() {
  return (
    <div className="relative md:m-0 m-3 min-h-screen">
      {/* 1. Background Video */}
      <video
        className="w-full h-full object-cover p-2 absolute top-0 left-0 md:p-12 z-0 "
        src={myVideo}  // Use the imported video
        autoPlay
        loop
        muted
      />

      {/* 2. Main Content (z-10 above video) */}
      <CustomCursor />
      <div className="bg-white/5 m-2 backdrop-blur-md border-2 border-white/50 shadow-glow rounded-2xl md:relative md:z-10 md:flex md:min-h-screen md:items-center md:m-12 md:p-8 py-8 ">
        
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
