import React, { useState, useEffect } from 'react';
import Button1 from './Button1';
import { useForm } from 'react-hook-form'
import DayItinerary from "../components/DayItinerary.tsx";
import AddCivitatis from "../components/AddCivitatis.tsx"
import Carousel from "../components/Carousel.tsx";

interface Day {
    day: string;
    arriveTo: string;
    hotel: string;
    whatToVisit: string;
}

const TravelForm: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            country: "",
            duration: "",
            month: "",
            travelType: "",
            budget: "",
            currency: "",
            introductoryText: "",
            tips: "",
            otherInformation: ""
        }
    });

    const country = watch("country")
    const duration = watch("duration")
    const month = watch("month")
    const travelType = watch("travelType")
    const budget = watch("budget")
    const currency = watch("currency")
    const introductoryText = watch("introductoryText")
    const tips = watch("tips")
    const otherInformation = watch("otherInformation")



    const [showItinerary, setShowItinerary] = useState(false);

    const toggleItinerary = () => {
        setShowItinerary(!showItinerary);
    };

    const [countries, setCountries] = useState<string[]>([]);

    useEffect(() => {
        //Para la lista de todos los paises del mundo llamando a api
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                const countryNames = data.map((country: any) => country.name.common);
                countryNames.sort((a: any, b: any) => a.localeCompare(b));
                setCountries(countryNames);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    // Para crear los Days

    const [days, setDays] = useState<Day[]>([{ day: '', arriveTo: '', hotel: '', whatToVisit: '' }]);

    const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const list = [...days];
        list[index][name as keyof Day] = value; // Utilizar "as keyof Day" para asegurar el tipo
        setDays(list);
    };

    const handleAddDay = () => {
        setDays([...days, { day: '', arriveTo: '', hotel: '', whatToVisit: '' }]);
    };

    const handleRemoveDay = (index: number) => {
        const list = [...days];
        list.splice(index, 1);
        setDays(list);
    };

    return (
        <>
            <div className="max-w-xl mx-auto bg-teal-900 p-8 shadow-2xl rounded-md mt-6">
                <div className='flex flex-row justify-center'>
                    <h1 className="text-4xl font-semibold mb-6 text-white mt-2">ENTER YOUR ITINERARY</h1>
                    <img loading="lazy"
                        srcSet="/img/greenPlanet.png"
                        style={{ width: '64px', height: '64px' }}
                    />
                </div>
                <form onSubmit={handleSubmit((data) => {
                    console.log(data)
                })}>
                    <div className="mb-6 flex flex-col">
                        <label htmlFor="country" className='text-lg font-semibold text-white'>Country:</label>
                        <select {...register("country")} id="country" name="country" className='border border-teal-900  p-1 rounded-md'>
                            <option value="">Select a country</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                        <p>{errors.country?.message}</p>
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label htmlFor="duration" className='text-lg font-semibold text-white'>Duration:</label>
                        <input {...register("duration")} type="number" id="duration" name="duration" placeholder="Total days" className='border border-teal-900  p-1 rounded-md' />
                        <p>{errors.duration?.message}</p>
                    </div>

                    <div className="mb-6 flex flex-col">
                        <label htmlFor="month" className='text-lg font-semibold text-white'>Month:</label>
                        <select {...register("month")} id="month" name="month" className='border border-teal-900  p-1 rounded-md'>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                        <p>{errors.month?.message}</p>
                    </div>

                    <div className="mb-6 flex flex-col">
                        <label htmlFor="travelType" className='text-lg font-semibold text-white'>Travel Type:</label>
                        <select {...register("travelType")} id="travelType" name="travelType" className='border border-teal-900  p-1 rounded-md'>
                            <option value="individual">Solo trip</option>
                            <option value="couple">Couple</option>
                            <option value="friends">Friends</option>
                            <option value="family">Family</option>
                            <option value="familyWithChildren">Family with Children</option>
                        </select>
                        <p>{errors.travelType?.message}</p>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="budget" className='text-lg font-semibold text-white'>Budget per person:</label>
                        <input {...register("budget")} type="number" id="budget" name="budget" className='border border-teal-900  p-1 rounded-md' />
                        <select {...register("currency")} id="currency" name="currency" className='ml-1 rounded-md'>
                            <option value="euro">€</option>
                            <option value="dolar">$</option>
                        </select>
                    </div>

                    <div className="mb-6 flex flex-col">
                        <label htmlFor="text" className='text-lg font-semibold text-white'>Introductory text:</label>
                        <textarea {...register("introductoryText")} id="introductoryText" name="introductoryText" maxLength={500} rows={5} className='block w-full px-3 py-2 border border-teal-900 rounded-md mt-2  p-1' />
                        <p>{errors.travelType?.message}</p>
                    </div>

                    <div className="mb-6 flex flex-col">
                        <label htmlFor="text" className='text-lg font-semibold text-white'>Tips:</label>
                        <textarea {...register("tips")} id="tips" name="tips" rows={3} className='block w-full px-3 py-2 border border-teal-900 rounded-md mt-2  p-1' />
                    </div>

                    <div className="mb-6 flex flex-col">
                        <label htmlFor="text" className='text-lg font-semibold text-white'>Other information:</label>
                        <textarea {...register("otherInformation")} id="otherInformation" name="otherInformation" rows={7} className='block w-full px-3 py-2 border border-teal-900 rounded-md mt-2  p-1' />
                    </div>
                    {/* 
                <div className="mb-6 flex flex-col">
                    <label htmlFor="photos" className='text-lg font-semibold text-white'>Import Photos</label>
                    <input type="file" className="block file-input file-input-bordered file-input-success w-full max-w-xs" />
                </div>
                */}
                    {/* INICIO DIAS */}
                    <div>
                        <label htmlFor="text" className='text-lg font-semibold text-white'>JURNEY DETAILS:</label>
                        {days.map((day, index) => (
                            <div key={index} className='text-white flex flex-col'>
                                <h2 className='text-md font-semibold text-white border border-white p-2 mt-4 mb-2'> New Jurney {index + 1}</h2>
                                <label htmlFor={`day-${index}`}>Day:</label>
                                <input
                                    type="text"
                                    name="day"
                                    id={`day-${index}`}
                                    value={day.day}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className='border border-teal-900  p-1 rounded-md text-black'
                                />

                                <label htmlFor={`arriveTo-${index}`}>Arrive to:</label>
                                <input
                                    type="text"
                                    name="arriveTo"
                                    id={`arriveTo-${index}`}
                                    value={day.arriveTo}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className='border border-teal-900  p-1 rounded-md text-black'

                                />

                                <label htmlFor={`hotel-${index}`}>Hotel:</label>
                                <input
                                    type="text"
                                    name="hotel"
                                    id={`hotel-${index}`}
                                    value={day.hotel}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className='border border-teal-900  p-1 rounded-md text-black'

                                />

                                <label htmlFor={`whatToVisit-${index}`}>What to visit:</label>
                                <input
                                    type="text"
                                    name="whatToVisit"
                                    id={`whatToVisit-${index}`}
                                    value={day.whatToVisit}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className='border border-teal-900  p-1 rounded-md text-black'

                                />

                                {<button type="button" onClick={() => handleRemoveDay(index)}>Remove Day</button>}
                            </div>
                        ))}
                        <button type="button" onClick={handleAddDay} className='text-white mt-2'>+ Add Day</button>
                    </div>
                    {/* FIN DIAS */}
                    <div className='flex justify-end'>
                        <Button1 text="Submit" />
                    </div>
                </form>
            </div>

            {/* A CONTINUACIÓ EL TEXT COMPLET */}

            <div className="bg-white flex flex-col items-stretch">
                <div className="self-center w-full max-w-[1182px] mt-6 max-md:max-w-full max-md:mt-4">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[67%] max-md:w-full max-md:ml-0">
                            <div className="flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-7">
                                <div>
                                    <h2 id="country" className="text-black text-7xl font-extrabold leading-[81.6px] mt-2 max-md:text-4xl cursor-pointer" onClick={toggleItinerary}>
                                        {country.toUpperCase()}</h2>
                                    <h3 className="text-black text-xl mt-2 leading-7 w-full cursor-pointer" onClick={toggleItinerary}>
                                        ITINERARIO (+)</h3>
                                    <p className="text-gray-400 text-sm cursor-pointer" onClick={toggleItinerary}>
                                        Haz click para desplegar el itinerario</p>
                                    {showItinerary && (
                                        <div className="itineraryDetail">
                                            {days.map((day, index) => (
                                                <DayItinerary
                                                    key={index}
                                                    day={day.day}
                                                    place={day.arriveTo}
                                                    hotel={day.hotel}
                                                    explore={day.whatToVisit}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="text-slate-900 text-base leading-7 self-stretch mt-10 max-md:max-w-full">
                                    <p>{introductoryText}</p>
                                </div>
                                <Carousel
                                    imageSrc1="/img/cocora.webp"
                                    imageSrc2="/img/guatape.jpeg"
                                    imageSrc3="/img/salento.webp"
                                    imageSrc4="/img/tayrona.webp"
                                />
                                <div>
                                    <h2 className="text-teal-900 text-3xl leading-8 capitalize self-stretch mt-7 max-md:max-w-full">About my trip:</h2>
                                    <ul className="text-black text-base leading-7 self-stretch mt-6 max-md:max-w-full">
                                        <li className='flex flex-row'>
                                            <h5 className='font-bold mx-3'>Duration:</h5> {duration} days
                                        </li>
                                        <li className='flex flex-row'>
                                            <h5 className='font-bold mx-3'>Month:</h5> {month}
                                        </li>
                                        <li className='flex flex-row'>
                                            <h5 className='font-bold mx-3'>Travel Type:</h5>{travelType}
                                        </li>
                                        <li className='flex flex-row'>
                                            <h5 className='font-bold mx-3'>Budget per person</h5> {budget}{currency}
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-teal-900 text-3xl leading-8 capitalize self-stretch mt-16 max-md:max-w-full max-md:mt-10">
                                    Tips & Suggestion
                                </div>
                                <div className="text-slate-900 text-base leading-7 mt-2 max-md:max-w-full max-md:mt-8">
                                    <p>{tips}</p>
                                </div>
                                <div className="text-teal-900 text-3xl leading-8 capitalize whitespace-nowrap mt-16 self-start max-md:mt-10">
                                    Other information:
                                </div>
                                <div className="text-slate-900 text-base leading-7 mt-2 max-md:max-w-full max-md:mt-8">
                                    <p>{otherInformation}</p>
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
        </>

    );
};

export default TravelForm;




// PRESENTACIO. FUNCIONA PERO TE 2 FALLOS DE TYPESCRIPT, ES VISUALITZA AMB HOOK-FORM
// import React, { useState, useEffect } from 'react';
// import Button1 from './Button1';
// import { useForm } from 'react-hook-form'
// import DayItinerary from "../components/DayItinerary.tsx";
// import AddCivitatis from "../components/AddCivitatis.tsx"
// import Carousel from "../components/Carousel.tsx";

// interface Day {
//     day: string;
//     arriveTo: string;
//     hotel: string;
//     whatToVisit: string;
// }

// const TravelForm: React.FC = () => {
//     const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
//         defaultValues: {
//             country: "",
//             duration: "",
//             month: "",
//             travelType: "",
//             budget: "",
//             currency: "",
//             introductoryText: "",
//             tips: "",
//             otherInformation: ""
//         }
//     });

//     const country = watch("country")
//     const duration = watch("duration")
//     const month = watch("month")
//     const travelType = watch("travelType")
//     const budget = watch("budget")
//     const currency = watch("currency")
//     const introductoryText = watch("introductoryText")
//     const tips = watch("tips")
//     const otherInformation = watch("otherInformation")



//     const [showItinerary, setShowItinerary] = useState(false);

//     const toggleItinerary = () => {
//         setShowItinerary(!showItinerary);
//     };

//     const [countries, setCountries] = useState<string[]>([]);

//     useEffect(() => {
//         //Para la lista de todos los paises del mundo llamando a api
//         const fetchCountries = async () => {
//             try {
//                 const response = await fetch('https://restcountries.com/v3.1/all');
//                 const data = await response.json();
//                 const countryNames = data.map((country: any) => country.name.common);
//                 countryNames.sort((a: any, b: any) => a.localeCompare(b));
//                 setCountries(countryNames);
//             } catch (error) {
//                 console.error('Error fetching countries:', error);
//             }
//         };

//         fetchCountries();
//     }, []);

//     //Para el listado de tips y suggestions
//     // const [items, setItems] = useState<string[]>([]);
//     const [inputValue, setInputValue] = useState<string>('');
    

//     const addItemToList = () => {
//         if (inputValue.trim() !== '') {
//             setValue("tips", [...watch("tips"), inputValue.trim()]); // Actualiza el valor de "tips"
//             setInputValue('');
//         }
//     };

//     const removeItem = (index: number) => {
//         const updatedTips = [...tips];
//         updatedTips.splice(index, 1);
//         setValue("tips", updatedTips); // Actualiza el estado de "tips" usando setValue
//     };

//     // Para crear los Days

//     const [days, setDays] = useState<Day[]>([{ day: '', arriveTo: '', hotel: '', whatToVisit: '' }]);

//     const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = event.target;
//         const list = [...days];
//         list[index][name as keyof Day] = value; // Utilizar "as keyof Day" para asegurar el tipo
//         setDays(list);
//     };

//     const handleAddDay = () => {
//         setDays([...days, { day: '', arriveTo: '', hotel: '', whatToVisit: '' }]);
//     };

//     const handleRemoveDay = (index: number) => {
//         const list = [...days];
//         list.splice(index, 1);
//         setDays(list);
//     };

//     return (
//         <>
//             <div className="max-w-xl mx-auto bg-teal-900 p-8 shadow-2xl rounded-md mt-6">
//                 <div className='flex flex-row justify-center'>
//                     <h1 className="text-4xl font-semibold mb-6 text-white mt-2">ENTER YOUR ITINERARY</h1>
//                     <img loading="lazy"
//                         srcSet="/img/greenPlanet.png"
//                         style={{ width: '64px', height: '64px' }}
//                     />
//                 </div>
//                 <form onSubmit={handleSubmit((data) => {
//                     console.log(data)
//                 })}>
//                     <div className="mb-6 flex flex-col">
//                         <label htmlFor="country" className='text-lg font-semibold text-white'>Country:</label>
//                         <select {...register("country")} id="country" name="country" className='border border-teal-900  p-1 rounded-md'>
//                             <option value="">Select a country</option>
//                             {countries.map((country, index) => (
//                                 <option key={index} value={country}>
//                                     {country}
//                                 </option>
//                             ))}
//                         </select>
//                         <p>{errors.country?.message}</p>
//                     </div>
//                     <div className="mb-6 flex flex-col">
//                         <label htmlFor="duration" className='text-lg font-semibold text-white'>Duration:</label>
//                         <input {...register("duration")} type="number" id="duration" name="duration" placeholder="Total days" className='border border-teal-900  p-1 rounded-md' />
//                         <p>{errors.duration?.message}</p>
//                     </div>

//                     <div className="mb-6 flex flex-col">
//                         <label htmlFor="month" className='text-lg font-semibold text-white'>Month:</label>
//                         <select {...register("month")} id="month" name="month" className='border border-teal-900  p-1 rounded-md'>
//                             <option value="January">January</option>
//                             <option value="February">February</option>
//                             <option value="March">March</option>
//                             <option value="April">April</option>
//                             <option value="May">May</option>
//                             <option value="June">June</option>
//                             <option value="July">July</option>
//                             <option value="August">August</option>
//                             <option value="September">September</option>
//                             <option value="October">October</option>
//                             <option value="November">November</option>
//                             <option value="December">December</option>
//                         </select>
//                         <p>{errors.month?.message}</p>
//                     </div>

//                     <div className="mb-6 flex flex-col">
//                         <label htmlFor="travelType" className='text-lg font-semibold text-white'>Travel Type:</label>
//                         <select {...register("travelType")} id="travelType" name="travelType" className='border border-teal-900  p-1 rounded-md'>
//                             <option value="individual">Solo trip</option>
//                             <option value="couple">Couple</option>
//                             <option value="friends">Friends</option>
//                             <option value="family">Family</option>
//                             <option value="familyWithChildren">Family with Children</option>
//                         </select>
//                         <p>{errors.travelType?.message}</p>
//                     </div>

//                     <div className="mb-6">
//                         <label htmlFor="budget" className='text-lg font-semibold text-white'>Budget per person:</label>
//                         <input {...register("budget")} type="number" id="budget" name="budget" className='border border-teal-900  p-1 rounded-md' />
//                         <select {...register("currency")} id="currency" name="currency" className='ml-1 rounded-md'>
//                             <option value="euro">€</option>
//                             <option value="dolar">$</option>
//                         </select>
//                     </div>

//                     <div className="mb-6 flex flex-col">
//                         <label htmlFor="text" className='text-lg font-semibold text-white'>Introductory text:</label>
//                         <textarea {...register("introductoryText")} id="introductoryText" name="introductoryText" maxLength={500} rows={5} className='block w-full px-3 py-2 border border-teal-900 rounded-md mt-2  p-1' />
//                         <p>{errors.travelType?.message}</p>
//                     </div>

//                     <div className="mb-6 flex flex-col">
//                         <label htmlFor="text" className='text-lg font-semibold text-white'>Tips & Suggestion</label>
//                         <ul>
//                             {watch("tips").map((item, index) => (
//                                 <li key={index} className='text-white'>
//                                     - {item}{' '}
//                                     <button className='btn btn-circle border-black btn-xs' type="button" onClick={() => removeItem(index)}>
//                                         x
//                                     </button>
//                                 </li>
//                             ))}
//                         </ul>
//                         <input
//                             type="text"
//                             value={inputValue}
//                             onChange={(e) => setInputValue(e.target.value)}
//                             placeholder="Enter item"
//                             className='border border-teal-900  p-1 rounded-md'
//                         />
//                         <button type="button" onClick={addItemToList} className=' text-white'>
//                             Add Item
//                         </button>
//                     </div>

//                     <div className="mb-6 flex flex-col">
//                         <label htmlFor="text" className='text-lg font-semibold text-white'>Other information:</label>
//                         <textarea {...register("otherInformation")} id="otherInformation" name="otherInformation" rows={7} className='block w-full px-3 py-2 border border-teal-900 rounded-md mt-2  p-1' />
//                     </div>
//                     {/* 
//                 <div className="mb-6 flex flex-col">
//                     <label htmlFor="photos" className='text-lg font-semibold text-white'>Import Photos</label>
//                     <input type="file" className="block file-input file-input-bordered file-input-success w-full max-w-xs" />
//                 </div>
//                 */}
//                     {/* INICIO DIAS */}
//                     <div>
//                         <label htmlFor="text" className='text-lg font-semibold text-white'>JURNEY DETAILS:</label>
//                         {days.map((day, index) => (
//                             <div key={index} className='text-white flex flex-col'>
//                                 <h2 className='text-md font-semibold text-white border border-white p-2 mt-4 mb-2'> New Jurney {index + 1}</h2>
//                                 <label htmlFor={`day-${index}`}>Day:</label>
//                                 <input
//                                     type="text"
//                                     name="day"
//                                     id={`day-${index}`}
//                                     value={day.day}
//                                     onChange={(e) => handleInputChange(index, e)}
//                                     className='border border-teal-900  p-1 rounded-md text-black'
//                                 />

//                                 <label htmlFor={`arriveTo-${index}`}>Arrive to:</label>
//                                 <input
//                                     type="text"
//                                     name="arriveTo"
//                                     id={`arriveTo-${index}`}
//                                     value={day.arriveTo}
//                                     onChange={(e) => handleInputChange(index, e)}
//                                     className='border border-teal-900  p-1 rounded-md text-black'

//                                 />

//                                 <label htmlFor={`hotel-${index}`}>Hotel:</label>
//                                 <input
//                                     type="text"
//                                     name="hotel"
//                                     id={`hotel-${index}`}
//                                     value={day.hotel}
//                                     onChange={(e) => handleInputChange(index, e)}
//                                     className='border border-teal-900  p-1 rounded-md text-black'

//                                 />

//                                 <label htmlFor={`whatToVisit-${index}`}>What to visit:</label>
//                                 <input
//                                     type="text"
//                                     name="whatToVisit"
//                                     id={`whatToVisit-${index}`}
//                                     value={day.whatToVisit}
//                                     onChange={(e) => handleInputChange(index, e)}
//                                     className='border border-teal-900  p-1 rounded-md text-black'

//                                 />

//                                 {<button type="button" onClick={() => handleRemoveDay(index)}>Remove Day</button>}
//                             </div>
//                         ))}
//                         <button type="button" onClick={handleAddDay} className='text-white mt-2'>+ Add Day</button>
//                     </div>
//                     {/* FIN DIAS */}
//                     <div className='flex justify-end'>
//                         <Button1 text="Submit" />
//                     </div>
//                 </form>
//             </div>

//             {/* A CONTINUACIÓ EL TEXT COMPLET */}

//             <div className="bg-white flex flex-col items-stretch">
//                 <div className="self-center w-full max-w-[1182px] mt-6 max-md:max-w-full max-md:mt-4">
//                     <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//                         <div className="flex flex-col items-stretch w-[67%] max-md:w-full max-md:ml-0">
//                             <div className="flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-7">
//                                 <div>
//                                     <h2 id="country" className="text-black text-7xl font-extrabold leading-[81.6px] mt-2 max-md:text-4xl cursor-pointer" onClick={toggleItinerary}>
//                                         {country.toUpperCase()}</h2>
//                                     <h3 className="text-black text-xl mt-2 leading-7 w-full cursor-pointer" onClick={toggleItinerary}>
//                                         ITINERARIO (+)</h3>
//                                     <p className="text-gray-400 text-sm cursor-pointer" onClick={toggleItinerary}>
//                                         Haz click para desplegar el itinerario</p>
//                                     {showItinerary && (
//                                         <div className="itineraryDetail">
//                                             {days.map((day, index) => (
//                                                 <DayItinerary
//                                                     key={index}
//                                                     day={day.day}
//                                                     place={day.arriveTo}
//                                                     hotel={day.hotel}
//                                                     explore={day.whatToVisit}
//                                                 />
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                                 <div className="text-slate-900 text-base leading-7 self-stretch mt-10 max-md:max-w-full">
//                                     <p>{introductoryText}</p>
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
//                                         <li className='flex flex-row'>
//                                             <h5 className='font-bold mx-3'>Duration:</h5> {duration} days
//                                         </li>
//                                         <li className='flex flex-row'>
//                                             <h5 className='font-bold mx-3'>Month:</h5> {month}
//                                         </li>
//                                         <li className='flex flex-row'>
//                                             <h5 className='font-bold mx-3'>Travel Type:</h5>{travelType}
//                                         </li>
//                                         <li className='flex flex-row'>
//                                             <h5 className='font-bold mx-3'>Budget per person</h5> {budget}{currency}
//                                         </li>
//                                     </ul>
//                                 </div>
//                                 <div className="text-teal-900 text-3xl leading-8 capitalize self-stretch mt-16 max-md:max-w-full max-md:mt-10">
//                                     Tips & Suggestion
//                                 </div>
//                                 <div className="text-black text-base leading-7 self-stretch mt-8 max-md:max-w-full">
//                                     <ul style={{ display: 'flex', flexDirection: 'column' }}>
//                                         {tips.map((item, index) => (
//                                             <li key={index} className='text-black'>
//                                                 - {item}{' '}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                                 <div className="text-teal-900 text-3xl leading-8 capitalize whitespace-nowrap mt-16 self-start max-md:mt-10">
//                                     Other information:
//                                 </div>
//                                 <div className="text-slate-900 text-base leading-7 mt-2 max-md:max-w-full max-md:mt-8">
//                                     <p>{otherInformation}</p>
//                                 </div>
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
//         </>

//     );
// };

// export default TravelForm;





//CODIGO CON EL FORM COMLPETO, PERO SIN HACER EL FORM INTERACTIVO CON LA VISUALIZACIÓN
// import React, { useState, useEffect } from 'react';
// import Button1 from './Button1';

// interface Day {
//     day: string;
//     arriveTo: string;
//     hotel: string;
//     whatToVisit: string;
// }

// const TravelForm: React.FC = () => {
//     const [countries, setCountries] = useState<string[]>([]);

//     useEffect(() => {
//         //Para la lista de todos los paises del mundo llamando a api
//         const fetchCountries = async () => {
//             try {
//                 const response = await fetch('https://restcountries.com/v3.1/all');
//                 const data = await response.json();
//                 const countryNames = data.map((country: any) => country.name.common);
//                 countryNames.sort((a: any, b: any) => a.localeCompare(b));
//                 setCountries(countryNames);
//             } catch (error) {
//                 console.error('Error fetching countries:', error);
//             }
//         };

//         fetchCountries();
//     }, []);

//     //Para el listado de tips y suggestions
//     const [items, setItems] = useState<string[]>([]);
//     const [inputValue, setInputValue] = useState<string>('');

//     const addItemToList = () => {
//         if (inputValue.trim() !== '') {
//             setItems([...items, inputValue.trim()]);
//             setInputValue('');
//         }
//     };

//     const removeItem = (index: number) => {
//         const updatedItems = [...items];
//         updatedItems.splice(index, 1);
//         setItems(updatedItems);
//     };

//     //Para crear los Days

//     const [days, setDays] = useState<Day[]>([{ day: '', arriveTo: '', hotel: '', whatToVisit: '' }]);

//     const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = event.target;
//         const list = [...days];
//         list[index][name as keyof Day] = value; // Utilizar "as keyof Day" para asegurar el tipo
//         setDays(list);
//     };

//     const handleAddDay = () => {
//         setDays([...days, { day: '', arriveTo: '', hotel: '', whatToVisit: '' }]);
//     };

//     const handleRemoveDay = (index: number) => {
//         const list = [...days];
//         list.splice(index, 1);
//         setDays(list);
//     };

//     return (
//         <div className="max-w-lg mx-auto bg-teal-900 p-8 shadow-2xl rounded-md mt-6">
//             {/* <h1 className="text-3xl font-semibold mb-6 text-white">ENTER YOUR ITINERARY</h1> */}
//             <img
//                 loading="lazy"
//                 srcSet="/img/greenPlanet3.png"
//                 className="mb-8"
//             />
//             <form>
//                 <div className="mb-6 flex flex-col">
//                     <label htmlFor="country" className='text-lg font-semibold text-white'>Country:</label>
//                     <select id="country" name="country" className='border border-teal-900  p-1 rounded-md'>
//                         <option value="">Select a country</option>
//                         {countries.map((country, index) => (
//                             <option key={index} value={country}>
//                                 {country}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="mb-6 flex flex-col">
//                     <label htmlFor="duration" className='text-lg font-semibold text-white'>Duration:</label>
//                     <input type="number" id="duration" name="duration" placeholder="Total days" className='border border-teal-900  p-1 rounded-md' />
//                 </div>
//                 <div className="mb-6 flex flex-col">
//                     <label htmlFor="month" className='text-lg font-semibold text-white'>Month:</label>
//                     <select id="month" name="month" className='border border-teal-900  p-1 rounded-md'>
//                         <option value="January">January</option>
//                         <option value="February">February</option>
//                         <option value="March">March</option>
//                         <option value="April">April</option>
//                         <option value="May">May</option>
//                         <option value="June">June</option>
//                         <option value="July">July</option>
//                         <option value="August">August</option>
//                         <option value="September">September</option>
//                         <option value="October">October</option>
//                         <option value="November">November</option>
//                         <option value="December">December</option>
//                     </select>
//                 </div>
//                 <div className="mb-6 flex flex-col">
//                     <label htmlFor="travelType" className='text-lg font-semibold text-white'>Travel Type:</label>
//                     <select id="travelType" name="travelType" className='border border-teal-900  p-1 rounded-md'>
//                         <option value="individual">Solo trip</option>
//                         <option value="couple">Couple</option>
//                         <option value="friends">Friends</option>
//                         <option value="family">Family</option>
//                         <option value="familyWithChildren">Family with Children</option>
//                     </select>
//                 </div>
//                 <div className="mb-6">
//                     <label htmlFor="budget" className='text-lg font-semibold text-white'>Budget per person:</label>
//                     <input type="number" id="budget" name="budget" className='border border-teal-900  p-1 rounded-md' />
//                     <select id="currency" name="currency" className='ml-1 rounded-md'>
//                         <option value="euro">€</option>
//                         <option value="dolar">$</option>
//                     </select>
//                 </div>
//                 <div className="mb-6 flex flex-col">
//                     <label htmlFor="text" className='text-lg font-semibold text-white'>Introductory text:</label>
//                     <textarea id="text" name="text" maxLength={500} rows={5} className='block w-full px-3 py-2 border border-teal-900 rounded-md mt-2  p-1' />
//                 </div>
//                 <div className="mb-6 flex flex-col">
//                     <label htmlFor="text" className='text-lg font-semibold text-white'>Tips & Suggestion</label>
//                     <ul className=' '>
//                         {items.map((item, index) => (
//                             <li key={index} className='text-white'>
//                                 - {item}{' '}
//                                 <button className='btn btn-circle border-black btn-xs' type="button" onClick={() => removeItem(index)}>
//                                     x
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                     <input
//                         type="text"
//                         value={inputValue}
//                         onChange={(e) => setInputValue(e.target.value)}
//                         placeholder="Enter item"
//                         className='border border-teal-900  p-1 rounded-md'
//                     />
//                     <button type="button" onClick={addItemToList} className=' text-white'>
//                         Add Item
//                     </button>
//                 </div>
//                 <div className="mb-6 flex flex-col">
//                     <label htmlFor="text" className='text-lg font-semibold text-white'>Other information:</label>
//                     <textarea id="text" name="text" rows={7} className='block w-full px-3 py-2 border border-teal-900 rounded-md mt-2  p-1' />
//                 </div>
//                 <div className="mb-6 flex flex-col">
//                     <label htmlFor="photos" className='text-lg font-semibold text-white'>Import Photos</label>
//                     <input type="file" className="block file-input file-input-bordered file-input-success w-full max-w-xs" />
//                 </div>
//                 <div>
//                 <label htmlFor="text" className='text-lg font-semibold text-white'>JURNEY DETAILS:</label>
//                     {days.map((day, index) => (
//                         <div key={index} className='text-white flex flex-col'>
//                             <h2 className='text-md font-semibold text-white border border-white p-2 mt-4 mb-2'> New Jurney {index + 1}</h2>
//                             <label htmlFor={`day-${index}`}>Day:</label>
//                             <input
//                                 type="text"
//                                 name="day"
//                                 id={`day-${index}`}
//                                 value={day.day}
//                                 onChange={(e) => handleInputChange(index, e)}
//                                 className='border border-teal-900  p-1 rounded-md text-black'
//                             />

//                             <label htmlFor={`arriveTo-${index}`}>Arrive to:</label>
//                             <input
//                                 type="text"
//                                 name="arriveTo"
//                                 id={`arriveTo-${index}`}
//                                 value={day.arriveTo}
//                                 onChange={(e) => handleInputChange(index, e)}
//                                 className='border border-teal-900  p-1 rounded-md text-black'

//                             />

//                             <label htmlFor={`hotel-${index}`}>Hotel:</label>
//                             <input
//                                 type="text"
//                                 name="hotel"
//                                 id={`hotel-${index}`}
//                                 value={day.hotel}
//                                 onChange={(e) => handleInputChange(index, e)}
//                                 className='border border-teal-900  p-1 rounded-md text-black'

//                             />

//                             <label htmlFor={`whatToVisit-${index}`}>What to visit:</label>
//                             <input
//                                 type="text"
//                                 name="whatToVisit"
//                                 id={`whatToVisit-${index}`}
//                                 value={day.whatToVisit}
//                                 onChange={(e) => handleInputChange(index, e)}
//                                 className='border border-teal-900  p-1 rounded-md text-black'

//                             />

//                             {<button type="button" onClick={() => handleRemoveDay(index)}>Remove Day</button>}
//                         </div>
//                     ))}
//                     <button type="button" onClick={handleAddDay} className='text-white mt-2'>+ Add Day</button>
//                 </div>
//                 <div className='flex justify-end'>
//                     <Button1 text="Submit" />
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default TravelForm;