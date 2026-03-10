import Image from "next/image";

export const Product = () => {
  return (
    <section className="overflow-hidden mt-20 pb-[30px] md:mt-10 flex flex-col gap-10 items-center justify-around w-screen bg-gradient-to-b from-[#FFF3D6] to-white">
      <div className="mt-10 h-[50%] flex flex-col items-center justify-center">
        <p className="mt-10 section-title text-center bg-gradient-to-b from-black to-[#8B6914] text-transparent bg-clip-text w-full">One App. All Mental Health</p>
        <p className="section-description w-3/4 text-center mt-3">Track your emotions, manage stress, and build healthier habits — all in one place.</p>
      </div>
      <div className="h-1/2 flex gap-20 mt-10 flex-col md:flex-row justify-between">
        <Image
          alt="Mockup"
          src="/logo.jpeg"
          width={400}
          height={400}
          className="md:mt-20 h-[300px] md:h-[400px] w-auto object-contain rounded-3xl"
          priority
        />
        <div className="right md:ml-[-100px] md:mt-0 mt-[-40px] md:block flex flex-col justify-center items-center">
          <div className="mt-5">
            <div className="title flex items-center gap-2 mt-10">
              <div className="icon py-[5px] px-[15px] text-xl rounded-4xl bg-[#F5A623] text-white font-bold">1</div>
              <div className="heading text-2xl font-bold tracking-tight">Daily Journaling</div>
            </div>
            <div className="description hidden md:block">
              Capture your thoughts and reflect on your emotions with guided prompts.
            </div>
          </div>

          <div className="mt-5">
            <div className="title flex items-center gap-2">
              <div className="icon py-[5px] px-[13px] text-xl rounded-4xl bg-[#F5A623] text-white font-bold">2</div>
              <div className="heading text-2xl font-bold tracking-tight">Insightful Analytics</div>
            </div>
            <div className="description hidden sm:hidden md:block">
              Understand patterns in your mood with charts and emotion breakdowns.
            </div>
          </div>

          <div className="mt-5">
            <div className="title flex items-center gap-2">
              <div className="icon py-[5px] px-[13px] text-xl rounded-4xl bg-[#F5A623] text-white font-bold">3</div>
              <div className="heading text-2xl font-bold tracking-tight">Wellness Reminders</div>
            </div>
            <div className="description hidden md:block">
              Set gentle reminders to stay mindful, journal, or breathe deeply.
            </div>
          </div>

          <div className="mt-5">
            <div className="title flex items-center gap-2">
              <div className="icon py-[5px] px-[13px] text-xl rounded-4xl bg-[#F5A623] text-white font-bold">4</div>
              <div className="heading text-2xl font-bold tracking-tight">Mood Calendar</div>
            </div>
            <div className="description hidden md:block">
              View your emotional journey over days and weeks in a calendar view.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
