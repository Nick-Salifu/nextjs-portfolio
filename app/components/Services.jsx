import { assets, serviceData } from "@/assets/assets"
import Image from "next/image"

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="mb-2 text-lg text-center font-ovo">What I Offer</h4>
        <h2 className="text-5xl text-center font-ovo">My services</h2>
        
        <p className="max-w-2xl mx-auto mt-5 mb-12 text-center font-ovo">I am a frontend developer from Abuja, Nigeria with 10years of experience with multiple companies like apple, microsoft and Tesla</p>
        
        <div className="grid grid-cols-1 gap-6 my-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {serviceData.map(({icon, title, description, link}, index) => (
                <div key={index} className="px-8 py-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:shadow-black hover:bg-light hover:-translate-y-1">
                    <Image src={icon} alt="" className="w-10" />
                    <h3 className="my-4 text-lg text-gray-700">{title}</h3>
                    <p className="text-sm leading-5 text-gray-600">
                        {description}
                    </p>
                    <a href={link} className="flex items-center gap-2 mt-5 text-sm">
                        Read more <Image src={assets.right_arrow} alt="" className="w-4" />
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services