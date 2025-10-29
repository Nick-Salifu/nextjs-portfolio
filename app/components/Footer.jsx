import { assets } from "@/assets/assets"
import Image from "next/image"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = ({darkMode}) => {
  return (
    <div className="mt-20">
        <div className="text-center">
            <Image src={darkMode ? assets.dark_logo : assets.nick_logo} alt="" className="w-60 mx-auto" />
            
            <div className="w-max flex items-center gap-2 mx-auto">
                <Image src={darkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
                <p>nicksalifu@gmail.com</p>
            </div>
        </div>
        
        <div className="w-full px-5 lg:px-8 xl:px-[8%] text-center sm:flex items-center justify-between border-t border-gray-400 mt-12 py-6">
            <p>&copy; 2025 Nick Salifu. All rights reserved.</p>
            <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
                <li><a target="_blank" href="https://github.com/Nick-Salifu" className="flex items-center gap-2">
                    <FaGithub size={20} /> GitHub</a>
                </li>
                <li><a target="_blank" href="https://linkedin.com/in/nicodemus-salifu" className="flex items-center gap-2">
                    <FaLinkedin size={20} /> LinkedIn</a>
                </li>
                <li><a target="_blank" href="https://X.com/Captain_swenky" className="flex items-center gap-2">
                    <FaXTwitter size={20} /> Twitter</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer