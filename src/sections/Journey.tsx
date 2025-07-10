import Image from "next/image";
import JourneyImage from "@/assets/placeholder.png";

export const Journey = () => {
    return (
        <section className="flex flex-col items-center justify-center">
            <div className="text-center">
                <div className="tag justify-center">Journey</div>
                <p className="section-title mt-5 bg-gradient-to-b from-black to-[#006b9c] text-transparent bg-clip-text">Our Journey</p>
                <p className="section-descrition font-medium mt-4 wrap mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, perferendis?</p>
            </div>
            <div className="content flex items-center justify-center flex-col p-5 md:flex-row">
            <div className="box rounded-lg border border-gray-200 md:w-[18%] md:max-w-[300px] w-full mb-1 md:mb-0 overflow-hidden">
                    <div className="box-content">
                        <div className="box-content-title flex flex-row gap-2 items-center pt-5 px-5">
                            <p className="box-content-title-text">Idea</p>
                            <p className="box-content-title-date text-gray-500 text-sm italic">2024</p>
                        </div>
                        <div className="box-content-description pt-1 px-5">
                            <p className="box-content-description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        </div>
                        <div className="box-content-image mt-5">
                            <Image src={JourneyImage} alt="Journey" className="w-full h-50 object-cover" />
                        </div>
                    </div>
                </div>
                <div className="hidden md:block line h-1 w-[3%] mt-1/2 justify-center bg-gray-200"></div>
                <div className="box rounded-lg border border-gray-200 md:w-[18%] md:max-w-[300px] w-full mb-1 md:mb-0 overflow-hidden">
                    <div className="box-content">
                        <div className="box-content-title flex flex-row gap-2 items-center pt-5 px-5">
                            <p className="box-content-title-text">Idea</p>
                            <p className="box-content-title-date text-gray-500 text-sm italic">2024</p>
                        </div>
                        <div className="box-content-description pt-1 px-5">
                            <p className="box-content-description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        </div>
                        <div className="box-content-image mt-5">
                            <Image src={JourneyImage} alt="Journey" className="w-full h-50 object-cover" />
                        </div>
                    </div>
                </div>
                <div className="hidden md:block line h-1 w-[3%] mt-1/2 justify-center bg-gray-200"></div>
                <div className="box rounded-lg border border-gray-200 md:w-[18%] md:max-w-[300px] w-full mb-1 md:mb-0 overflow-hidden">
                    <div className="box-content">
                        <div className="box-content-title flex flex-row gap-2 items-center pt-5 px-5">
                            <p className="box-content-title-text">Idea</p>
                            <p className="box-content-title-date text-gray-500 text-sm italic">2024</p>
                        </div>
                        <div className="box-content-description pt-1 px-5">
                            <p className="box-content-description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        </div>
                        <div className="box-content-image mt-5">
                            <Image src={JourneyImage} alt="Journey" className="w-full h-50 object-cover" />
                        </div>
                    </div>
                </div>
                <div className="hidden md:block line h-1 w-[3%] mt-1/2 justify-center bg-gray-200"></div>
                <div className="box rounded-lg border border-gray-200 md:w-[18%] md:max-w-[300px] w-full mb-1 md:mb-0 overflow-hidden">
                    <div className="box-content">
                        <div className="box-content-title flex flex-row gap-2 items-center pt-5 px-5">
                            <p className="box-content-title-text">Idea</p>
                            <p className="box-content-title-date text-gray-500 text-sm italic">2024</p>
                        </div>
                        <div className="box-content-description pt-1 px-5">
                            <p className="box-content-description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        </div>
                        <div className="box-content-image mt-5">
                            <Image src={JourneyImage} alt="Journey" className="w-full h-50 object-cover" />
                        </div>
                    </div>
                </div>
                <div className="hidden md:block line h-1 w-[3%] mt-1/2 justify-center bg-gray-200"></div>
                <div className="box rounded-lg border border-gray-200 md:w-[18%] md:max-w-[300px] w-full mb-1 md:mb-0 overflow-hidden">
                    <div className="box-content">
                        <div className="box-content-title flex flex-row gap-2 items-center pt-5 px-5">
                            <p className="box-content-title-text">Idea</p>
                            <p className="box-content-title-date text-gray-500 text-sm italic">2024</p>
                        </div>
                        <div className="box-content-description pt-1 px-5">
                            <p className="box-content-description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        </div>
                        <div className="box-content-image mt-5">
                            <Image src={JourneyImage} alt="Journey" className="w-full h-50 object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}