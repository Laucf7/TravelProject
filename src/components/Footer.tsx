import { Link } from "react-router-dom"

function Footer() {

  return (
    <div className="bg-teal-900 self-stretch flex w-full justify-between gap-5 mt-10 px-16 py-12 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-5 max-md:px-5">
      <div className="text-white text-4xl leading-10 grow shrink basis-auto">
        <Link to={'/'}>TravelTogether</Link>
      </div>
      <div className="text-white flex flex-row my-auto">
        <p className="mx-4">Aviso legal</p>
        <p className="mx-4">Política de privacidad</p>
        <p className="mx-4">Cookies</p>
      </div>
    </div>
  )
}

export default Footer