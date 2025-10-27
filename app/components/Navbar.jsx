"use client"

import { assets } from "@/assets/assets"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const Navbar = ({darkMode, setDarkMode}) => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])

  return (
    <div className="pb-12">
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
            <Image src={assets.header_bg_color} alt="background color" className="w-full" />
        </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-odd dark:shadow-white/20" : ""}`}>
            <a href="#top">
                <Image src={darkMode ? assets.nick_logo_dark : assets.nick_logo} alt="logo" className="cursor-pointer w-60 mr-14" />
            </a>
            
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                <li><a href="#top" className="font-ovo">Home</a></li>
                <li><a href="#about" className="font-ovo">About Me</a></li>
                <li><a href="#services" className="font-ovo">Services</a></li>
                <li><a href="#work" className="font-ovo">Work</a></li>
                <li><a href="#contact" className="font-ovo">Contact Me</a></li>
            </ul>
            
            <div className="flex items-center gap-4">         
                <button onClick={() => setDarkMode(prev => !prev)}>
                    <Image src={darkMode ? assets.sun_icon : assets.moon_icon} alt="dark mode toggle" className="w-6 cursor-pointer"/>
                </button>
                
                  <a href="#contact" className="hidden font-ovo md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50">Contact
                      <Image src={darkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="arrow icon" className="w-3" /></a>
                
                <button className="block ml-3 md:hidden" onClick={openMenu}>
                    <Image src={darkMode ? assets.menu_white : assets.menu_black} alt="menu" className="w-6"/>
                </button>
            </div>
            
            {/* ---Mobile Menu --- */}
            
            <ul ref={sideMenuRef} className="fixed top-0 bottom-0 z-50 flex flex-col w-64 h-screen gap-4 px-10 py-20 transition duration-500 md:hidden -right-64 bg-rose-50 dark:bg-dark dark:text-white">
                
                <div className="absolute right-6 top-6" onClick={closeMenu}>
                    <Image src={darkMode ? assets.close_white : assets.close_black} alt="close" className="w-5 cursor-pointer" />
                </div>
                
                <li><a href="#top" onClick={closeMenu}>Home</a></li>
                <li><a href="#about" onClick={closeMenu}>About Me</a></li>
                <li><a href="#services" onClick={closeMenu}>Services</a></li>
                <li><a href="#work" onClick={closeMenu}>Work</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact Me</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar