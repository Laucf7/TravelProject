import { Link } from "react-router-dom"
import { Popover } from '@headlessui/react';
interface NavbarProps {
    isTextWhite: boolean;
  }
  
  const Navbar: React.FC<NavbarProps> = ({ isTextWhite }) => {
    const textColorStyle = isTextWhite ? "text-white" : "text-black";
  
    return (
        <div className="relative justify-between items-stretch self-stretch flex w-full gap-5 px-6 py-2 max-md:max-w-full max-md:flex-wrap">
        <div className={`text-4xl leading-10 grow shrink basis-auto ${textColorStyle}`}>
            <Link to={'/'}>TravelTogether</Link>
        </div> 
        <div className="self-center flex items-stretch gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
        <div className="md:hidden flex items-center">
            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={`text-base leading-7 ${textColorStyle} md:hidden`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </Popover.Button>
                        <Popover.Panel className={`md:hidden ${open ? 'block' : 'hidden'}`}>
                            <div className="flex flex-col">
                                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/'}>Home</Link></div>
                                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/discover'}>Discover</Link></div>
                                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/about-us'}>About Us</Link></div>
                                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/sign-up'}>SignUp</Link></div>
                                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/log-in'}>LogIn</Link></div>
                                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/new-itinerary'}>New Itinerary</Link></div>
                            </div>
                        </Popover.Panel>
                    </>
                )}
            </Popover>
            </div>
            {/* Mostrar el menú completo en dispositivos más grandes */}
            <div className="hidden md:flex items-center gap-5">
                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/'}>Home</Link></div>
                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/discover'}>Discover</Link></div>
                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/about-us'}>About Us</Link></div>
                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/sign-up'}>SignUp</Link></div>
                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/log-in'}>LogIn</Link></div>
                <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/new-itinerary'}>New Itinerary</Link></div>
            </div>
        </div>
    </div>
        // <div className="relative justify-between items-stretch self-stretch flex w-full gap-5 px-6 py-2 max-md:max-w-full max-md:flex-wrap">
        //     <div className={`text-4xl leading-10 grow shrink basis-auto ${textColorStyle}`}>
        //     <Link to={'/'}>TravelTogether</Link>
        //     </div> 
        //     <div className="self-center flex items-stretch justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
        //         <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/'}>Home</Link></div>
        //         <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/discover'}>Discover</Link></div>
        //         <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/about-us'}>About Us</Link></div>
        //         <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/sign-up'}>SignUp</Link></div>
        //         <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/log-in'}>LogIn</Link></div>
        //         <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/new-itinerary'}>New Itinerary</Link></div>


        //     </div>
        //     <div className="self-center flex items-stretch gap-2.5 my-auto">
        //         <img
        //             loading="lazy"
        //             src="/img/enFlag.png"
        //             className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
        //         />
        //         <div className={`text-base leading-7 ${textColorStyle} text-base leading-7 self-center my-auto hover:text-teal-900 hover:font-bold`}>
        //             EN ↓
        //         </div>
        //     </div>
        // </div>
    )
}

export default Navbar


// NAVBAR NO RESPONSIVE
// import { Link } from "react-router-dom"
// interface NavbarProps {
//     isTextWhite: boolean;
//   }
  
//   const Navbar: React.FC<NavbarProps> = ({ isTextWhite }) => {
//     const textColorStyle = isTextWhite ? "text-white" : "text-black";
  
//     return (
//         <span className="relative justify-between items-stretch self-stretch flex w-full gap-5 px-6 py-2 max-md:max-w-full max-md:flex-wrap">
//             <div className={`text-4xl leading-10 grow shrink basis-auto ${textColorStyle}`}>
//             <Link to={'/'}>TravelTogether</Link>
//             </div> 
//             <span className="self-center flex items-stretch justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
//                 <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/'}>Home</Link></div>
//                 <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/discover'}>Discover</Link></div>
//                 <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/about-us'}>About Us</Link></div>
//                 <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/sign-up'}>SignUp</Link></div>
//                 <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/log-in'}>LogIn</Link></div>
//                 <div className={`text-base leading-7 ${textColorStyle} hover:text-teal-900 hover:font-bold`}><Link to={'/new-itinerary'}>New Itinerary</Link></div>


//             </span>
//             <span className="self-center flex items-stretch gap-2.5 my-auto">
//                 <img
//                     loading="lazy"
//                     src="/img/enFlag.png"
//                     className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
//                 />
//                 <div className={`text-base leading-7 ${textColorStyle} text-base leading-7 self-center my-auto hover:text-teal-900 hover:font-bold`}>
//                     EN ↓
//                 </div>
//             </span>
//         </span>
//     )
// }

// export default Navbar