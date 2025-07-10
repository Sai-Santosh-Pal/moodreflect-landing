"use client"

import Image from "next/image";
import HeroImage from "@/assets/phone_mockup.png"
import Apk from "@/assets/apk.png"
import ArrowRight from "@/assets/arrow-right.svg"

export const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/moodreflect.apk';
    link.download = 'moodreflect.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="flex flex-col gap-10 items-center justify-center md:flex-row h-full w-full mt-5">
        <div className="left w-[50%] flex flex-col">
        <div className="tag md:ml-[25%] w-fit text-black text-2xl px-4 py-2 rounded-md flex items-center justify-between gap-2 cursor-pointer">Version 1.0</div>
            <p className="w-[100%] md:w-[75%] md:ml-[25%] md:text-left text-center section-title md:text-7xl text-6xl bg-gradient-to-b from-black to-[#006b9c] text-transparent bg-clip-text">Track Your Emotions. Understand Your Mind.</p>
            <p className="w-[fit-content] md:ml-[25%] md:text-left text-center section-description mt-2 mb-5 md:text-xl text-sm">Mood Reflect helps you visualize your emotional journey — designed for simplicity, built for clarity.</p>
            <div className="flex gap-4 justify-center items-center">
              <button 
                onClick={handleDownload}
                className="md:ml-[25%] bg-black text-white px-10 py-2 rounded-md flex items-center justify-between gap-2 cursor-pointer"
              >
                <Image src={Apk} alt="Android" className="w-4 h-4"/>
                <span className="whitespace-nowrap">Download Now</span>
              </button>
              <div className="flex gap-2 items-center w-full">
                <p className="cursor-pointer whitespace-nowrap">Learn More</p>
                <Image src={ArrowRight} alt="Arrow Right" className="w-4 h-4"/>
              </div>
            </div>
        </div>
        <div className="right w-[50%] h-full flex items-center justify-center">
            <Image alt="Hero" src={HeroImage} className="h-full max-h-screen w-auto md:scale-125 md:mt-0 mt-10 scale-200"/>
        </div>
    </section>
  );
};