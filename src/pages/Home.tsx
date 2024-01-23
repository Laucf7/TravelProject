import Navbar from "../components/Navbar.tsx"
import Footer from "../components/Footer.tsx"
import CardHome from "../components/CardHome.tsx"


export default function Home() {
    return (
        <>
           <span className="bg-white flex flex-col">
        <div className="flex-col overflow-hidden self-stretch relative flex min-h-[720px] w-full max-md:max-w-full max-md:px-5">
          <img
            loading="lazy"
            srcSet="/img/zanzibar.jpg"
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <Navbar isTextWhite={true} />
          <div className="relative text-white text-center text-5xl leading-[57.6px] self-center mt-36 max-md:max-w-full max-md:text-4xl max-md:mt-10">
            Explore the world with a smile
          </div>
          <div className="relative text-white text-center text-base leading-7 self-center mt-5">
            Travel easy joining our community of travellers
          </div>
          <span className="relative bg-green-400 self-center flex items-center justify-between gap-5 mt-28 mb-40 px-3 py-3.5 rounded-xl max-md:my-10">
            <div className="text-white text-base leading-7 my-auto">
              <button>DISCOVER WITH US</button>
            </div>
            
          </span>
        </div>
        <div className="self-center w-full max-w-[1185px] mt-24 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="/img/captura2.png"
                className="aspect-[1.29] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-8"
              />
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <span className="flex flex-col items-stretch my-auto px-5 max-md:max-w-full max-md:mt-10">
                <div className="text-zinc-700 text-3xl font-bold leading-8 max-md:max-w-full">
                  We share our travel itineraries
                </div>
                <div className="text-zinc-700 text-base leading-7 mt-6 max-md:max-w-full">
                  Join us on this exciting journey of discovery. Your ideal trip
                  begins with a community that understands the thrill of
                  exploration. Start planning your next adventure with confidence,
                  guided by the firsthand experiences of those who have paved the
                  way before you. <br />
                </div>
                <div className="mt-6 max-md:max-w-full max-md:pr-5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
                      <span className="flex flex-col items-stretch max-md:mt-10">
                        <div className="text-teal-900 text-3xl font-bold leading-8">
                          32+
                        </div>
                        <div className="text-zinc-700 text-base leading-7 mt-3.5">
                          Countries
                        </div>
                        <div className="text-teal-900 text-3xl font-bold leading-8 whitespace-nowrap mt-9">
                          +12 years
                        </div>
                        <div className="text-zinc-700 text-base leading-7 whitespace-nowrap mt-3.5">
                          fellow travelers
                        </div>
                      </span>
                    </div>
                    <div className="flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0">
                      <span className="flex grow flex-col items-stretch max-md:mt-10">
                        <div className="text-teal-900 text-3xl font-bold leading-8">
                          315+
                        </div>
                        <div className="text-zinc-700 text-base leading-7 mt-2.5">
                          Cities/Towns
                        </div>
                        <div className="text-teal-900 text-3xl font-bold leading-8 mt-8">
                          25K+
                        </div>
                        <div className="text-zinc-700 text-base leading-7 whitespace-nowrap mt-3.5">
                          visits on our posts
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="text-teal-900 text-base font-bold leading-7 capitalize self-center whitespace-nowrap mt-28 max-md:mt-10">
          top destination
        </div>
        <div className="text-zinc-700 text-3xl font-bold leading-8 self-center whitespace-nowrap mt-2.5">
          Discover the world
        </div>
        <div className="self-center w-full max-w-[1180px] mt-14 px-5 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            
            <CardHome 
             title="Top Destinations"
             imageSrc="/img/aaa.jpeg" />
            
            <CardHome 
             title="Asia"
             imageSrc="/img/bbb.jpeg" />
            
            <CardHome 
             title="Europe"
             imageSrc="/img/ccc.jpeg" />
          </div>
        </div>
        <div className="self-center w-full max-w-[1180px] mt-8 px-5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            
            <CardHome 
             title="Oceania"
             imageSrc="/img/ddd.jpeg" />
            
            <CardHome 
             title="America"
             imageSrc="/img/eee.jpeg" />
            
            <CardHome 
             title="Africa"
             imageSrc="/img/fff.webp" />
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="/img/mapamundi.jpeg"
          className="aspect-[1.33] object-contain object-center w-[600px] overflow-hidden self-center max-w-full mt-16 max-md:mt-10"
        />
        </span>
        <Footer />
    </>
    )
}