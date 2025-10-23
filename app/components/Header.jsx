import { assets } from "@/assets/assets"
import Image from "next/image"

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-3">
        <div>
            <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
        </div>
        
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
            Hi, I am Salifu Nicodemus <Image src={assets.hand_icon} alt="" className="w-6" />
        </h3>
        
        <h1 className="text-3xl sm:text-6xl lg:text-[50px] font-ovo">
            frontend developer based in Abuja, Nigeria
        </h1>
        <p className="max-w-2xl mx-auto font-ovo">
            I am a frontend developer from Abuja, Nigeria with 5 years of experience in multiple companies like apple, tesla and google
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a 
                className="px-10 py-3 border border-white bg-black text-white flex items-center gap-2 rounded-full"
                href="#contact">
                  Contact me <Image src={assets.right_arrow_white} alt="" className="w-4" />
            </a>
            
            <a 
                href="/sample-resume.pdf" 
                download 
                className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">
                  My resume <Image src={assets.download_icon} alt="" className="w-4" />
            </a>
        </div>
    </div>
  )
}

export default Header