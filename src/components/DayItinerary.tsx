interface DayProps {
    day: string;
    place: string;
    hotel: string;
    explore: string;
}

const DayItinerary: React.FC<DayProps> = ({ day, place, hotel, explore, }) => {

    return (
        <div className="self-center flex w-full max-w-[925px] items-stretch gap-1.5 mt-6 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
            <div className="flex grow basis-[0%] flex-col mt-2 px-5 self-start max-md:max-w-full">
                <div className="flex text-neutral-700 text-2xl font-semibold self-stretch max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/17b1d7fe2a6de4134a471e05cd07ebe11958550eb2b676d40d544298fa5e0780?"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                />{day}
                </div>
                <div className="text-neutral-700 text-base self-stretch mt-4 max-md:max-w-full border-l-2 border-teal-900 ml-3 pl-3">
                    <ul>
                        <li>
                        <span className="font-bold">Arrive to:</span> {place}
                        </li>
                        <li>
                        <span className="font-bold">Hotel:</span> {hotel}
                        </li>
                        <li>
                        <span className="font-bold"> What to explore:</span> {explore}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DayItinerary;