import { useAuth } from '../context/authContext'
import Navbar from "../components/Navbar.tsx"
import Footer from "../components/Footer.tsx"
import TravelForm from "../components/TravelForm.tsx";

function NewItinerary() {

  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <Navbar isTextWhite={false} />
      <div className='flex flex-row justify-end bg-teal-900 text-white'>
                    <p className='font-semibold mt-3'>Welcome {user.email}</p>
                    <button 
                    onClick={handleLogout} 
                    className=' bg-red-600 text-white p-1 m-2 rounded-lg'
                    >Logout</button>
                </div>
             <div className="bg-white flex flex-col items-stretch">
                 <div className="flex-col text-white text-4xl font-bold leading-10 relative whitespace-nowrap overflow-hidden w-full justify-center pl-12 pr-16 pt-40 pb-14 items-start max-md:max-w-full max-md:pt-10 max-md:px-5">
                   <img
                        loading="lazy"
                        srcSet="/img/long.jpg"
                        className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <p className="absolute z-10">
                        Create a New Itinerary
                    </p>
                </div>
                </div>
            <TravelForm />
            <Footer />
    </div>
  );
}

export default NewItinerary;

// import { useAuth } from '../context/authContext'
// import Navbar from "../components/Navbar.tsx"
// import Footer from "../components/Footer.tsx"
// import DayItinerary from "../components/DayItinerary.tsx";
// import AddCivitatis from "../components/AddCivitatis.tsx"
// import Carousel from "../components/Carousel.tsx";
// import { useState } from "react";
// import TravelForm from "../components/TravelForm.tsx";

// function NewItinerary() {
//   const { user, logout, loading } = useAuth();

//   const handleLogout = async () => {
//     await logout();
//   };

//   if (loading) return <h1>Loading...</h1>;

//   const [showItinerary, setShowItinerary] = useState(false);

//     const toggleItinerary = () => {
//         setShowItinerary(!showItinerary);
//     };

//   return (
//     <div>
//       <Navbar isTextWhite={false} />
//       <div className='flex flex-row justify-end bg-teal-900 text-white'>
//                     {/* <h1>Profile {user.userName}</h1> */}
//                     <p className='font-semibold mt-3'>Welcome {user.email}</p>
//                     <button 
//                     onClick={handleLogout} 
//                     className=' bg-red-600 text-white p-1 m-2 rounded-lg'
//                     >Logout</button>
//                 </div>
//              <div className="bg-white flex flex-col items-stretch">
//                  <div className="flex-col text-white text-4xl font-bold leading-10 relative whitespace-nowrap overflow-hidden w-full justify-center pl-12 pr-16 pt-40 pb-14 items-start max-md:max-w-full max-md:pt-10 max-md:px-5">
//                    <img
//                         loading="lazy"
//                         srcSet="/img/long.jpg"
//                         className="absolute h-full w-full object-cover object-center inset-0"
//                     />
//                     <p className="absolute z-10">
//                         Create a New Itinerary
//                     </p>
//                 </div>
//                 </div>
                
//             <TravelForm />
//             <div className="bg-white flex flex-col items-stretch">
//                 <div className="self-center w-full max-w-[1182px] mt-6 max-md:max-w-full max-md:mt-4">
//                     <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//                     <div className="flex flex-col items-stretch w-[67%] max-md:w-full max-md:ml-0">
//                         <div className="flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-7">
//                             <div>
//                                 <h2 id="country" className="text-black text-7xl font-bold leading-[81.6px] mt-2 max-md:text-4xl cursor-pointer" onClick={toggleItinerary}>
//                                     COLOMBIA</h2>
//                                 <h3 className="text-black text-xl mt-2 leading-7 w-full cursor-pointer" onClick={toggleItinerary}>
//                                     ITINERARIO (+)</h3>
//                                 <p className="text-gray-400 text-sm cursor-pointer" onClick={toggleItinerary}>
//                                     Haz click para desplegar el itinerario</p>
//                                 {showItinerary && (
//                                     <div className="itineraryDetail">
//                                         <DayItinerary
//                                             day="Day 1"
//                                             place="Bogota"
//                                             hotel="Hotel Bogota"
//                                             explore="Places to visit, blablabla."
//                                         />
//                                         <DayItinerary
//                                             day="Day 2"
//                                             place="Salento"
//                                             hotel="Hotel Salento2"
//                                             explore="Places to visit, blablabla"
//                                         />
//                                     </div>
//                                 )}
//                             </div>
//                                 <div className="text-black text-base leading-7 self-stretch mt-10 max-md:max-w-full">
//                                     enim lobortis scelerisque fermentum dui faucibus in ornare quam
//                                     viverra orci sagittis eu volutpat odio facilisis mauris sit amet
//                                     massa vitae tortor condimentum lacinia quis vel eros donec ac
//                                     odio tempor orci dapibus ultrices in iaculis nunc sed augue
//                                     lacus, viverra vitae congue eu, consequat ac felis donec et odio
//                                     pellentesque diam volutpat commodo sed egestas egestas fringilla
//                                     fau.
//                                 </div>
//                                 <Carousel
//                                     imageSrc1="/img/cocora.webp"
//                                     imageSrc2="/img/guatape.jpeg"
//                                     imageSrc3="/img/salento.webp"
//                                     imageSrc4="/img/tayrona.webp"
//                                 />
//                                 <div>
//                                     <h2 className="text-teal-900 text-3xl leading-8 capitalize self-stretch mt-7 max-md:max-w-full">About my trip:</h2>
//                                     <ul className="text-black text-base leading-7 self-stretch mt-6 max-md:max-w-full">
//                                         <li>
//                                             Duration: x days
//                                         </li>
//                                         <li>
//                                             Month:
//                                         </li>
//                                         <li>
//                                             Travel Type:
//                                         </li>
//                                         <li>
//                                             Budget per person (aprox):
//                                         </li>
//                                     </ul>
//                                 </div>
//                                 <div className="text-zinc-700 text-3xl leading-8 capitalize self-stretch mt-16 max-md:max-w-full max-md:mt-10">
//                                     Tips & Suggestion
//                                 </div>
//                                 <div className="text-black text-base leading-7 self-stretch mt-8 max-md:max-w-full">
//                                     <ul>
//                                         <li>
//                                             Llocs
//                                         </li>
//                                         <li>
//                                             Menjar
//                                         </li>
//                                         <li>
//                                             Preferencies pagament/canvi divisa
//                                         </li>

//                                     </ul>
//                                 </div>
//                                 <div className="text-zinc-700 text-3xl leading-8 capitalize whitespace-nowrap mt-16 self-start max-md:mt-10">
//                                     Other information:
//                                 </div>
//                                 <div className="text-black text-base leading-7 mt-2 max-md:max-w-full max-md:mt-8">
//                                 enim lobortis scelerisque fermentum dui faucibus in ornare quam
//                                 viverra orci sagittis eu volutpat odio facilisis mauris sit amet
//                                 massa vitae tortor condimentum lacinia quis vel eros donec ac odio
//                                 tempor orci dapibus ultrices in iaculis nunc sed augue lacus,
//                                 viverra vitae congue eu, consequat ac felis donec et odio
//                                 pellentesque diam volutpat commodo sed egestas egestas fringilla
//                                 fau.enim lobortis scelerisque fermentum dui faucibus in ornare
//                                 quam viverra orci sagittis eu volutpat odio facilisis mauris sit
//                                 amet massa vitae tortor condimentum lacinia quis vel eros donec ac
//                                 odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus,
//                                 viverra vitae congue eu, consequat ac felis donec et odio
//                                 pellentesque diam volutpat commodo sed egestas egestas fringilla
//                                 fau.
//                             </div>
//                             </div>
//                         </div>
//                         <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
//                             <div className="flex grow flex-col mt-4 items-stretch max-md:mt-5">
//                                 <img
//                                     loading="lazy"
//                                     srcSet="/img/MyMaps.png"
//                                     className="aspect-[1.78] object-contain object-center w-full overflow-hidden"
//                                 />
//                                 <div className="flex items-stretch justify-between gap-5 mt-16 px-5 max-md:mt-10">
//                                     <div className="text-zinc-700 text-2xl leading-9 grow shrink basis-auto">
//                                         Activities
//                                     </div>
//                                     <div className="text-green-400 text-xl leading-9 self-start">
//                                         See all
//                                     </div>
//                                 </div>
//                                 <AddCivitatis />
//                                 <AddCivitatis />
//                                 <AddCivitatis />
//                                 <AddCivitatis />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             <Footer />
//     </div>
//   );
// }

// export default NewItinerary;