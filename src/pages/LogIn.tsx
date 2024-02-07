import Navbar from "../components/Navbar.tsx"
import Footer from "../components/Footer.tsx"
import FormLogIn from "../components/FormLogIn.tsx";

function LogIn() {
    return (
        <>
            <Navbar isTextWhite={false} />
            <div className="bg-white flex flex-col items-stretch">
                <div className="flex-col text-white text-4xl font-bold leading-10 relative whitespace-nowrap overflow-hidden w-full justify-center mt-2.5 pl-12 pr-16 pt-40 pb-12 items-start max-md:max-w-full max-md:pt-10 max-md:px-5">
                    <img
                        loading="lazy"
                        srcSet="/img/long2.png"
                        className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <p className="absolute z-10">
                        Happy to have you back!
                    </p>
                </div>
            </div>
            <span className="flex w-full flex-col mt-10 mb-10 px-10 items-start max-md:max-w-full max-md:my-10 max-md:px-5">
                <div className="flex w-full justify-between gap-5 max-w-screen-lg mx-auto max-md:flex-wrap">
                    <div className="w-full md:w-1/2 text-zinc-700 leading-8">
                        <p className="text-zinc-700 text-3xl font-bold leading-8 ml-4">
                            Already a member?
                        </p>
                        <p className="mt-6 mb-2 ml-4">
                            We're eager to hear about your latest journeys, your expert tips, and the stories only you can tell. Ready to share your experiences and be part of a community dedicated to travel? Log in and let's embark on this new adventure together!
                        </p>
                        <img
                        loading="lazy"
                        srcSet="/img/traveler.jpeg"
                        className="object-center p-4 border-solid"
                    />
                    </div>
                    <FormLogIn />
                </div>
            </span>
            <Footer />
        </>
    );
}

export default LogIn;