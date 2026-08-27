"use client"

import Image from "next/image";
import Apk from "@/assets/apk.png";

export const Hero = () => {
  const handleDownload = () => {
    // window.open('https://github.com/Sai-Santosh-Pal/moodreflect-landing/releases/download/v2/application-ce4b3a06-da88-4d2d-97a3-3d7ec4964b26.apk', '_blank');
    window.open('https://github.com/Sai-Santosh-Pal/moodreflect-landing/releases/download/v4/v4.apk', '_blank')
  };

  return (
    <section className="flex flex-col gap-10 items-center justify-center md:flex-row h-full w-full mt-5">
        <div className="left w-[50%] flex flex-col">
            <p className="w-[100%] md:w-[75%] md:ml-[25%] md:text-left text-center section-title md:text-7xl text-6xl bg-gradient-to-b from-black to-[#8B6914] text-transparent bg-clip-text">Track Your Emotions. Understand Your Mind.</p>
            <p className="w-[fit-content] md:ml-[25%] md:text-left text-center section-description mt-2 mb-5 md:text-xl text-sm">Mood Reflect helps you visualize your emotional journey — designed for simplicity, built for clarity.</p>
            <div className="flex gap-4 justify-center items-center">
              <button 
                onClick={handleDownload}
                className="md:ml-[-25%] bg-[#F5A623] text-white px-10 py-2 rounded-md flex items-center justify-between gap-2 cursor-pointer hover:bg-[#D4911E] transition"
              >
                <Image src={Apk} alt="Android" className="w-4 h-4"/>
                <span className="whitespace-nowrap">Download Now</span>
              </button>
            </div>
        </div>
        <div className="right w-[50%] h-full flex items-center justify-center">
            <iframe
              width="315"
              height="560"
              src="https://www.youtube.com/embed/YNYATKidKL8"
              title="Mood Reflect Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-3xl md:scale-110 md:mt-0 mt-10"
            />
        </div>
    </section>
  );
};
