import { assets } from "@/assets/assets"
import Image from "next/image"

const Footer = ({darkMode}) => {
  return (
    <div className="mt-20">
        <div className="text-center">
            <Image src={darkMode ? assets.logo_dark : assets.logo} alt="" className="w-36 mx-auto mb-2" />
            
            <div className="w-max flex items-center gap-2 mx-auto">
                <Image src={darkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
                <p>nicksalifu@gmail.com</p>
            </div>
        </div>
        
        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
            <p>&copy; 2025 Nick Salifu. All rights reserved.</p>
            <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
                <li><a target="_blank" href="https://github.com/Nick-Salifu">GitHub</a></li>
                <li><a target="_blank" href="https://linkedin.com/in/nicodemus-salifu">LinkedIn</a></li>
                <li><a target="_blank" href="https://X.com/Captain_swenky">Twitter</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer