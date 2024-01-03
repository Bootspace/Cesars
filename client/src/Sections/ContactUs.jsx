import BreadCrumbs from "../Components/BreadCrumbs"
import { HiOutlinePhone } from "react-icons/hi2";
import { GoMail } from "react-icons/go";

const ContactUs = () => {
    const routes = [
        {
          name: 'Home',
          link: '/'
        }, 
        {
            name:'Contact Us',
            link: ''
        }
    ]
  return (
    <div className="px-20 py-16">
        <BreadCrumbs routes={routes} />
        <br />
        <section className="grid grid-cols-[0.5fr_1fr] gap-10">
            <div className="h-[32rem] shadow-lg">
              <section className="flex flex-col px-10 py-5 gap-5">
                <div className="flex items-center w-full gap-5 mt-5">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                    <HiOutlinePhone color="white" size={24} />
                  </div>
                  <h1 className="text-md tracking-wide">Call to Us</h1>
                </div>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +880161112222</p>
              </section>
              <hr className="border border-black/40 mx-10 my-5 "/>
              <section className="flex flex-col px-10 gap-5">
                <div className="flex items-center w-full gap-5 mt-5">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                    <GoMail color="white" size={24} />
                  </div>
                  <h1 className="text-md tracking-wide">Write to Us</h1>
                </div>
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <div className="flex gap-2">
                  <p>Email:</p>
                  <div>
                    <p>customer@exclusive.com</p>
                    <p>support@exclusive.com</p>
                  </div>
                </div>
                
              </section>
            </div>
            <div className="h-[32rem] shadow-lg">
              <form action="GET" className=" h-[32rem] grid grid-rows-[1fr_4fr_.2fr] gap-10 p-10">
                <div className="flex justify-between items-center gap-5">
                  <input type="text" placeholder="Your Name" className="bg-gray-200 placeholder-gray-500 border-transparent p-5" />
                  <input type="text" placeholder="Your Email" className="bg-gray-200 border-transparent p-5" />
                  <input type="text" placeholder="Your Phone" className="bg-gray-200 border-transparent p-5" />
                </div>
                <textarea placeholder="Your Message" className="resize-none bg-gray-200 border-transparent" />
                <div className="flex justify-end">
                  <button type="submit" className="py-6 flex items-center w-1/3 justify-center gap-x-2 text-sm font-semibold rounded-lg  bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Send Message</button>
                </div>
                
              </form>
            </div>
          </section>
    </div>
  )
}

export default ContactUs