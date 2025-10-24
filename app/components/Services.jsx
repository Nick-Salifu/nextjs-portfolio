import { assets, serviceData } from "@/assets/assets"
import Image from "next/image"
import {motion} from "motion/react"

const Services = () => {
  return (
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{duration: 1}}  
        id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            
        <motion.h4 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{duration: 0.5, delay: 0.3}}
            className="mb-2 text-lg text-center font-ovo">
              What I Offer
        </motion.h4>
        
        <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{duration: 0.5, delay: 0.5}}
            className="text-5xl text-center font-ovo">
              My services
        </motion.h2>
        
        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{duration: 0.5, delay: 0.7}}
            className="max-w-2xl mx-auto mt-5 mb-12 text-center font-ovo">
                I am a frontend developer from Abuja, Nigeria with 10years of experience with multiple companies like apple, microsoft and Tesla
        </motion.p>
        
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{duration: 0.6, delay: 0.9}}
            className="grid grid-cols-1 gap-6 my-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {serviceData.map(({icon, title, description, link}, index) => (
                <motion.div
                    whileHover={{scale: 1.05}}
                    key={index} className="px-8 py-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:shadow-black hover:bg-light hover:-translate-y-1 dark:hover:bg-dark dark:hover:shadow-[4px_4px_0_#fff]">
                    <Image src={icon} alt="" className="w-10" />
                    <h3 className="my-4 text-lg text-gray-700 dark:text-white">{title}</h3>
                    <p className="text-sm leading-5 text-gray-600 dark:text-white/80">
                        {description}
                    </p>
                    <a href={link} className="flex items-center gap-2 mt-5 text-sm">
                        Read more <Image src={assets.right_arrow} alt="" className="w-4" />
                    </a>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services