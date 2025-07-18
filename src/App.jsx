import React from "react";
import Hero from "./assets/images/hero.png";
import { Dribbble, Facebook, Instagram, MoveRight } from 'lucide-react';

function App() {
  return (
    <main className="bg-light-gray">
      <div className="w-full lg:w-[1024px] 2xl:w-[1380px] mx-auto h-dvh py-40">
        <div className="flex w-full h-[35vw] bg-light-black items-stretch rounded-lg overflow-hidden">

          {/* Left Side */}
          <div className="flex w-[60%] h-full pl-4 relative flex-col justify-center">
            {/* Menu Icon (absolute as per original design) */}
            <div className="menu flex w-14 h-14 bg-dark-black items-center justify-center cursor-pointer absolute top-0 left-4">
              <div className="flex flex-col justify-end items-end">
                <span className="w-5 h-[1px] bg-orange"></span>
                <span className="w-3 h-[1px] bg-orange my-1"></span>
                <span className="w-2 h-[1px] bg-orange"></span>
              </div>
            </div>

            {/* Left Content */}
            <div className="flex gap-20 items-center">
              {/* Social Icons */}
              <div className="social flex flex-col justify-center items-center gap-4 ml-2">
                <span className="flex"><Facebook size={15} color={"white"} /></span>
                <span className="flex"><Dribbble size={15} color={"white"} /></span>
                <span className="flex"><Instagram size={15} color={"white"} /></span>
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center w-full">
                <span className="w-10 h-[1px] bg-orange flex mb-8"></span>
                <div className="subtitle text-gray-500 text-xs mb-2">Love on UI & UX</div>
                <div className="title text-white text-body font-bold text-2xl">
                  Design <span className="font-normal text-gray-300">Technology.</span>
                </div>
                <h3 className="font-title-4 text-[5vw] text-white flex items-center justify-start relative m-0"><span className="text-orange">D</span>ES<span className="text-orange">I</span>G<span className="text-orange">N</span> <div className="flex items-center justify-center mb-10 absolute top-1/2 left-2/3 -translate-y-1/2 "><span className="w-10 h-[1px] bg-orange flex"></span></div></h3>
                <div className="text-white mt-2 text-sm flex justify-start items-center">About us ... <span className="w-4 h-4 rounded-full border border-orange inline-flex justify-center items-center ml-4 mt-1 cursor-pointer"><span className="w-1 h-1 rounded-full bg-orange"></span></span></div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex w-[40%] bg-dark-black relative">
            <div className="image-container flex w-full overflow-hidden pt-8 pr-8 pl-8">
              <img src={Hero} alt="hero" className="w-full h-full object-contain mix-blend-color-dodge" />
            </div>

            <div className="w-12 h-12 flex items-center justify-center bg-orange text-white absolute bottom-1/4 right-1/5 rounded-md cursor-pointer">
              <MoveRight size={16} />
            </div>

            <div className="brands absolute rotate-270 bottom-[10vw] 2xl:bottom-[9vw] -left-[14vw] sm:-left-[13vw] 2xl:-left-[10vw] text-white text-8xl font-body font-bold">
              <p className="text-gray-700 text-body text-sm pl-2">18-07-02025</p>
              <p className="relative">
                Brands
                <span className="w-3 h-3 bg-orange rounded-full absolute bottom-1/4 -right-5"></span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default App;
