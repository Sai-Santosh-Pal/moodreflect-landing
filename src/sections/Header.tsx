import Image from "next/image";
import Logo from "@/assets/new-logo.png"

export const Header = () => {
  return (
    <>
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className="flex justify-center items-center py-3 md:bg-black text-white text-sm gap-3">
        <p className='text-white/60 hidden md:block'>This Project Has Been Selected For The <i><a href="https://www.stemrobo.com/steam-innovation-league/" className="cursor-pointer">Steam Innovation League National Level Round 2025</a></i></p>
      </div>
      <div className='py-5 md:w-full  flex justify-center items-center'>
        <div className='container sm:mx-20 flex items-center justify-between'>
          <div className="logo flex items-center justify-center gap-2  mx-10 md:mx-none sm:mx-none cursor-pointer">
            <Image src={Logo} alt="Logo" className="rounded-xl h-[40px] w-auto"/>
            <h1 className="bold">Mood Reflect</h1>
          </div>
          <div className='flex item-center justify-between'>
            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              <a href='#'>Idea</a>
              <a href='#'>Journey</a>
              <a href='#'>Product</a>
              <a href='#'>Reviews</a>
              <a href='#'>Survey</a>
              <button className='btn-primary'>
                Contact Us
              </button>
              
            </nav>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};