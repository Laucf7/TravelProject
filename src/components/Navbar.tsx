import { Link } from "react-router-dom"
interface NavbarProps {
    isTextWhite: boolean;
  }
  
  const Navbar: React.FC<NavbarProps> = ({ isTextWhite }) => {
    const textColorStyle = isTextWhite ? "text-white" : "text-black";
  
    return (
        <span className="relative justify-between items-stretch self-stretch flex w-full gap-5 px-6 py-2 max-md:max-w-full max-md:flex-wrap">
            <div className={`text-4xl leading-10 grow shrink basis-auto ${textColorStyle}`}>
            <Link to={'/'}>TravelTogether</Link>
            </div> 
            <span className="self-center flex items-stretch justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/'}>Home</Link></div>
                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/discover'}>Discover</Link></div>
                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/about-us'}>About Us</Link></div>
                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/sign-up'}>SignUp</Link></div>
                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/log-in'}>LogIn</Link></div>

            </span>
            <span className="self-center flex items-stretch gap-2.5 my-auto">
                <img
                    loading="lazy"
                    src="/img/enFlag.png"
                    className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                />
                <div className={`text-base leading-7 ${textColorStyle} text-base leading-7 self-center my-auto hover:text-teal-900 hover:font-bold`}>
                    EN ↓
                </div>
            </span>
        </span>
    )
}

export default Navbar