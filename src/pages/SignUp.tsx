import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FormSignUp from "../components/FormSignUp";

function SignUp() {
    
    return (
        <>
            <Navbar isTextWhite={false} />
            <div className="bg-white flex flex-col items-stretch">
                <div className="flex-col text-white text-4xl font-bold relative overflow-hidden w-full justify-center mt-2.5 pl-12 pr-16 pt-40 pb-12 items-start max-md:max-w-full max-md:pt-10 max-md:px-5">
                    <img
                        loading="lazy"
                        srcSet="/img/long2.png"
                        className="absolute h-full w-full object-cover object-center inset-0"
                        alt="Registration Background"
                    />
                    <p className="absolute z-10">
                        Writer Registration
                    </p>
                </div>
            </div>
            <span className="flex w-full flex-col mt-10 mb-10 px-10 items-start max-md:max-w-full max-md:my-10 max-md:px-5">
                <div className="flex w-full justify-between gap-5 max-w-screen-lg mx-auto max-md:flex-wrap">
                    <div className="w-full md:w-1/2 text-zinc-700 leading-8">
                        <p className="text-zinc-700 text-3xl font-bold leading-8 ml-4">
                            Why join us?
                        </p>
                        <ul className="mt-8">
                            <li className="mb-2">
                                <strong>· Showcase Your Adventures:</strong> Share your travel stories, complete with
                                photos and details, to showcase the beauty and uniqueness of the
                                places you've explored.
                            </li>
                            <li className="mb-2">
                                <strong>· Connect with a Community:</strong> Exchange ideas, seek advice, and form
                                connections with individuals who share your passion.
                            </li>
                            <li className="mb-2">
                                <strong>· Inspire Others:</strong> Your experiences can inspire and guide others in
                                planning their own adventures.
                            </li>
                            <li className="mb-2">
                                <strong>· Build Your Portfolio:</strong> If you aspire to be a travel writer, our
                                platform provides an excellent opportunity to build a portfolio. Your
                                published content can serve as a testament to your writing skills and
                                travel expertise.
                            </li>
                        </ul>
                    </div>
                    <FormSignUp /> 
                </div>
            </span>
            <Footer />
        </>
    );
}

export default SignUp;