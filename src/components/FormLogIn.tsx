import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Button1 from "./Button1";
import {auth} from "../firebase.config"

interface User {
    email: string;
    password: string;
}

export function FormLogIn() {
    const [user, setUser] = useState<User>({
        email: "",
        password: "",
    });

    const { login } = useAuth()

    const navigate = useNavigate();

    const [error, setError] = useState<string | null>();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        try {
            await login(user.email, user.password);
            const currentUser = auth.currentUser;
            if(currentUser && currentUser){
                console.log(user);
                navigate("/new-itinerary");
            }
            
        } catch (error: any) {
            setError(error.message as string);
            // if (error.code === "auth/user-not-found") {
            //     setError("User not found");
            // }
            // if (error.code === "auth/invalid-credential") {
            //     setError("Wrong password");
            // }
            // if (error.code === "auth/too-many-requests") {
            //     setError("Too many requests");
            // }
            // if (error.code === "auth/invalid-email") {
            //     setError("Invalid email");
            // }
            // if (error.code === "Email not verified. Please verify your email.") {
            //     setError("Email not verified. Please verify your email.");
            // }
        }
    };

    return (
        <div className="w-full md:w-1/2 text-zinc-700 text-3xl font-bold leading-8 ml-20">
            <p className="text-zinc-700 text-3xl font-bold leading-8 mx-4">
                Log In
            </p>
            {error && <p className=" border-2 border-red-700 mt-4 p-2 text-base text-rose-900">{error}</p>}
            <form
                className="mt-8"
                onSubmit={handleSubmit}
            >
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                    />
                </div>
                <Button1 text="Log In" />

            </form>
            <p className="text-zinc-700 text-sm font-normal mt-6">Not registered yet? Click <Link to={'/sign-up'} className="font-bold text-teal-900 underline">here</Link> to SignUp</p>

        </div>
    )
}

export default FormLogIn;