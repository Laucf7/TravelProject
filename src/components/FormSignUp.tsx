import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate, Link } from 'react-router-dom';
import Button1 from './Button1';
import '../MyComponents.css'


function SignupComponent() {

    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
    })

    const [error, setError] = useState<string>();
    const { signup } = useAuth();
    const navigate = useNavigate();
    const handleChange = ({ target: { id, value } }: { target: { id: string, value: string } }) => {

        setUser({ ...user, [id]: value });

    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        try {
            await signup(user.email, user.password);
            customAlert("Please check your email to validate your account.")
            navigate('/log-in');
        } catch (error: any) {
            console.log(error)

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

    }

    function customAlert(message: string) {
        const alertContainer = document.createElement('div');
        alertContainer.className = 'alert-container';
    
        const alertMessage = document.createElement('p');
        alertMessage.className = 'alert-message';
        alertMessage.textContent = message;
    
        const alertButton = document.createElement('button');
        alertButton.className = 'alert-button';
        alertButton.textContent = 'OK';
        alertButton.onclick = () => {
            document.body.removeChild(alertContainer);
        };
    
        alertContainer.appendChild(alertMessage);
        alertContainer.appendChild(alertButton);
    
        document.body.appendChild(alertContainer);
    }

    return (
        <div className="w-full md:w-1/2 text-zinc-700 text-3xl font-bold leading-8 ml-20">
            <p className="text-zinc-700 text-3xl font-bold leading-8 mx-4">
                Sign up
            </p>
            {error && <p className=" border-2 border-red-700 mt-4 p-2 text-base text-rose-900">{error}</p>}

            <form onSubmit={handleSubmit} className="mt-8">

                <div>
                    <label htmlFor="text" className="text-zinc-700 text-base leading-7 self-stretch mt-4 max-md:max-w-full">
                        User Name:
                    </label>{" "}
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        id="text"
                        name="text"
                        className="text-zinc-400 text-sm leading-7 whitespace-nowrap border border-[color:var(--TextColor,#A8A7AB)] self-stretch justify-center mt-2 pl-8 pr-16 py-2 rounded-xl border-solid items-start max-md:max-w-full max-md:px-5"
                        placeholder="Enter a user name"
                        onChange={handleChange}
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

    );
}

export default SignupComponent;