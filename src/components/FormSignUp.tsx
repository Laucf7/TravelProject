import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Button1 from "../components/Button1";

interface User {
    email: string;
    password: string;
}

export function FormSignUp() {
    const [user, setUser] = useState<User>({
        email: "",
        password: "",
    });

    const { signup } = useAuth()

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
            await signup(user.email, user.password);
            navigate("/log-in");
        } catch (error: any) {
            //setError(error.message as string);
            if (error.code === 'auth/invalid-email') {
                setError('Invalid email');
              }
              if (error.code === 'auth/email-already-in-use') {
                  setError('Email already in use');
              }
              
              if (error.code === 'auth/weak-password') {
                  setError('The password must contain a minimum of 6 characters');
              }
        }
    };

    return (
        <div className="w-full md:w-1/2 text-zinc-700 text-3xl font-bold leading-8 ml-20">
            <p className="text-zinc-700 text-3xl font-bold leading-8 mx-4">
                Sign up
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
                <Button1 text="Sign Up" />

            </form>
            <p className="text-zinc-700 text-sm font-normal mt-6">Already a member? Click <Link to={'/log-in'} className="font-bold text-teal-900 underline">here</Link> to LogIn</p>

        </div>
    )
}

export default FormSignUp;