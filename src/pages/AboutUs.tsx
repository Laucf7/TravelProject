import Navbar from "../components/Navbar.tsx"
import Footer from "../components/Footer.tsx"

function AboutUs() {
    return (
        <>
            <Navbar isTextWhite={false} />
            <div className="bg-white flex flex-col items-stretch">
                <div className="flex-col text-white text-4xl font-bold leading-10 relative whitespace-nowrap overflow-hidden w-full justify-center mt-2.5 pl-12 pr-16 pt-40 pb-14 items-start max-md:max-w-full max-md:pt-10 max-md:px-5">
                    <img
                        loading="lazy"
                        srcSet="/img/long.jpg"
                        className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <p className="absolute z-10">
                        About Us
                    </p>
                </div>
                <span className="flex w-full flex-col items-stretch px-12 max-md:max-w-full max-md:mt-2 max-md:px-5">
                    <div className="max-md:max-w-full">
                        <div className="flex justify-center gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[50%] max-md:w-full max-md:ml-0">
                                <span className="flex flex-col items-stretch mt-12 max-md:max-w-full max-md:mt-10">
                                    <div className="text-zinc-700 text-3xl font-bold leading-8 max-md:max-w-full">
                                        What is TravelTogether?
                                    </div>
                                    <div className="text-black text-base leading-7 mt-8 max-md:max-w-full max-md:mt-10">
                                        <p className="mb-4">Welcome to our platform, a dedicated space for travel
                                            enthusiasts seeking inspiration and practical insights for
                                            their next adventure! Here, you can explore the journeys of
                                            fellow travelers, gaining valuable information to enhance and
                                            streamline your own travel plans.</p>
                                        <p className="mb-4">Our website serves as a hub for a community of globetrotters
                                            who generously share their unique routes, experiences, and
                                            recommendations.</p>
                                        <p className="mb-4">Whether you are a solo adventurer, a family seeking a memorable
                                            vacation, or friends planning a group getaway, let our
                                            platform be your compass as you navigate the exciting
                                            possibilities of travel.</p>
                                    </div>
                                </span>
                            </div>{" "}
                            <div className="flex flex-col items-stretch w-[28%] mt-16 max-md:w-full max-md:ml-0">
                                <img
                                    loading="lazy"
                                    srcSet="/img/ny.jpeg"
                                    className="aspect-[0.9] object-contain object-center w-full overflow-hidden grow max-md:mt-10"
                                />
                            </div>
                        </div>
                    </div>{" "}
                    <div className="text-zinc-700 text-3xl font-bold leading-8 mt-24 max-md:max-w-full max-md:mt-10">
                        Some of our globetrotter writters:
                    </div>{" "}
                    <div className="justify-between items-stretch flex gap-5 mt-7 mb-16 py-1 max-md:max-w-full max-md:flex-wrap">
                        <span className="flex grow basis-[0%] flex-col items-center">
                            <img
                                loading="lazy"
                                srcSet="/img/p1.png"
                                className="aspect-[0.81] object-contain object-center w-[200px] overflow-hidden"
                            />{" "}
                            <div className="text-black text-xl leading-9 self-stretch mt-5">
                                Agung Perdana
                            </div>{" "}
                            <div className="text-zinc-700 text-base leading-7 self-stretch mt-3.5">
                                Web Designer
                            </div>
                        </span>{" "}
                        <span className="flex grow basis-[0%] flex-col items-center">
                            <img
                                loading="lazy"
                                srcSet="/img/p2.jpg"
                                className="aspect-[0.81] object-contain object-center w-[200px] overflow-hidden"
                            />{" "}
                            <div className="text-black text-xl leading-9 self-stretch mt-5">
                                Laura Casanovas
                            </div>{" "}
                            <div className="text-zinc-700 text-base leading-7 self-stretch mt-5">
                                FrontEnd Developer
                            </div>
                        </span>{" "}
                        <span className="flex grow basis-[0%] flex-col items-center self-start">
                            <img
                                loading="lazy"
                                srcSet="/img/p3.png"
                                className="aspect-[0.81] object-contain object-center w-[200px] overflow-hidden"
                            />{" "}
                            <div className="text-black text-xl leading-9 self-stretch mt-5">
                                Rahardi Anysah
                            </div>{" "}
                            <div className="text-zinc-700 text-base leading-7 self-stretch whitespace-nowrap mt-3.5">
                                International Relations
                            </div>
                        </span>{" "}
                        <span className="flex grow basis-[0%] flex-col items-center self-start">
                            <img
                                loading="lazy"
                                srcSet="/img/p4.png"
                                className="aspect-[0.81] object-contain object-center w-[200px] overflow-hidden"
                            />{" "}
                            <div className="text-black text-xl leading-9 self-stretch mt-5">
                                Anna Smith
                            </div>{" "}
                            <div className="text-zinc-700 text-base leading-7 self-stretch mt-5">
                                Medical Check
                            </div>
                        </span>{" "}
                        <span className="flex grow basis-[0%] flex-col items-center self-start">
                            <img
                                loading="lazy"
                                srcSet="/img/p5.png"
                                className="aspect-[0.81] object-contain object-center w-[200px] overflow-hidden"
                            />{" "}
                            <div className="text-black text-xl leading-9 self-stretch mt-5">
                                James Russell
                            </div>{" "}
                            <div className="text-zinc-700 text-base leading-7 self-stretch mt-5">
                                Director Assistant
                            </div>
                        </span>
                    </div>
                </span>{" "}
            </div>
            <Footer />
        </>
    );
}
export default AboutUs;