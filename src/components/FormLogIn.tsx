import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebase.config'
import Button1 from './Button1';


function LoginComponent() {

  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: '',
  })

  const [error, setError] = useState<string>();
  const { login, ResetPassword } = useAuth();
  const navigate = useNavigate();
  const handleChange = ({ target: { id, value } }: { target: { id: string, value: string } }) => {
    setUser({ ...user, [id]: value });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      const currentUser = auth.currentUser;
      if (currentUser && currentUser.emailVerified) {
        console.log(user);
        navigate('/new-itinerary');
      } else {
        setError("Email not verified. Please verify your email.");
      }

    } catch (error: any) {

      if (error.code === "auth/user-not-found") {
        setError("User not found");
      }
      if (error.code === "auth/invalid-credential") {
        setError("Wrong password");
      }
      if (error.code === "auth/too-many-requests") {
        setError("Too many requests");
      }
      if (error.code === "auth/invalid-email") {
        setError("Invalid email");
      }
      if (error.code === "Email not verified. Please verify your email.") {
        setError("Email not verified. Please verify your email.");
      }
    }

  }
  const handleResetPassword = async () => {
    if (!user.email) return setError('Please enter your email');

    try {
      await ResetPassword(user.email);
      setError('We sent you an email with a link to reset your password');
    } catch (error: any) {
      setError(error.message);
    }
  }

  return (
    <div className="w-full md:w-1/2 text-zinc-700 text-3xl font-bold leading-8 ml-20">
      <p className="text-zinc-700 text-3xl font-bold leading-8 mx-4">
        Log In
      </p>
      {error && <p className=" border-2 border-red-700 mt-4 p-2 text-base text-rose-900">{error}</p>}

      <form onSubmit={handleSubmit} className="mt-8">

        <div className="flex-grow basis-[0%] flex-col items-stretch self-center ">
          <div>
            {/* <div>
              <label htmlFor="text" className="text-zinc-700 text-base leading-7 self-stretch mt-4 max-md:max-w-full">
                User Name:
              </label>{" "}
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="userName"
                name="text"
                className="text-zinc-400 text-sm leading-7 whitespace-nowrap border border-[color:var(--TextColor,#A8A7AB)] self-stretch justify-center mt-2 pl-8 pr-16 py-2 rounded-xl border-solid items-start max-md:max-w-full max-md:px-5"
                placeholder="Enter a user name"
                onChange={handleChange}
              />
            </div> */}
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
          <div>
            <Button1 text="Log In" />
            <a href="#!" className="text-sm ml-5 inline-block" onClick={handleResetPassword}>Forgot Your Password?</a>
          </div>
        </div>
      </form>
      <p className="text-zinc-700 text-sm font-normal mt-6">Not registered yet? Click <Link to={'/sign-up'} className="font-bold text-teal-900 underline">here</Link> to SignUp</p>
    </div>

  );
}

export default LoginComponent;