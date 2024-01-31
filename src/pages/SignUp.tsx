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



// FIREBASE: CODIGO FUNCIONA PARA REGISTRAR USERS, PERO NO MUESTRA LOS ERRORES POR PANTALLA
// import { useState, ChangeEvent, FormEvent } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Button1 from "../components/Button1";
// import { useAuth } from "../context/authContext";


// interface User {
//     email: string;
//     password: string;
// }

// function SignUpPage() {
//     const [user, setUser] = useState<User>({
//         email: "",
//         password: "",
//     });

//     const { signup } = useAuth();

//     const navigate = useNavigate();

//     const [error, setError] = useState<string | null>('');

//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setUser(prevUser => ({
//             ...prevUser,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             signup(user.email, user.password);
//             navigate("/discover");
//         } catch (error:any) {
//             setError(error.message);
//             // if(error.code === "auth/internal-error"){
//             //     setError("Correo invalido")
//             // } 
//             // else if(error.code === "auth/email-already-in-use"){
//             //     setError("Este correo ya existe")
//             // }
//             // else (error.code === "auth/weak-password");{
//             //     setError("Contraseña invalida, mínimo ha de tener 6 carácteres")
//             // }
//             //(codigo por si queremos ir especificando los tipos de error)
//         }  
//     };

//     return (
//         <>
//             <Navbar isTextWhite={false} />
//             <div className="bg-white flex flex-col items-stretch">
//                 <div className="flex-col text-white text-4xl font-bold relative overflow-hidden w-full justify-center mt-2.5 pl-12 pr-16 pt-40 pb-12 items-start max-md:max-w-full max-md:pt-10 max-md:px-5">
//                     <img
//                         loading="lazy"
//                         srcSet="/img/long2.png"
//                         className="absolute h-full w-full object-cover object-center inset-0"
//                         alt="Registration Background"
//                     />
//                     <p className="absolute z-10">
//                         Writer Registration
//                     </p>
//                 </div>
//             </div>
//             <span className="flex w-full flex-col mt-10 mb-10 px-10 items-start max-md:max-w-full max-md:my-10 max-md:px-5">
//                 <div className="flex w-full justify-between gap-5 max-w-screen-lg mx-auto max-md:flex-wrap">
//                     <div className="w-full md:w-1/2 text-zinc-700 leading-8">
//                         <p className="text-zinc-700 text-3xl font-bold leading-8 ml-4">
//                             Why join us?
//                         </p>
//                         <ul className="mt-8">
//                             <li className="mb-2">
//                                 <strong>· Showcase Your Adventures:</strong> Share your travel stories, complete with
//                                 photos and details, to showcase the beauty and uniqueness of the
//                                 places you've explored.
//                             </li>
//                             <li className="mb-2">
//                                 <strong>· Connect with a Community:</strong> Exchange ideas, seek advice, and form
//                                 connections with individuals who share your passion.
//                             </li>
//                             <li className="mb-2">
//                                 <strong>· Inspire Others:</strong> Your experiences can inspire and guide others in
//                                 planning their own adventures.
//                             </li>
//                             <li className="mb-2">
//                                 <strong>· Build Your Portfolio:</strong> If you aspire to be a travel writer, our
//                                 platform provides an excellent opportunity to build a portfolio. Your
//                                 published content can serve as a testament to your writing skills and
//                                 travel expertise.
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="w-full md:w-1/2 text-zinc-700 text-3xl font-bold leading-8 ml-20">
//                         <p className="text-zinc-700 text-3xl font-bold leading-8 mx-4">
//                             Sign up
//                         </p>
//                         <form
//                             className="mt-8"
//                             onSubmit={handleSubmit}
//                         >
//                             <div>
//                                 <label htmlFor="email" className="text-zinc-700 text-base leading-7 self-stretch mt-4 max-md:max-w-full">
//                                     Email:
//                                 </label>{" "}
//                             </div>
//                             <div className="mb-4">
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     className="text-zinc-400 text-sm leading-7 whitespace-nowrap border border-[color:var(--TextColor,#A8A7AB)] self-stretch justify-center mt-2 pl-8 pr-16 py-2 rounded-xl border-solid items-start max-md:max-w-full max-md:px-5"
//                                     placeholder="Enter your email"
//                                     required
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="password" className="text-zinc-700 text-base leading-7 self-stretch mt-9 max-md:max-w-full">
//                                     Password:
//                                 </label>{" "}
//                             </div>
//                             <div className="mb-4">
//                                 <input
//                                     type="password"
//                                     id="password"
//                                     name="password"
//                                     className="text-zinc-400 text-sm leading-7 whitespace-nowrap border border-[color:var(--TextColor,#A8A7AB)] self-stretch justify-center mt-2 pl-8 pr-16 py-2 rounded-xl border-solid items-start max-md:max-w-full max-md:px-5"
//                                     placeholder="Enter your password"
//                                     required
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <Button1 text="Sign Up" />

//                         </form>
//                         <div className=" border-2">
//                              Error:
//                            {error && <p>{error}</p>} 
//                         </div>
                        
//                         <p className="text-zinc-700 text-sm font-normal mt-6">Already a member? Click <Link to={'/log-in'} className="font-bold text-teal-900 underline">here</Link> to LogIn</p>
//                     </div>
//                 </div>
//             </span>
//             <Footer />
//         </>
//     );
// }

// export default SignUpPage; 