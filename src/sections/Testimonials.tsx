import Image from "next/image";
import Avatar from "@/assets/avatar.png"

export const Testimonial = () => {
    return (
        <section className="flex flex-col my-10 mx-10 justify-center items-center">
            <div className="text-center">
                <div className="tag justify-center">Testimonials</div>
                <p className="section-title mt-5 bg-gradient-to-b from-black to-[#5d6994] text-transparent bg-clip-text">What our users say</p>
                <p className="section-descrition font-medium mt-4 wrap mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, perferendis?</p>
            </div>
            <div className="container flex flex-row justify-center w-screen gap-5">
                <div className="row flex flex-col gap-5">
                    <div className="card">
                        <div className="flex items-center gap-2">
                            <Image src={Avatar} alt="avatar" width={40} height={40} />
                            <div className="flex flex-col">
                                <p className="text-lg font-bold">John Doe</p>
                                <p className="text-sm text-gray-500 mt-[-5px]">CEO, ABC Company</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet utsss elit.Quisquam, quos.Lorem ipsum dolor sit amet utsss elit.Quisquam, quos.</p>
                    </div>
                    <div className="card">
                        <div className="flex items-center gap-2">
                            <Image src={Avatar} alt="avatar" width={40} height={40} />
                            <div className="flex flex-col">
                                <p className="text-lg font-bold">John Doe</p>
                                <p className="text-sm text-gray-500 mt-[-5px]">CEO, ABC Company</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet utsss elit.Quisquam, quos.Lorem ipsum dolor sit amet utsss elit.Quisquam, quos.</p>
                    </div>
                    <div className="card">
                        <div className="flex items-center gap-2">
                            <Image src={Avatar} alt="avatar" width={40} height={40} />
                            <div className="flex flex-col">
                                <p className="text-lg font-bold">John Doe</p>
                                <p className="text-sm text-gray-500 mt-[-5px]">CEO, ABC Company</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet utsss elit.Quisquam, quos.Lorem ipsum dolor sit amet utsss elit.Quisquam, quos.</p>
                    </div>
                </div>
                <div className="row hidden md:flex flex flex-col gap-5">
                    <div className="card">
                        <div className="flex items-center gap-2">
                            <Image src={Avatar} alt="avatar" width={40} height={40} />
                            <div className="flex flex-col">
                                <p className="text-lg font-bold">John Doe</p>
                                <p className="text-sm text-gray-500 mt-[-5px]">CEO, ABC Company</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet utsss elit.Quisquam, quos.Lorem ipsum dolor sit amet utsss elit.Quisquam, quos.</p>
                    </div>
                    <div className="card">
                        <div className="flex items-center gap-2">
                            <Image src={Avatar} alt="avatar" width={40} height={40} />
                            <div className="flex flex-col">
                                <p className="text-lg font-bold">John Doe</p>
                                <p className="text-sm text-gray-500 mt-[-5px]">CEO, ABC Company</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet utsss elit.Quisquam, quos.Lorem ipsum dolor sit amet utsss elit.Quisquam, quos.</p>
                    </div>
                    <div className="card">
                        <div className="flex items-center gap-2">
                            <Image src={Avatar} alt="avatar" width={40} height={40} />
                            <div className="flex flex-col">
                                <p className="text-lg font-bold">John Doe</p>
                                <p className="text-sm text-gray-500 mt-[-5px]">CEO, ABC Company</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet utsss elit.Quisquam, quos.Lorem ipsum dolor sit amet utsss elit.Quisquam, quos.</p>
                    </div>
                </div>
                <div className="row hidden md:flex flex flex-col gap-5">
                    <div className="card">
                        <div className="flex items-center gap-2">
                            <Image src={Avatar} alt="avatar" width={40} height={40} />
                            <div className="flex flex-col">
                                <p className="text-lg font-bold">John Doe</p>
                                <p className="text-sm text-gray-500 mt-[-5px]">CEO, ABC Company</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet utsss elit.Quisquam, quos.Lorem ipsum dolor sit amet utsss elit.Quisquam, quos.</p>
                    </div>
                    <div className="card">
                        <div className="flex items-center gap-2">
                            <Image src={Avatar} alt="avatar" width={40} height={40} />
                            <div className="flex flex-col">
                                <p className="text-lg font-bold">John Doe</p>
                                <p className="text-sm text-gray-500 mt-[-5px]">CEO, ABC Company</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet utsss elit.Quisquam, quos.Lorem ipsum dolor sit amet utsss elit.Quisquam, quos.</p>
                    </div>
                    <div className="card">
                        <div className="flex items-center gap-2">
                            <Image src={Avatar} alt="avatar" width={40} height={40} />
                            <div className="flex flex-col">
                                <p className="text-lg font-bold">John Doe</p>
                                <p className="text-sm text-gray-500 mt-[-5px]">CEO, ABC Company</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet utsss elit.Quisquam, quos.Lorem ipsum dolor sit amet utsss elit.Quisquam, quos.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};