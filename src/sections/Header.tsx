import Image from "next/image";

export const Header = () => {
  return (
    <>
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className="flex justify-center items-center py-3 md:bg-[#F5A623] text-white text-sm gap-3">
        <p className='text-white/80 hidden md:block'>This Project Has Been Selected For The <i><a href="https://www.stemrobo.com/steam-innovation-league/" className="cursor-pointer">Steam Innovation League National Level Round 2025</a></i></p>
      </div>
      <div className='py-5 md:w-full  flex justify-center items-center'>
        <div className='container sm:mx-20 flex items-center justify-between'>
          <div className="logo flex items-center justify-center gap-2  mx-10 md:mx-none sm:mx-none cursor-pointer">
            <Image src="/logo.jpeg" alt="Logo" width={40} height={40} className="rounded-xl h-[40px] w-auto"/>
            <h1 className="bold">Mood Reflect</h1>
          </div>
          <div className='flex item-center justify-between'>
            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              <a href='#idea'>Idea</a>
              <a href='#journey'>Journey</a>
              <a href='#product'>Product</a>
              <a href='#reviews'>Reviews</a>
              <a href='#contact'>
                <button className='bg-[#F5A623] text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tighter cursor-pointer'>
                  Contact Us
                </button>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};
