import Navbar from "../components/Navbar.tsx"
import Footer from "../components/Footer.tsx"
import DayItinerary from "../components/DayItinerary.tsx";
import AddCivitatis from "../components/AddCivitatis.tsx"
import Carousel from "../components/Carousel.tsx";
import { useState } from "react";


function Discover2() {
    const [showItinerary, setShowItinerary] = useState(false);

    const toggleItinerary = () => {
        setShowItinerary(!showItinerary);
    };

    return (
        <>
            <Navbar isTextWhite={false} />
            <div className="bg-white flex flex-col items-stretch">
                <div className="flex-col text-white text-4xl font-bold leading-10 relative whitespace-nowrap overflow-hidden w-full justify-center mt-2.5 pl-12 pr-16 pt-40 pb-14 items-start max-md:max-w-full max-md:pt-10 max-md:px-5">
                    <img
                        loading="lazy"
                        srcSet="/img/long.jpg"
                        className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <p className="absolute z-10">
                        Discover
                    </p>
                </div>
                <div className="self-center w-full max-w-[1182px] mt-6 max-md:max-w-full max-md:mt-4">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[67%] max-md:w-full max-md:ml-0">
                            <div className="flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-7">
                                <div>
                                    <h2 className="text-black text-7xl font-bold leading-[81.6px] mt-2 max-md:text-4xl cursor-pointer" onClick={toggleItinerary}>
                                        COLOMBIA</h2>
                                    <h3 className="text-black text-xl mt-2 leading-7 w-full cursor-pointer" onClick={toggleItinerary}>
                                        ITINERARIO (+)</h3>
                                    <p className="text-gray-400 text-sm cursor-pointer" onClick={toggleItinerary}>
                                        Haz click para desplegar el itinerario</p>
                                    {showItinerary && (
                                        <div className="itineraryDetail">
                                            <DayItinerary
                                                day="Day 1-2"
                                                place="Bogota"
                                                hotel="Hotel Bogota"
                                                explore="Cerro de Monserrate, Callejón del Embudo, Plaza de Bolívar, Museo Botero, Laguna de Guatavita"
                                            />
                                            <DayItinerary
                                                day="Day 3-6"
                                                place="Salento"
                                                hotel="Hotel Salento2"
                                                explore="Valle de Cocora, Fincas Cafeteras, Filandia, Termales Santa Rosa de Cabal"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="text-slate-900 text-base leading-7 self-stretch mt-10 max-md:max-w-full">
                                    <p>
                                        En tu viaje a Colombia, disfrutarás de atractivas ciudades como Bogotá, Medellín o
                                        Cali, y de la riqueza natural de la Sierra Nevada de Santa Marta y del Parque Tayrona.
                                        Sus playas caribeñas son famosas por los mares de siete colores. Es el hogar de culturas
                                        fascinantes, indígenas y raizales y de la ciudad colonial más hermosa del mundo, Cartagena de Indias.
                                    </p>
                                </div>
                                <Carousel
                                    imageSrc1="/img/cocora.webp"
                                    imageSrc2="/img/guatape.jpeg"
                                    imageSrc3="/img/salento.webp"
                                    imageSrc4="/img/tayrona.webp"
                                />
                                <div>
                                    <h2 className="text-teal-900 text-3xl leading-8 capitalize self-stretch mt-7 max-md:max-w-full">
                                        About my trip:</h2>
                                    <ul className="text-black text-base leading-7 self-stretch mt-6 max-md:max-w-full">
                                        <li>
                                            Duration: 21 days
                                        </li>
                                        <li>
                                            Month: September
                                        </li>
                                        <li>
                                            Travel Type: Friends
                                        </li>
                                        <li>
                                            Budget per person: 1.400 euros
                                        </li>
                                    </ul>
                                </div>
                                <h2 className="text-teal-900 text-3xl leading-8 capitalize self-stretch mt-7 max-md:max-w-full">
                                    Tips & Suggestion
                                </h2>
                                <div className="text-black text-base leading-7 self-stretch mt-8 max-md:max-w-full">
                                    <ul>
                                        <li>
                                            - No siempre funciona la tarjeta de credito ni todos los pueblos tienen ATM, mejor llevar efectivo
                                        </li>
                                        <li>
                                            - Para recorrer la zona del Eje Cafetero recomendamos alquilar 4x4
                                        </li>
                                        <li>
                                            - En las ciudades es mejor usar Uber, es más seguro y económico
                                        </li>

                                    </ul>
                                </div>
                                <h2 className="text-teal-900 text-3xl leading-8 capitalize self-stretch mt-7 max-md:max-w-full">
                                    Other information:
                                </h2>
                                <div className="text-slate-900 text-base leading-7 mt-2 max-md:max-w-full max-md:mt-8">
                                    <p> Pereira será punto de partida para adentrarte en el Valle del Cocora, donde disfrutar de la diversidad de flora y fauna (las palmeras de cera más altas del mundo están aquí). Salento y el Valle de Cocora también te fascinarán y por su puesto las plantaciones de de café sobre las colinas escarpadas típicas de este área, junto a la programada visita de una Hacienda finca de café típica y la magnífica explicación acerca de la preparación del café, la posibilidad de apreciar el trabajo de los recolectores y de conocer su sistema de de producción con la cosecha y el secado al sol harán que de este circuito una posibilidad casi única.
                                        Bogotá, la capital, cuenta con casco antiguo con una interesante mezcla entre antiguo y moderno, con hermosos edificios antiguos coloniales y palacios, cafés bohemios, galerías de arte y teatros. La ciudad es conocida por su colección de arte de oro precolombino, iglesias coloniales, grandes museos como el Museo del Oro, uno de los mejores de América del Sur.
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="flex grow flex-col mt-4 items-stretch max-md:mt-5">
                                <img
                                    loading="lazy"
                                    srcSet="/img/MyMaps.png"
                                    className="aspect-[1.78] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="flex items-stretch justify-between gap-5 mt-16 px-5 max-md:mt-10">
                                    <div className="text-zinc-700 text-2xl leading-9 grow shrink basis-auto">
                                        Activities
                                    </div>
                                    <div className="text-green-400 text-xl leading-9 self-start">
                                        See all
                                    </div>
                                </div>
                                <AddCivitatis />
                                <AddCivitatis />
                                <AddCivitatis />
                                <AddCivitatis />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}


// import Navbar from "../components/Navbar.tsx"
// import Footer from "../components/Footer.tsx"
// import DayItinerary from "../components/DayItinerary.tsx";
// import AddCivitatis from "../components/AddCivitatis.tsx"
// //import Carousel from "../components/Carousel.tsx";


// function Discover2() {
//     return (
//         <>
//             <Navbar isTextWhite={false} />
//             <div className="bg-white flex flex-col items-stretch">
//                 <div className="flex-col text-white text-4xl font-bold leading-10 relative whitespace-nowrap overflow-hidden min-h-[250px] w-full justify-center mt-2.5 pl-12 pr-16 pt-40 pb-14 items-start max-md:max-w-full max-md:pt-10 max-md:px-5">
//                     <img
//                         loading="lazy"
//                         srcSet="/img/long.jpg"
//                         className="absolute h-full w-full object-cover object-center inset-0"
//                     />
//                     <p className="absolute z-10">
//                         Discover
//                     </p>
//                 </div>
//                 <div className="itineraryDetail ml-5">
//                 <DayItinerary
//                     day="Day 1"
//                     date="20 jul,2023"
//                     place="Colombia"
//                     hotel="Hotel Salento"
//                     explore="Places to visit, blablabla.
//                     Ususususususus"
//                 />
//                 <DayItinerary
//                     day="Day 2"
//                     date="21 jul,2023"
//                     place="Colombia"
//                     hotel="Hotel Salento2"
//                     explore="Places to visit, blablabla"
//                 />
//                 </div>
//                 <div className="self-center w-full max-w-[1182px] mt-28 max-md:max-w-full max-md:mt-10">
//                     <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//                         <div className="flex flex-col items-stretch w-[67%] max-md:w-full max-md:ml-0">
//                             <div className="flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-7">
//                                 <div className="flex w-[317px] max-w-full justify-between gap-5 self-start items-start">
//                                     <div className="text-black text-7xl font-bold leading-[81.6px] mt-2 max-md:text-4xl">
//                                         COLOMBIA
//                                     </div>
//                                     <div className="text-black text-base leading-7 w-full">
//                                         ITINERARIO
//                                     </div>
//                                 </div>
//                                 <div className="text-black text-base leading-7 self-stretch mt-10 max-md:max-w-full">
//                                     enim lobortis scelerisque fermentum dui faucibus in ornare quam
//                                     viverra orci sagittis eu volutpat odio facilisis mauris sit amet
//                                     massa vitae tortor condimentum lacinia quis vel eros donec ac
//                                     odio tempor orci dapibus ultrices in iaculis nunc sed augue
//                                     lacus, viverra vitae congue eu, consequat ac felis donec et odio
//                                     pellentesque diam volutpat commodo sed egestas egestas fringilla
//                                     fau.
//                                 </div>
//                                 {/* <Carousel 
//                                 imageSrc1="/img/cocora.webp"
//                                 imageSrc2="/img/guatape.jpeg"
//                                 imageSrc3="/img/salento.webp"
//                                 imageSrc4="/img/tayrona.webp"
//                                 /> */}
//                                 <img
//                                     loading="lazy"
//                                     srcSet="/img/cocora.webp"
//                                     className="aspect-[2.62] object-contain object-center w-full overflow-hidden self-stretch mt-16 max-md:max-w-full max-md:mt-10"
//                                 />
//                                 <div className="text-zinc-700 text-3xl leading-8 capitalize self-stretch mt-7 max-md:max-w-full">
//                                     About the country
//                                 </div>
//                                 <div className="flex items-center gap-2.5 self-start">
//                                     <img
//                                         loading="lazy"
//                                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/17b1d7fe2a6de4134a471e05cd07ebe11958550eb2b676d40d544298fa5e0780?"
//                                         className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
//                                     />
//                                     <div className="text-zinc-700 text-base leading-7 self-stretch grow whitespace-nowrap">
//                                         Colombia
//                                     </div>
//                                 </div>
//                                 <div className="text-black text-base leading-7 self-stretch mt-6 max-md:max-w-full">
//                                     <ul>
//                                         <li>
//                                         Currenci (Api?)
//                                         </li>
//                                         <li>
//                                         Weather (Api?)
//                                         </li>
//                                         <li>
//                                         Visa (Yes/No)
//                                         </li>
//                                         <li>
//                                         Security
//                                         </li>
//                                     </ul>    
//                                 </div>
//                                 <div className="text-zinc-700 text-3xl leading-8 capitalize self-stretch mt-16 max-md:max-w-full max-md:mt-10">
//                                     Tips and curiosities
//                                 </div>
//                                 <div className="text-black text-base leading-7 self-stretch mt-8 max-md:max-w-full">
//                                 <ul>
//                                         <li>
//                                        Llocs
//                                         </li>
//                                         <li>
//                                         Menjar
//                                         </li>
//                                         <li>
//                                         Preferencies pagament/canvi divisa
//                                         </li>

//                                     </ul>
//                                 </div>
//                                 <div className="text-zinc-700 text-3xl leading-8 capitalize whitespace-nowrap mt-16 self-start max-md:mt-10">
//                                     Other information:
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
//                             <div className="flex grow flex-col items-stretch max-md:mt-5">
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

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="self-center w-full max-w-[1182px] mt-5 mb-28 px-5 max-md:max-w-full max-md:mb-10">
//                     <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//                         <div className="flex flex-col items-stretch w-[67%] max-md:w-full max-md:ml-0">
//                             <div className="text-black text-base leading-7 mt-2 max-md:max-w-full max-md:mt-8">
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
//                         </div>
//                         <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
//                         <AddCivitatis />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>

//     );
// }

export default Discover2;

