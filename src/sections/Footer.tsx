import React from "react";

export const Footer = () => (
  <footer>
    <div className="flex w-screen items-center justify-center bg-black text-white mx-auto px-4 py-10 text-center">
      <div className="flex flex-col md:flex-col justify-between items-center text-center">
        <div className="text-center md:text-left">
          <h2 className="text-2xl mb-4 text-center">Mood Reflect</h2>
          <p className="text-gray-600 text-center">Made With ❤️ By <a href="https://github.com/Sai-Santosh-Pal" className="text-white">Sai Santosh Pal</a> and <a className="text-white">Tribhuvan Sanoria</a></p>
        </div>
        <div className="flex flex-row gap-2">
          <a href="https://github.com/Sai-Santosh-Pal" className="text-white">Sai&apos;s GitHub</a>
          <a href="https://www.linkedin.com/in/sai-santosh-pal" className="text-white">Sai&apos;s LinkedIn</a>
          <a href="https://www.linkedin.com/in/tribhuvan-sanoria-0a0192345/" className="text-white">Tribhuvan&apos;s LinkedIn</a>
          <div className="flex justify-center mt-6">
          </div>
        </div>
        <a href="https://www.buymeacoffee.com/saisantoshpal" className="mt-5" target="_blank" rel="noopener noreferrer">
          <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=saisantoshpal&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" alt="Buy me a coffee" />
        </a>
      </div>
    </div>
  </footer>
);