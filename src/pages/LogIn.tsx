import Navbar from "../components/Navbar.tsx"
import Footer from "../components/Footer.tsx"
import Button1 from "../components/Button1.tsx"
import { Link } from "react-router-dom"

function SignUp() {
    return (
        <>
            <Navbar isTextWhite={false} />
            <div className="bg-white flex flex-col items-stretch">
                <div className="flex-col text-white text-4xl font-bold leading-10 relative whitespace-nowrap overflow-hidden min-h-[250px] w-full justify-center mt-2.5 pl-12 pr-16 pt-40 pb-12 items-start max-md:max-w-full max-md:pt-10 max-md:px-5">
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
                        <p className="mt-6 mb-3 ml-4">
                            We're eager to hear about your latest journeys, your expert tips, and the stories only you can tell. Ready to share your experiences and be part of a community dedicated to travel? Log in and let's embark on this new adventure together!
                        </p>
                        <img
                        loading="lazy"
                        srcSet="/img/traveler.jpeg"
                        className="object-center p-4 border-solid"
                    />
                    </div>
                    <div className="w-full md:w-1/2 text-zinc-700 text-3xl font-bold leading-8 ml-20">
                        <p className="text-zinc-700 text-3xl font-bold leading-8 mx-4">
                            Log In
                        </p>
                        <form className="mt-8">
                            <div>
                                <label htmlFor="username" className="text-zinc-700 text-base leading-7 self-stretch max-md:max-w-full">
                                    User Name:
                                </label>{" "}
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="text-zinc-400 text-sm leading-7 border border-[color:var(--TextColor,#A8A7AB)] self-stretch justify-center mt-2.5 pl-8 pr-16 py-2 rounded-xl border-solid items-start max-md:max-w-full max-md:px-5"
                                    placeholder="Enter your username"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-zinc-700 text-base leading-7 self-stretch mt-4 max-md:max-w-full">
                                    Email:
                                </label>{" "}
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="text-zinc-400 text-sm leading-7 whitespace-nowrap border border-[color:var(--TextColor,#A8A7AB)] self-stretch justify-center mt-2 pl-8 pr-16 py-2 rounded-xl border-solid items-start max-md:max-w-full max-md:px-5"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div>

                                <label htmlFor="password" className="text-zinc-700 text-base leading-7 self-stretch mt-9 max-md:max-w-full">
                                    Password:
                                </label>{" "}
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="text-zinc-400 text-sm leading-7 whitespace-nowrap border border-[color:var(--TextColor,#A8A7AB)] self-stretch justify-center mt-2 pl-8 pr-16 py-2 rounded-xl border-solid items-start max-md:max-w-full max-md:px-5"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                            <Button1 text="Log In"/>
                        </form>
                        <p className="text-zinc-700 text-sm font-normal mt-6">Not registered yet? Click <Link to={'/sign-up'} className="font-bold text-teal-900 underline">here</Link> to SignUp</p>
                    </div>
                </div>
            </span>
            <Footer />
        </>
    );
}

export default SignUp;