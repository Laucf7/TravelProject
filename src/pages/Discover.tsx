import Navbar from "../components/Navbar.tsx"
import Footer from "../components/Footer.tsx"
import CardHome from "../components/CardHome.tsx"
// import { Link } from "react-router-dom";

function Discover() {

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
                        Discover
                    </p>
                </div>
                <div className="self-center w-full max-w-[1180px] mt-14 px-5 max-md:max-w-full max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">

                        <CardHome
                            title="Top Destinations"
                            imageSrc="/img/aaa.jpeg"
                        />

                        <CardHome
                            title="Asia"
                            imageSrc="/img/bbb.jpeg" />

                        <CardHome
                            title="Europe"
                            imageSrc="/img/ccc.jpeg" />
                    </div>
                </div>
                <div className="self-center w-full max-w-[1180px] mt-8 px-5 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">

                        <CardHome
                            title="Oceania"
                            imageSrc="/img/ddd.jpeg" />

                        <CardHome
                            title="America"
                            imageSrc="/img/eee.jpeg" />

                        <CardHome
                            title="Africa"
                            imageSrc="/img/fff.webp" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Discover;