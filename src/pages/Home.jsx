import React from "react";
import SpirographIcon from "../components/SpirographIcon";
import FancyButton from "../components/fancybutton";



const Home = () => {
  return (
    <div className=" bg-black md:py-3 h-full md:my-2 mx-auto flex-col flex w-full md:p-0 p-6">
      <div className=" md:grid grid-cols-[58.6fr_34.5fr] grid-rows-1 md:gap-4  h-full w-full ">
        {/* Left grid */}
        <div className="md:grid grid-rows-[56.9fr_43.1fr] grid-cols-9 md:gap-4 h-full flex-1 col-start-1 ">

          <div className="PassionCard md:p-0 p-2 bg-white col-span-6 row-start-1 h-full w-full rounded-3xl md:relative  flex  shadow-md md:overflow-hidden  flex-col items-center justify-center">
            <div className="md:absolute md:top-10 right-12 md:p-0 p-2"> <SpirographIcon /></div>
            <div className="md:absolute md:bottom-15 left-10 flex flex-col ">
              <span className="font-black  text-[clamp(1.5rem,3.8vw,4vw)] lg:text-[clamp(1.5rem,3.5vw,3.5vw)]">Dude with a</span>
              <span className="font-light italic  text-[clamp(1.5rem,3.8vw,4vw)]">passion for life</span>
              <span className="font-black  text-[clamp(1.5rem,3.8vw,4vw)]">and witty jokes.</span>
            </div>
          </div>

          <div className="ImageCard bg-amber-500 rounded-3xl md:m-0 my-10 object-fit: ; h-full w-full col-span-3 overflow-hidden row-start-1">
            <img
              src="src/assets/images/potrait.jpg"
              alt="A beautiful landscape"
              className="object-cover h-full scale-175 translate-y-20 translate-x-5 w-full rounded-2xl"
            />
          </div>

          <div className="ContactCard bg-orange-300 rounded-3xl row-start-2 col-span-5 p-5 h-full w-full relative flex flex-col">
            <span className="font-light leading-tight text-[clamp(1rem,1.1vw,1.2vw)]">Have some</span>
            <span className="font-light  leading-tight text-[clamp(1rem,1.1vw,1.2vw)]">questions?</span>
            <FancyButton to="/contact" className="bg-white absolute bottom-11 md:left-100 left-45 border-black border-1.5 rounded-full p-0 w-14 h-14 flex items-center justify-center"
              icon = {<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>}>
            </FancyButton>
            <span className="font-medium leading-tight text-[clamp(1.5rem,4.2rem,5rem)] absolute bottom-10">Contact me.</span>
          </div>

          <div className="SpotifyCard bg-white rounded-3xl h-full w-full flex p-8 col-span-4 row-start-2">
            <div className="flex flex-col border-2 border-black rounded-3xl items-center  justify-center w-full h-full ">
              <span className="font-black  leading-tight text-[clamp(1.2rem,2.5vw,3.5vw)] mb-10 text-center"> My spotify ;) </span>
              <FancyButton href="https://open.spotify.com/user/s3kadqk0xhoc4y8dhtq058yq2?si=4c7d4168c9e64a49" className="bg-black group  border-black border-4 rounded-xl text-white text-5xl font-bold w-60 h-24  flex items-center justify-center" text="Spotify"></FancyButton>
            </div>
            
          </div>
        </div>

        {/* Right grid */}

        <div className="md:grid grid-rows-[46.9fr_42.7fr_12.2fr] grid-cols-1 col-start-2 gap-4 h-full flex-1">

          <div className="CodeCard  bg-[#6C6594] border rounded-3xl h-full w-full">
            <img  src="src/assets/images/code.png"  alt="A beautiful landscape"  className=" scale-85 object-cover h-full w-full rounded-2xl"  /> 
          </div>
          <div className="AboutCard bg-white border rounded-3xl relative flex flex-col h-full w-full">
            <FancyButton to="/contact" className="bg-orange-300 absolute top-8 md:left-110 left-45 border-black border-1.5 rounded-full p-0 w-14 h-14 flex items-center justify-center"
              icon = {<svg  xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"   fill="none"   viewBox="0 0 24 24"  stroke="currentColor"  strokeWidth={2}  className="w-7 h-7"  >  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /> </svg>}>
            </FancyButton>
            <span className="font-black  text-[clamp(1.5rem,4.5rem,5rem)] absolute left-10 bottom-10">3rd year undergrad at mec.</span>
          </div>
          <div className="SocialsCard bg-[#6C6594] rounded-3xl flex justify-between h-full w-full p-4 gap-4">
            <FancyButton text="INSTAGRAM" href={"https://www.instagram.com/kevin_babu.in/"} className="border border-black px-8 bg-white rounded-full" to="/projects" />
            <FancyButton text="GITHUB" href={"https://github.com/kevin-babu-dotcom"}  className="border border-black bg-white px-8 rounded-full" to="/about" />
            <FancyButton text="LINKEDIN" href={"https://www.linkedin.com/in/kevin-babu-960742172/"}  className="border border-black bg-white px-8 rounded-full" to="/contact" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
