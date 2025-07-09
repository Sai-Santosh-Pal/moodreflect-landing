import Image from "next/image";
import Avatar from "@/assets/avatar.png"

export const Testimonial = () => {
    return (
        <section className="flex flex-col my-10 px-10 justify-center">
            <div className="text-center">
                <div className="tag justify-center">Testimonials</div>
            <p className="section-title mt-5 bg-gradient-to-b from-black to-[#006b9c] text-transparent bg-clip-text">What our users say</p>
            <p className="section-descrition font-medium mt-4 wrap">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, perferendis?</p>
            </div>
            <div className="container">
                
                <div className="card">WOW! SO DANGURUS
                    <div>
                        <Image src={Avatar} alt="avatar" width={40} height={40}/>
                    </div>
                </div>  
            </div>
        </section>
    );
};