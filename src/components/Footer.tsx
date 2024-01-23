function Footer() {

    return (
        <span className="bg-teal-900 self-stretch flex w-full justify-between gap-5 mt-10 px-16 py-12 items-start max-md:max-w-full max-md:flex-wrap max-md:my-5 max-md:px-5">
        <div className="text-white text-4xl leading-10 grow shrink basis-auto">
          TravelTogether
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0d0ba440f7045b39baa3e707ad166997b3c4055e24d315a42e97e3a054a662c?"
          className="object-contain object-center max-w-full"
        />
      </span>
    )
}

export default Footer