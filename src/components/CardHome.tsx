import { Link } from "react-router-dom";

interface CardHomeProps {
  imageSrc: string;
  title: string|React.ReactNode;
}

const CardHome: React.FC<CardHomeProps> = ({ imageSrc, title }) => {

  return (

    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
      <Link to="/destination">
      <span className="shadow-lg bg-white flex w-full grow flex-col items-stretch mx-auto pt-2.5 pb-6 px-2.5 rounded-xl border-2 border-solid border-slate-200 max-md:mt-5">
        <img
          loading="lazy"
          srcSet={imageSrc}
          className="aspect-[1.59] object-contain object-center w-full overflow-hidden"
        />
        <div className="text-zinc-700 text-xl font-bold leading-9 mt-7">
          {title}
        </div>
        <span className="flex w-full justify-between gap-5 mt-8 px-0.5 items-start">
          <div className="text-teal-900 text-base font-bold leading-7 mt-1.5">
            *****
          </div>
          <span className="self-stretch flex items-stretch justify-between gap-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/75652d288f6ef7af85fb93e291fb87fd26435c9c4f69eef3701bc3dcbfceb459?"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-zinc-700 text-sm leading-6 self-center grow whitespace-nowrap my-auto">
              7 days for trips
            </div>
          </span>
        </span>
      </span>
      </Link>
    </div>

  )
}

export default CardHome;