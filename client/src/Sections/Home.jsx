import TestSlide from "../Components/TestSlide";
import Card from "../Components/Card";
import Markers from "../Components/Markers";
import Box from "../Components/Box";


import { IoWatchOutline } from "react-icons/io5";
import { CiHeadphones, CiMobile2 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceGamepad } from "react-icons/tb";
import {  FaTruckFast } from "react-icons/fa6";
import { RiCustomerServiceLine } from "react-icons/ri";
import { BiCheckShield } from "react-icons/bi";
import CountDown from "../Components/CountDown";

const Home = () => {
    const days = 15 * 24 * 60 * 60 * 1000; 
    const now = new Date().getTime();

    const dateTimeAfterThreeDays = now + days;
    return (
     <div className="grid grid-rows-[.3fr_.2fr_.1fr_.1fr_.2fr_.3fr_.2fr_.1fr] min-w-[1100px] overflow-none">
       
        <div className="grid grid-cols-[.3fr_1fr] min-w-[1100px] pb-20">
          <section className="px-20 py-10 min-w-48 max-[375px]:pl-5 max-[375px]:mr-5">
            <ul className="flex flex-col gap-3">
              <li><a href="/" className="hover:underline decoration-solid">Woman&apos;s Fashion <span className="text-sm hidden hover:block">-&gt;</span></a></li>
              <li><a href="/" className="hover:underline decoration-solid">Men&apos;s Fashion</a></li>
              <li><a href="/" className="hover:underline decoration-solid">Electronics</a></li>
              <li><a href="/" className="hover:underline decoration-solid">Home & Lifestyle</a></li>
              <li><a href="/" className="hover:underline decoration-solid">Medicine</a></li>
              <li><a href="/" className="hover:underline decoration-solid">Sports & Outdoor</a></li>
              <li><a href="/" className="hover:underline decoration-solid">Baby&apos;s & Toys</a></li>
              <li><a href="/" className="hover:underline decoration-solid">Groceries & Pets</a></li>
              <li><a href="/" className="hover:underline decoration-solid">Health & Beauty</a></li>
            </ul>
          </section>
          <section className="border -ml-10 max-[375px]:-ml-5 border-y-0">
  
            <div data-hs-carousel='{
                "loadingClasses": "opacity-0",
                "isAutoPlay": true
              }' className="relative mx-10">
              <div className="hs-carousel relative overflow-hidden w-full min-h-[350px] bg-white rounded-lg top-5">
                <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                  <div className="hs-carousel-slide">
                    <div className="flex justify-center h-full bg-gray-100 p-6">
                      <span className="self-center text-4xl transition duration-700"><TestSlide content="Slide 1"/></span>
                    </div>
                  </div>
                  <div className="hs-carousel-slide">
                    <div className="flex justify-center h-full bg-gray-200 p-6">
                      <span className="self-center text-4xl transition duration-700"><TestSlide content="Slide 2"/></span>
                    </div>
                  </div>
                  <div className="hs-carousel-slide">
                    <div className="flex justify-center h-full bg-gray-300 p-6">
                      <span className="self-center text-4xl transition duration-700"><TestSlide content="Slide 3"/></span>
                    </div>
                  </div>
                </div>
              </div>
  
              <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1] top-5 rounded-lg">
                <span className="text-2xl " aria-hidden="true">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </span>
                <span className="sr-only">Previous</span>
              </button>
              <button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1] top-5 rounded-lg">
                <span className="sr-only">Next</span>
                <span className="text-2xl" aria-hidden="true">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </span>
              </button>
  
              <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                <span className="hs-carousel-active:bg-red-700 hs-carousel-active:border-white w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span className="hs-carousel-active:bg-red-700 hs-carousel-active:border-white w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span className="hs-carousel-active:bg-red-700 hs-carousel-active:border-white w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
              </div>
            </div>
  
          </section>
        </div>
    
        <section className="py-20 px-20 min-w-[1100px]">
          <Markers name="Today&apos;s"/>
          <br className="-mt-10"/>
          <section className="flex items-center justify-between">
            <h1 className="text-4xl font-semibold">Flash Sales</h1>
            <CountDown neeTime={dateTimeAfterThreeDays}/>
              <div></div>
          </section>
          <section className="carousel w-full space-x-4 min-w-[1100px]">
            <div className="carousel-item"><Card offer={true} offerColor="bg-red-600" amount={40}/></div>
            <div className="carousel-item"><Card offer={true} offerColor="bg-red-600" amount={40}/></div>
            <div className="carousel-item"><Card offer={true} offerColor="bg-red-600" amount={40}/></div>
            <div className="carousel-item"><Card offer={true} offerColor="bg-red-600" amount={40}/></div>
            <div className="carousel-item"><Card offer={true} offerColor="bg-red-600" amount={40}/></div>
            <div className="carousel-item"><Card offer={true} offerColor="bg-red-600" amount={40}/></div>
            <div className="carousel-item"><Card offer={true} offerColor="bg-red-600" amount={40}/></div>
            <div className="carousel-item"><Card offer={true} offerColor="bg-red-600" amount={40}/></div>    
          </section>
          <section className="flex items-center justify-center p-10">
            <button type="button" className="py-6 px-12 flex items-center justify-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 self-center">
              View All Products
            </button>
          </section>
          <hr className="mx-10"/>
        </section>
        
        <section className="p-20 flex flex-col gap-10 min-w-[1100px]">
          <div className="flex flex-col gap-10">
            <Markers name="Categories"/>
            <h1 className="text-4xl font-semibold">Browse By Category</h1>
          </div>
          <section className="carousel w-full space-x-10">
            <div className="carousel-item"><Box icon={<CiMobile2 className="w-16 h-16"/>} name={"Mobile"}/></div>
            <div className="carousel-item"> <Box icon={<HiOutlineComputerDesktop className="w-16 h-16"/>} name={"Computers"}/></div>
            <div className="carousel-item"><Box icon={<IoWatchOutline className="w-16 h-16"/>} name={"SmartWatch"}/></div>
            <div className="carousel-item"><Box icon={<CiHeadphones className="w-16 h-16"/>} name={"HeadPhones"}/></div>
            <div className="carousel-item"><Box icon={<TbDeviceGamepad className="w-16 h-16"/>} name={"Gaming"}/></div>
            <div className="carousel-item"><Box icon={<TbDeviceGamepad className="w-16 h-16"/>} name={"Gaming"}/></div>
            <div className="carousel-item"><Box icon={<TbDeviceGamepad className="w-16 h-16"/>} name={"Gaming"}/></div>
            <div className="carousel-item"><Box icon={<TbDeviceGamepad className="w-16 h-16"/>} name={"Gaming"}/></div>
            <div className="carousel-item"><Box icon={<TbDeviceGamepad className="w-16 h-16"/>} name={"Gaming"}/></div>
            <div className="carousel-item"><Box icon={<TbDeviceGamepad className="w-16 h-16"/>} name={"Gaming"}/></div>
            <div className="carousel-item"><Box icon={<TbDeviceGamepad className="w-16 h-16"/>} name={"Gaming"}/></div>
          </section>
          <hr className="mx-10 my-10"/>        
        </section>
        
        <section className="py-10 px-20 min-w-[1100px]">
          <Markers name="This Month"/>
          <br className="-mt-10"/>
          <section className="flex items-center justify-between">
            <h1 className="text-4xl font-semibold">Best Selling Product</h1>
            <button type="button" className="py-6 px-16 flex items-center justify-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 self-center">
              View All
            </button>
          </section>
          <section className="flex gap-20 justify-between">
            <Card offer={false} />  
            <Card offer={false} />
            <Card offer={false} />
            <Card offer={false} />
          </section>
        </section>
        <section className="px-24 py-20">
          <div className="w-full h-96 bg-black"></div>
        </section>
        <section className="py-10 px-20 min-w-[1100px]">
          <Markers name="Our Products"/>
          <br className="-mt-10"/>
          <section className="flex items-center justify-between">
            <h1 className="text-4xl font-semibold">Explore Our Products</h1>
            <div></div>
          </section>
          <section className="flex flex-col gap-5 mt-10 min-w-[1100px]:">
            <div className="flex gap-20 justify-between">
              <Card offer={false} />  
              <Card offer={false} />
              <Card offer={false} />
              <Card offer={false} />
            </div>
            <div className="flex gap-20 justify-between">
              <Card offer={false} />  
              <Card offer={false} />
              <Card offer={false} />
              <Card offer={false} />
            </div>
            
          </section>
        </section>
        <section className="py-10 px-20 min-w-[1100px]">
          <Markers name="Featured"/>
          <br className="-mt-10"/>
          <section className="flex items-center justify-between">
            <h1 className="text-4xl font-semibold">New Arrival</h1>
            <div></div>
          </section>
          <section className="mt-10 flex border justify-between gap-10">
            <div className="w-1/2 h-[32rem] bg-black"></div>
            <section className="border border-blue-500 flex flex-col h-[32rem] w-1/2 gap-10">
              <div className="h-[16rem] bg-red-500"></div>
              <section className="h-[16rem] flex gap-10">
                <div className="w-1/2 bg-green-500"></div>
              <div className="w-1/2 bg-yellow-500"></div>
              </section>
            </section>
          </section>
        </section>
        <section className="p-20 flex items-center justify-center gap-20">
          <section className="flex flex-col items-center justify-center gap-10">
            <div className="w-24 h-24 bg-black rounded-full border-8 border-gray-400 flex items-center justify-center">
              <FaTruckFast color="white" size={50} />
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <h1 className="font-bold text-xl">FREE AND FAST DELIVERY</h1>
              <p>Free delivery for all orders over $140</p>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center gap-10">
            <div className="w-24 h-24 bg-black rounded-full border-8 border-gray-400 flex items-center justify-center">
              <RiCustomerServiceLine color="white" size={50} />
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <h1 className="font-bold text-xl">24/7 CUSTOMER SERVICE</h1>
              <p>Friendly 24/7 customer support</p>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center gap-10">
            <div className="w-24 h-24 bg-black rounded-full border-8 border-gray-400 flex items-center justify-center">
              <BiCheckShield color="white" size={50} />
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <h1 className="font-bold text-xl">MONEY BACK GURANTEE</h1>
              <p>We return money within 30 Days</p>
            </div>
          </section>
          
        </section>
        
      </div>
    )
  }

  export default Home