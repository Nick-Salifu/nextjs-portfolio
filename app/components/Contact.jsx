import Image from "next/image"

const Contact = () => {
  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]">
        <h4 className="text-center text-lg mb-2">Connect with me</h4>
        <h2 className="text-center text-5xl">Get in touch</h2>
        
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12">I'd love to hear from you, if you have any questions, comments, or feedback please use the form below</p>
        
        <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
                <input type="text" placeholder="Enter your name" required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"/>
                <input type="email" placeholder="Enter your email" required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" />
            </div>
            <textarea rows="6" placeholder="Enter your message" required className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6">
            </textarea>
            
            <button type="submit">
              Submit now  <Image src={} alt="white arrow" className="w-4" />
            </button>
        </form>
    </div>
  )
}

export default Contact