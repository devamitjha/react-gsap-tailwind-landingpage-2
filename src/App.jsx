import React from "react";
import Hero from "./assets/images/hero.png";
import { Dribbble, Facebook, Instagram, MoveRight } from 'lucide-react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

function App() {
  useGSAP(() => {
    const titleSplitText = new SplitText(".mainTitle", {
      type: "chars, words",
    });
    const brandsAnimation = new SplitText(".brands-animation", {
      type: "chars, words",
    });

    //brands-animation

    const tl = gsap.timeline();
    tl.fromTo(".main-container", { height: 0, opacity: 0 }, { height: "35vw", opacity: 1, stagger: .02 })
    .fromTo(".menu", { opacity: 0 }, {opacity: 1, }, ">")
    .fromTo(".men-item span", { x: -30, opacity: 0 }, { x: 0, opacity: 1, stagger: .06 }, "+=0.01")    
    .from(titleSplitText.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    }, ">-0.1")
    .fromTo(".image-container", { x: 100, opacity:0}, { x: 0, opacity:1 }, ">-2")
    .from(brandsAnimation.chars, {
      yPercent: -200,
      duration:1,
      ease: "expo.out",
      stagger: 0.06,
    }, ">")
    .fromTo(".dot", { opacity: 0 }, {opacity: 1, }, ">")
    .fromTo(".temp-date", { x: -100, opacity:0}, { x: 0, opacity:1 }, ">")
    .fromTo(".social span", { x: -30, opacity: 0 }, { x: 0, opacity: 1, stagger: .06 }, "+=0.01") 
    .fromTo([".sa-1", ".sa-2", ".sa-3", ".sa-4", ".sa-5"], { x: -30, opacity: 0 }, { x: 0, opacity: 1, stagger: .06 }, "+=0.01") 
    .fromTo(".btn-next", { x: -20, opacity:0}, { x: 0, opacity:1 }, "+=0.01")
   
    
  }, []);
  return (
    <main className="bg-light-gray flex w-full justify-center items-center h-dvh">
      <div className="w-full lg:w-[1024px] 2xl:w-[1380px] m-auto">
        <div className="main-container flex w-full h-[35vw] bg-light-black items-stretch rounded-lg overflow-hidden">

          {/* Left Side */}
          <div className="flex w-[60%] h-full pl-4 relative flex-col justify-center">
            {/* Menu Icon (absolute as per original design) */}
            <div className="menu flex w-14 h-14 bg-dark-black items-center justify-center cursor-pointer absolute top-0 left-4">
              <div className="men-item flex flex-col justify-end items-end">
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
                <span className="sa-1 w-10 h-[1px] bg-orange flex mb-8"></span>
                <div className="sa-2 subtitle text-gray-500 text-xs mb-2">Love on UI & UX</div>
                <div className="sa-3 title text-white text-body font-bold text-2xl">
                  Design <span className="font-normal text-gray-300">Technology.</span>
                </div>
                <h3 className="mainTitle font-title-4 text-[5vw] text-white flex items-center justify-start relative m-0 overflow-hidden"><span className="text-orange">D</span>ES<span className="text-orange">I</span>G<span className="text-orange">N</span> <div className="sa-5 flex items-center justify-center mb-10 absolute top-1/2 left-2/3 -translate-y-1/2 "><span className="w-10 h-[1px] bg-orange flex"></span></div></h3>
                <div className="sa-4 text-white mt-2 text-sm flex justify-start items-center">About us ... <span className="w-4 h-4 rounded-full border border-orange inline-flex justify-center items-center ml-4 mt-1 cursor-pointer"><span className="w-1 h-1 rounded-full bg-orange"></span></span></div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex w-[40%] bg-dark-black relative">
            <div className="image-container flex w-full overflow-hidden pt-8 pr-8 pl-8 mix-blend-color-dodge">
              <img src={Hero} alt="hero" className="w-full h-full object-contain" />
            </div>

            <div className="btn-next w-12 h-12 flex items-center justify-center bg-orange text-white absolute bottom-1/4 right-1/5 rounded-md cursor-pointer">
              <MoveRight size={16} />
            </div>

            <div className="brands absolute rotate-270 bottom-[10vw] 2xl:bottom-[9vw] -left-[14vw] sm:-left-[13vw] 2xl:-left-[10vw] text-white text-8xl font-body font-bold ">
              <p className="temp-date text-gray-700 text-body text-sm pl-2">18-07-02025</p>
              <p className="brands-animation relative overflow-hidden w-full flex items-center gap-4">
                Brands
                <span className="dot w-3 h-3 bg-orange rounded-full inline-flex mt-4 "></span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default App;
