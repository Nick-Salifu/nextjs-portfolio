"use client"

import { assets } from "@/assets/assets"
import Image from "next/image"
import { useState } from "react"
import  {motion} from "motion/react"

const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d5bb83e8-f4b2-4b58-a9bd-12a61f744b6c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration: 1}}
      id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center dark:bg-none">
      
        <motion.h4 
          initial={{y: -20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.3}}
          className="text-center text-lg mb-2 font-ovo">
            Connect with me
        </motion.h4>
        
        <motion.h2
          initial={{y: -20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.5}} 
          className="text-center text-5xl font-ovo">
            Get in touch
        </motion.h2>
        
        <motion.p 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.7}}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">I’d love to hear from you! Whether you’re looking to hire me for a project, collaborate on something creative, or simply share feedback or ask a question, feel free to reach out. I’m always open to new opportunities and conversations. Just drop me a message, and I’ll get back to you as soon as I can.</motion.p>
        
        <motion.form 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.9}}
          onSubmit={onSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
              
                <motion.input
                  initial={{x: -50, opacity: 0}}
                  whileInView={{x: 0, opacity: 1}}
                  transition={{duration: 0.6, delay: 1.1}} 
                  type="text" placeholder="Enter your name" required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-dark/30 dark:border-white/90" name="name"/>
                
                <motion.input 
                  initial={{x: 50, opacity: 0}}
                  whileInView={{x: 0, opacity: 1}}
                  transition={{duration: 0.6, delay: 1.2}}
                  type="email" placeholder="Enter your email" required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-dark/30 dark:border-white/90" name="email"/>
            </div>
            <motion.textarea 
              initial={{y: 100, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 0.6, delay: 1.3}}
              rows="6" placeholder="Enter your message" required className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-dark/30 dark:border-white/90" name="message">
            </motion.textarea>
            
            <motion.button
              whileHover={{scale: 1.05}} 
              transition={{duration: 0.3}}
              type="submit" className="px-8 py-3 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-dark">
              Submit now  <Image src={assets.right_arrow_white} alt="white arrow" className="w-4" />
            </motion.button>

            <p className="mt-4">{result}</p>
        </motion.form>
    </motion.div>
  )
}

export default Contact