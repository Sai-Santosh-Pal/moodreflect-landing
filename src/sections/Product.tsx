import Image from "next/image";
import Mockup from "@/assets/phone_mockup.png"

export const Product = () => {
  return (
    <section className="mt-20 md:mt-10 flex flex-col gap-10 items-center justify-around h-screen w-screen bg-sky-200">
      <div className="mt-10 h-[50%] flex flex-col items-center justify-center">
        <p className="section-title text-center">One App. All Mental Health</p>
        <p className="section-description w-3/4 text-center">Track your emotions, manage stress, and build healthier habits — all in one place.</p>
      </div>
      <div className="h-1/2 flex gap-20 flex-col md:flex-row gap-5 justify-between">
        <Image alt="Mocup" src={Mockup} className="h-[300px] md:h-full w-auto scale-200 mt-[-50px] md:mt-[-120px] md:scale-150" />
        <div className="right md:ml-[-200px] mt-[-50px] md:mt-[-120px]">
          <div className="mt-5">
  <div className="title flex items-center gap-2">
    <div className="icon py-[5px] px-[15px] text-xl rounded-4xl bg-blue-500 text-white font-bold">1</div>
    <div className="heading text-2xl font-bold tracking-tight">Daily Journaling</div>
  </div>
  <div className="description">
    Capture your thoughts and reflect on your emotions with guided prompts.
  </div>
</div>

<div className="mt-5">
  <div className="title flex items-center gap-2">
    <div className="icon py-[5px] px-[13px] text-xl rounded-4xl bg-blue-500 text-white font-bold">2</div>
    <div className="heading text-2xl font-bold tracking-tight">Insightful Analytics</div>
  </div>
  <div className="description">
    Understand patterns in your mood with charts and emotion breakdowns.
  </div>
</div>

<div className="mt-5">
  <div className="title flex items-center gap-2">
    <div className="icon py-[5px] px-[13px] text-xl rounded-4xl bg-blue-500 text-white font-bold">3</div>
    <div className="heading text-2xl font-bold tracking-tight">Wellness Reminders</div>
  </div>
  <div className="description">
    Set gentle reminders to stay mindful, journal, or breathe deeply.
  </div>
</div>

<div className="mt-5">
  <div className="title flex items-center gap-2">
    <div className="icon py-[5px] px-[13px] text-xl rounded-4xl bg-blue-500 text-white font-bold">4</div>
    <div className="heading text-2xl font-bold tracking-tight">Mood Calendar</div>
  </div>
  <div className="description">
    View your emotional journey over days and weeks in a calendar view.
  </div>
</div>

<div className="mt-5">
  <div className="title flex items-center gap-2">
    <div className="icon py-[5px] px-[13px] text-xl rounded-4xl bg-blue-500 text-white font-bold">5</div>
    <div className="heading text-2xl font-bold tracking-tight">Stress Level Check</div>
  </div>
  <div className="description">
    Answer quick prompts to measure and understand your current stress.
  </div>
</div>

        </div>
      </div>
    </section>
  );
};