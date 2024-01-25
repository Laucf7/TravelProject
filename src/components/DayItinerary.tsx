
interface DayProps {
    day: string;
    date: string;
    place: string;
    hotel: string;
    explore: string;
}

const DayItinerary: React.FC<DayProps> = ({ day, date, place, hotel, explore, }) => {

    return (

        <div className="self-center flex w-full max-w-[925px] items-stretch gap-1.5 mt-6 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
            <div className="flex basis-[0%] flex-col items-center max-md:hidden">
                <div className="self-stretch flex shrink-0 h-[37px] flex-col rounded-[50%]" />
                <div className="bg-teal-900 w-0.5 shrink-0 h-[171px] mt-6" />
            </div>
            <div className="flex grow basis-[0%] flex-col mt-2 px-5 self-start max-md:max-w-full">
                <div className="flex text-neutral-700 text-2xl font-semibold self-stretch max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/17b1d7fe2a6de4134a471e05cd07ebe11958550eb2b676d40d544298fa5e0780?"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                />{day}
                </div>
                <div className="text-neutral-700 text-lg whitespace-nowrap mt-3.5 self-start">
                    {date}
                </div>
                <div className="text-neutral-700 text-base self-stretch mt-4 max-md:max-w-full">
                    <ul>
                        <li>
                            Arrive to:{place}
                        </li>
                        <li>
                            Hotel: {hotel}
                        </li>
                        <li>
                            Explore: {explore}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DayItinerary;