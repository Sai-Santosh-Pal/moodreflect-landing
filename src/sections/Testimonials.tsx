import Image from "next/image";
import Avatar from "@/assets/avatar.png";

const testimonials = [
  {
    name: "Atharv Lal",
    designation: "Student, Class 7",
    feedback: "Appreciate the idea behind the functional app design"
  },
  {
    name: "Himanshi Gautam",
    designation: "Student, Class 8",
    feedback: "As a teenager it's important to check and deal with your moods"
  },
  {
    name: "Jatin Koli",
    designation: "Student, Class 8",
    feedback: "There should definitely be an app which absolutely for teenagers takes your daily mood swings"
  },
  {
    name: "Vivaan Singh",
    designation: "Student, Class 7",
    feedback: "I would like to use this type of apps when I would be frustrated."
  },
  {
    name: "Aisha Khan",
    designation: "Student, Class 10",
    feedback: "I would love to use this kind of app which keeps a track of our mood and also help us to improve our mood."
  },
  {
    name: "Arnav Sharma",
    designation: "Student, Class 6",
    feedback: "These types of apps should be developed and encouraged. Loved the recommendation feature!"
  },
  {
    name: "Srijita Singh",
    designation: "Student, Class 10",
    feedback: "I have many mood swings everyday and I have been contemplating to use a mood tracker, and this app fulfills my request perfectly!!!"
  },
  {
    name: "Aaduya Goel",
    designation: "Student, Class 7",
    feedback: "This kind of App will help parents and kids to track their mental health and avoid mental accidents like suicide and self harm."
  },
  {
    name: "Arnav Dagar",
    designation: "Student, Class 7",
    feedback: "I think this app is good because we can see our mood we can see our dream and we can talk to the AI."
  },
  {
    name: "Tanvi Sharma",
    designation: "Student, Class 9",
    feedback: "This mood tracking software is simple and effective!!"
  },
  {
    name: "Priyanshu Malhotra",
    designation: "Student, Class 9",
    feedback: "These mood tracking apps are useful as they make us productive throughout the day."
  },
  {
    name: "Aryan Kumar",
    designation: "Student, Class 10",
    feedback: "An app that can help us to change our bad mood is definitely an awesome piece of software."
  }
];

export const Testimonial = () => (
  <section className="flex flex-col my-10 mx-10 justify-center items-center">
    <div className="text-center">
      <div className="tag justify-center">Testimonials</div>
      <p className="section-title mt-5 bg-gradient-to-b from-black to-[#5d6994] text-transparent bg-clip-text">What our users say</p>
      <p className="section-descrition font-medium mt-4 wrap mb-4">Here&apos;s what students are saying about Mood Reflect:</p>
    </div>
    <div className="container flex flex-row justify-center w-screen gap-5">
      <div className="row flex flex-col gap-5">
        {testimonials.slice(0, 5).map((t, idx) => (
          <div key={idx} className="card">
            <div className="flex items-center gap-2">
              <Image src={Avatar} alt="avatar" width={40} height={40} />
              <div className="flex flex-col">
                <p className="text-lg font-bold">{t.name}</p>
                <p className="text-sm text-gray-500 mt-[-5px]">{t.designation}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">{t.feedback}</p>
          </div>
        ))}
      </div>
      <div className="row hidden md:flex flex flex-col gap-5">
        {testimonials.slice(5, 9).map((t, idx) => (
          <div key={idx} className="card">
            <div className="flex items-center gap-2">
              <Image src={Avatar} alt="avatar" width={40} height={40} />
              <div className="flex flex-col">
                <p className="text-lg font-bold">{t.name}</p>
                <p className="text-sm text-gray-500 mt-[-5px]">{t.designation}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">{t.feedback}</p>
          </div>
        ))}
      </div>
      <div className="row hidden md:flex flex flex-col gap-5">
        {testimonials.slice(9, 13).map((t, idx) => (
          <div key={idx} className="card">
            <div className="flex items-center gap-2">
              <Image src={Avatar} alt="avatar" width={40} height={40} />
              <div className="flex flex-col">
                <p className="text-lg font-bold">{t.name}</p>
                <p className="text-sm text-gray-500 mt-[-5px]">{t.designation}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">{t.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);