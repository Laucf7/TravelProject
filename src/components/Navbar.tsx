interface NavbarProps {
    isTextWhite: boolean;
  }
  
  const Navbar: React.FC<NavbarProps> = ({ isTextWhite }) => {
    const textColorStyle = isTextWhite ? "text-white" : "text-black";
  
    return (
        <span className="relative justify-between items-stretch self-stretch flex w-full gap-5 p-6 max-md:max-w-full max-md:flex-wrap">
            <div className={`text-4xl leading-10 grow shrink basis-auto ${textColorStyle}`}>
                TravelTogether
            </div> 
            <span className="self-center flex items-stretch justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}>Home</div>
                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}>Discover</div>
                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}>About Us</div>
                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}>SignUp</div>
                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}>LogIn</div>

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