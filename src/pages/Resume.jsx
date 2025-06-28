import React from "react";
import FancyButton from "../components/fancybutton";
import downloadicon from "../assets/images/downloadicon.png"; // Import the download icon
import resumepdf from "../assets/KEVINBABURESUME.pdf"; // Import the resume PDF

const Resume = () => {
  return <div className="md:py-3 h-full md:my-3 mx-auto flex-col flex w-full md:p-0 p-6">
    <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-4 p-6">
      <div className="talk col-span-3 rounded-3xl my-10 row-span-3 row-start-1 col-start-1 bg-white border-3 h-full w-full flex justify-center items-center hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] flex-col">
        <h1 className="text-4xl font-bold text-center mt-10">Resume</h1>
        <p className="text-center p-5 mt-4 text-gray-600">Download my latest resume below!</p>
        <FancyButton 
              href={resumepdf}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-300 p-9 text-black border-2 border-black hover:shadow-lg transition-all duration-300 rounded-xl px-6 py-5  flex items-center gap-3"
              icon={
                <img 
                  src={downloadicon} 
                  alt="Download" 
                  className="w-6 h-6 filter brightness-0" // Makes icon black
                />
              }
              text="View Resume"
            />
      </div>
      
    </div>
    
  </div>;
};

export default Resume;
