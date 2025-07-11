import Image from "next/image";
import JourneyImage from "@/assets/placeholder.png";

const journeySteps = [
  {
    year: "2023",
    title: "The Mission",
    description: "Mood Reflect started with just an old laptop and a clear mission: to build something revolutionary for solving teenage challenges."
  },
  {
    year: "2023",
    title: "Development Begins",
    description: "We began development in late 2023 and, despite numerous challenges, successfully completed the app's prototype."
  },
  {
    year: "2024",
    title: "First Wins",
    description: "In 2024, we enhanced the app and went on to win ATL Community Day along with several other competitions and challenges."
  },
  {
    year: "2024",
    title: "State Selection",
    description: "Further into the year, we advanced development and earned selection for the SIL State Round."
  },
  {
    year: "2025",
    title: "National Recognition",
    description: "Finally, in 2025, we qualified for the SIL National Level Round and once again won the ATL Community Day."
  }
];

export const Journey = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="tag justify-center">Journey</div>
        <p className="section-title mt-5 bg-gradient-to-b from-black to-[#006b9c] text-transparent bg-clip-text">Our Journey</p>
      </div>
      <div className="content flex items-center justify-center flex-col p-5 md:flex-row gap-4 mt-8">
        {journeySteps.map((step, idx) => (
          <div key={idx} className="box p-5 rounded-lg border border-gray-200 md:w-[18%] md:max-w-[300px] w-full mb-1 md:mb-0 overflow-hidden flex flex-col items-center bg-white shadow">
            <div className="box-content-title flex flex-row gap-2 items-center mb-2">
              <p className="box-content-title-text font-bold text-lg">{step.title}</p>
              <p className="box-content-title-date text-gray-500 text-sm italic">{step.year}</p>
            </div>
            <div className="box-content-description text-center">
              <p className="box-content-description-text text-gray-700">{step.description}</p>
            </div>
            {idx === journeySteps.length - 1 && (
              <div className="box-content-image mt-4">
                <Image src={JourneyImage} alt="Journey" className="w-full h-40 object-cover rounded" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};