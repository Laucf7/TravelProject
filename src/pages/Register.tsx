import Navbar from "../components/Navbar.tsx"
import Footer from "../components/Footer.tsx"

function Register() {
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
                        Writer Registration
                    </p>

                </div>
                <span className="flex w-full flex-col items-stretch mt-16 mb-12 px-16 max-md:max-w-full max-md:my-10 max-md:px-5">
                    <div className="text-zinc-700 text-3xl font-bold leading-8 max-md:max-w-full">
                        Why join us?
                    </div>
                    <div className="text-black text-base leading-7 max-w-[1093px] ml-8 mr-8 mt-10 max-md:max-w-full max-md:mr-2.5">
                        <ul>
                            <li>
                                <strong>· Showcase Your Adventures:</strong> Share your travel stories, complete with
                                photos and details, to showcase the beauty and uniqueness of the
                                places you've explored.
                            </li>
                            <li>
                                <strong>· Connect with a Community:</strong> Exchange ideas, seek advice, and form
                                connections with individuals who share your passion.
                            </li>
                            <li>
                                <strong>· Inspire Others:</strong> Your experiences can inspire and guide others in
                                planning their own adventures.
                            </li>
                            <li>
                                <strong>· Build Your Portfolio:</strong> If you aspire to be a travel writer, our
                                platform provides an excellent opportunity to build a portfolio. Your
                                published content can serve as a testament to your writing skills and
                                travel expertise.
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-between gap-5 mt-20 pr-5 items-end max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                        <span className="flex grow basis-[0%] flex-col items-stretch self-start max-md:max-w-full">
                            <div className="text-zinc-700 text-3xl font-bold leading-8 max-md:max-w-full">
                                Sign up
                            </div>{" "}
                            <div className="text-zinc-700 text-base leading-7 whitespace-nowrap ml-3 mt-14 self-start max-md:ml-2.5 max-md:mt-10">
                                User Name:
                            </div>{" "}
                            <span className="text-zinc-400 text-base leading-7 border border-[color:var(--TextColor,#A8A7AB)] justify-center mt-2.5 pl-8 pr-16 py-6 rounded-xl border-solid items-start max-md:max-w-full max-md:px-5">
                                User name
                            </span>{" "}
                            <div className="text-zinc-700 text-base leading-7 whitespace-nowrap ml-3 mt-4 self-start max-md:ml-2.5">
                                Email :
                            </div>{" "}
                            <span className="text-zinc-400 text-base leading-7 whitespace-nowrap border border-[color:var(--TextColor,#A8A7AB)] justify-center mt-2 pl-8 pr-16 py-6 rounded-xl border-solid items-start max-md:max-w-full max-md:px-5">
                                Email
                            </span>{" "}
                            <div className="text-zinc-700 text-base leading-7 whitespace-nowrap ml-3 mt-9 self-start max-md:ml-2.5">
                                Password:
                            </div>{" "}
                            <span className="text-zinc-400 text-base leading-7 whitespace-nowrap border border-[color:var(--TextColor,#A8A7AB)] justify-center mt-2 pl-8 pr-16 py-6 rounded-xl border-solid items-start max-md:max-w-full max-md:px-5">
                                Password
                            </span>{" "}
                            <span className="text-white text-base leading-7 whitespace-nowrap items-stretch bg-green-400 justify-center ml-5 mt-9 px-5 py-1.5 rounded-lg self-start max-md:ml-2.5">
                                Sign up
                            </span>
                        </span>{" "}
                        <div className="bg-green-400 w-px shrink-0 h-[452px] mt-12 max-md:mt-10" />{" "}
                        <span className="flex grow basis-[0%] flex-col items-stretch self-start max-md:max-w-full">
                            <div className="text-zinc-700 text-3xl font-bold leading-8 max-md:max-w-full">
                                {" "}
                                Log in
                            </div>{" "}
                            <span className="flex flex-col mt-14 pl-5 max-md:max-w-full max-md:mt-10">
                                <div className="text-zinc-700 text-base leading-7 self-stretch">
                                    Email :
                                </div>{" "}
                                <span className="text-zinc-400 text-base leading-7 border border-[color:var(--TextColor,#A8A7AB)] self-stretch justify-center mt-2 pl-6 pr-16 py-6 rounded-xl border-solid items-start max-md:px-5">
                                    Email
                                </span>{" "}
                                <div className="text-zinc-700 text-base leading-7 self-stretch mt-8">
                                    Password:
                                </div>{" "}
                                <span className="text-zinc-400 text-base leading-7 border border-[color:var(--TextColor,#A8A7AB)] self-stretch w-full justify-center mt-2 pl-6 pr-16 py-6 rounded-xl border-solid items-start max-md:mr-2 max-md:px-5">
                                    Password
                                </span>{" "}
                                <span className="text-white text-base leading-7 whitespace-nowrap items-stretch bg-green-400 justify-center mt-8 px-5 py-1.5 rounded-lg self-start">
                                    Log in
                                </span>
                            </span>
                        </span>
                    </div>
                </span>
            </div>
            <>
                <div className="bg-white flex flex-col items-stretch py-12">
                    <div className="flex-col text-white text-4xl font-bold leading-10 relative whitespace-nowrap overflow-hidden min-h-[250px] w-full justify-center mt-2.5 pl-12 pr-16 pt-40 pb-12 items-start max-md:max-w-full max-md:pt-10 max-md:px-5">
                        <img
                            loading="lazy"
                            srcSet="..."
                            className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        Writer Registration
                    </div>
                    <span className="flex w-full flex-col mt-20 mb-32 px-10 items-start max-md:max-w-full max-md:my-10 max-md:px-5">
                        <span className="flex w-[735px] max-w-full justify-between gap-5 ml-2.5 items-start max-md:flex-wrap">
                            <div className="text-zinc-700 text-3xl font-bold leading-8">
                                Why join us?
                            </div>
                            <div className="text-zinc-700 text-3xl font-bold leading-8">
                                Register
                            </div>
                        </span>
                        <div className="self-stretch mt-12 max-md:max-w-full max-md:mt-10">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">

                                    <div className="text-black text-base leading-7 max-w-[1093px] ml-8 mr-8 mt-10 max-md:max-w-full max-md:mr-2.5">
                                        <ul>
                                            <li>
                                                <strong>· Showcase Your Adventures:</strong> Share your travel stories, complete with
                                                photos and details, to showcase the beauty and uniqueness of the
                                                places you've explored.
                                            </li>
                                            <li>
                                                <strong>· Connect with a Community:</strong> Exchange ideas, seek advice, and form
                                                connections with individuals who share your passion.
                                            </li>
                                            <li>
                                                <strong>· Inspire Others:</strong> Your experiences can inspire and guide others in
                                                planning their own adventures.
                                            </li>
                                            <li>
                                                <strong>· Build Your Portfolio:</strong> If you aspire to be a travel writer, our
                                                platform provides an excellent opportunity to build a portfolio. Your
                                                published content can serve as a testament to your writing skills and
                                                travel expertise.
                                            </li>
                                        </ul>
                                    </div>
                                </div>{" "}
                                <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
                                    <span className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                                        <div className="text-zinc-700 text-base leading-7 self-stretch max-md:max-w-full">
                                            User Name:
                                        </div>{" "}
                                        <span className="text-zinc-400 text-base leading-7 border border-[color:var(--TextColor,#A8A7AB)] self-stretch justify-center mt-2.5 pl-8 pr-16 py-6 rounded-xl border-solid items-start max-md:max-w-full max-md:px-5">
                                            User name
                                        </span>{" "}
                                        <div className="text-zinc-700 text-base leading-7 self-stretch mt-4 max-md:max-w-full">
                                            Email :
                                        </div>{" "}
                                        <span className="text-zinc-400 text-base leading-7 whitespace-nowrap border border-[color:var(--TextColor,#A8A7AB)] self-stretch justify-center mt-2 pl-8 pr-16 py-6 rounded-xl border-solid items-start max-md:max-w-full max-md:px-5">
                                            Email
                                        </span>{" "}
                                        <div className="text-zinc-700 text-base leading-7 self-stretch mt-9 max-md:max-w-full">
                                            Password:
                                        </div>{" "}
                                        <span className="text-zinc-400 text-base leading-7 whitespace-nowrap border border-[color:var(--TextColor,#A8A7AB)] self-stretch justify-center mt-2 pl-8 pr-16 py-6 rounded-xl border-solid items-start max-md:max-w-full max-md:px-5">
                                            Password
                                        </span>{" "}
                                        <span className="text-white text-base leading-7 whitespace-nowrap items-stretch bg-green-400 justify-center mt-9 px-5 py-1.5 rounded-lg self-start">
                                            Sign up
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>{" "}
                        <div className="bg-teal-900 self-stretch w-full shrink-0 h-px mt-20 mx-8 max-md:mr-2.5 max-md:mt-10" />{" "}
                        <div className="text-zinc-700 text-3xl font-bold leading-8 max-w-[280px] ml-2.5 mt-20 max-md:mt-10">
                            Already a member? Log in
                        </div>{" "}
                        <span className="flex w-[556px] max-w-full items-stretch justify-between gap-5 ml-2.5 mt-6 max-md:flex-wrap">
                            <div className="text-zinc-700 text-base leading-7">Email :</div>{" "}
                            <div className="text-zinc-700 text-base leading-7">Password:</div>
                        </span>{" "}
                        <div className="self-stretch flex items-center justify-between gap-5 mt-2 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                            <span className="text-zinc-400 text-base leading-7 border border-[color:var(--TextColor,#A8A7AB)] self-stretch grow justify-center pl-6 pr-16 py-6 rounded-xl border-solid items-start max-md:px-5">
                                Email
                            </span>{" "}
                            <span className="text-zinc-400 text-base leading-7 border border-[color:var(--TextColor,#A8A7AB)] self-stretch grow justify-center pl-5 pr-16 py-6 rounded-xl border-solid items-start max-md:px-5">
                                Password
                            </span>{" "}
                            <span className="text-white text-base leading-7 whitespace-nowrap items-stretch bg-green-400 justify-center my-auto px-5 py-1.5 rounded-lg">
                                Log in
                            </span>
                        </div>
                    </span>
                </div>
            </>
            <Footer />
        </>
    );
}

export default Register;