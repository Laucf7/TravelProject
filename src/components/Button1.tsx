interface ButtonProps {
    text: string;
}

const CardHome: React.FC<ButtonProps> = ({ text }) => {


    return (
        <button
            type="submit"
            className="text-white text-base leading-7 whitespace-nowrap items-stretch bg-green-400 justify-center mt-9 px-5 py-1.5 rounded-lg self-start"
        >
            {text}
        </button>

    )
}

export default CardHome;