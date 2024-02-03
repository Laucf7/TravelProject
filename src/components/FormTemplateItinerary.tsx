import React, { useState, useEffect } from 'react';
import Button1 from './Button1';

interface Day {
    day: string;
    arriveTo: string;
    hotel: string;
    whatToVisit: string;
}

const TravelForm: React.FC = () => {
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

    //Para el listado de tips y curiosidades
    const [items, setItems] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const addItemToList = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue.trim()]);
            setInputValue('');
        }
    };

    const removeItem = (index: number) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    //Para crear los Days

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
        <div className="max-w-lg mx-auto bg-teal-900 p-8 shadow-2xl rounded-md">
            {/* <h1 className="text-3xl font-semibold mb-6 text-white">ENTER YOUR ITINERARY</h1> */}
            <img
                loading="lazy"
                srcSet="/img/greenPlanet3.png"
                className="mb-8"
            />
            <form>
                <div className="mb-6 flex flex-col">
                    <label htmlFor="country" className='text-lg font-semibold text-white'>Country:</label>
                    <select id="country" name="country" className='border border-teal-900 ml-2 p-1 rounded-md'>
                        <option value="">Select a country</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-6 flex flex-col">
                    <label htmlFor="duration" className='text-lg font-semibold text-white'>Duration:</label>
                    <input type="number" id="duration" name="duration" placeholder="Total days" className='border border-teal-900 ml-2 p-1 rounded-md' />
                </div>
                <div className="mb-6 flex flex-col">
                    <label htmlFor="month" className='text-lg font-semibold text-white'>Month:</label>
                    <select id="month" name="month" className='border border-teal-900 ml-2 p-1 rounded-md'>
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
                </div>
                <div className="mb-6 flex flex-col">
                    <label htmlFor="travelType" className='text-lg font-semibold text-white'>Travel Type:</label>
                    <select id="travelType" name="travelType" className='border border-teal-900 ml-2 p-1 rounded-md'>
                        <option value="individual">Solo trip</option>
                        <option value="couple">Couple</option>
                        <option value="friends">Friends</option>
                        <option value="family">Family</option>
                        <option value="familyWithChildren">Family with Children</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="budget" className='text-lg font-semibold text-white'>Budget per person:</label>
                    <input type="number" id="budget" name="budget" className='border border-teal-900 ml-2 p-1 rounded-md' />
                    <select id="currency" name="currency" className='ml-1 rounded-md'>
                        <option value="euro">€</option>
                        <option value="dolar">$</option>
                    </select>
                </div>
                <div className="mb-6 flex flex-col">
                    <label htmlFor="text" className='text-lg font-semibold text-white'>Introductory text:</label>
                    <textarea id="text" name="text" maxLength={500} rows={5} className='block w-full px-3 py-2 border border-teal-900 rounded-md mt-2 ml-2 p-1' />
                </div>
                <div className="mb-6 flex flex-col">
                    <label htmlFor="text" className='text-lg font-semibold text-white'>Tips & Curiosities</label>
                    <ul className=' ml-2'>
                        {items.map((item, index) => (
                            <li key={index} className='text-white'>
                                - {item}{' '}
                                <button className='btn btn-circle border-black btn-xs' type="button" onClick={() => removeItem(index)}>
                                    x
                                </button>
                            </li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter item"
                        className='border border-teal-900 ml-2 p-1 rounded-md'
                    />
                    <button type="button" onClick={addItemToList} className='ml-2 text-white'>
                        Add Item
                    </button>
                </div>
                <div className="mb-6 flex flex-col">
                    <label htmlFor="text" className='text-lg font-semibold text-white'>Other information:</label>
                    <textarea id="text" name="text" rows={7} className='block w-full px-3 py-2 border border-teal-900 rounded-md mt-2 ml-2 p-1' />
                </div>
                <div className="mb-6 flex flex-col">
                    <label htmlFor="photos" className='text-lg font-semibold text-white'>Import Photos</label>
                    <input type="file" className="block file-input file-input-bordered file-input-success w-full max-w-xs" />
                </div>
                <div className=''>
                    {days.map((day, index) => (
                        <div key={index} className='text-white flex flex-col'>
                            <h2 className='text-lg font-semibold text-white'>New Jurney {index + 1}</h2>
                            <label htmlFor={`day-${index}`}>Day:</label>
                            <input
                                type="text"
                                name="day"
                                id={`day-${index}`}
                                value={day.day}
                                onChange={(e) => handleInputChange(index, e)}
                                className='text-black'
                            />

                            <label htmlFor={`arriveTo-${index}`}>Arrive to:</label>
                            <input
                                type="text"
                                name="arriveTo"
                                id={`arriveTo-${index}`}
                                value={day.arriveTo}
                                onChange={(e) => handleInputChange(index, e)}
                                className='text-black'
                            />

                            <label htmlFor={`hotel-${index}`}>Hotel:</label>
                            <input
                                type="text"
                                name="hotel"
                                id={`hotel-${index}`}
                                value={day.hotel}
                                onChange={(e) => handleInputChange(index, e)}
                                className='text-black'
                            />

                            <label htmlFor={`whatToVisit-${index}`}>What to visit:</label>
                            <input
                                type="text"
                                name="whatToVisit"
                                id={`whatToVisit-${index}`}
                                value={day.whatToVisit}
                                onChange={(e) => handleInputChange(index, e)}
                                className='text-black'
                            />

                            {<button type="button" onClick={() => handleRemoveDay(index)}>Remove Day</button>}
                        </div>
                    ))}

                    <button type="button" onClick={handleAddDay} className='text-white mt-2'>+ Add Day</button>
                </div>
                <div className='flex justify-end'>
                    <Button1 text="Submit" />
                </div>
            </form>
        </div>
    );
};

export default TravelForm;