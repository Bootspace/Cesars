import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline, } from "react-icons/io5";
import InputField from "../Components/InputField";
import {useLocation} from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  return (
    <nav className="border flex justify-between items-center px-20 py-4 min-w-[1100px]">
        <div className="flex gap-20 items-center max-xl:gap-12">
          <a href="/" className="font-bold text-2xl">Exclusive</a>
          <details className="dropdown hidden max-xl:flex">
            <summary className="m-1 btn">
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" /></svg>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li><a href="/" className="hover:underline decoration-solid">Home</a></li>
              <li><a href="/contact" className="hover:underline hover:decoration-solid">Contact</a></li>
              <li><a href="/" className="hover:underline decoration-solid">About</a></li>
              <li><a href="/" className="hover:underline decoration-solid">Sign Up</a></li>
            </ul>
          </details>
          <div className="flex gap-20 text-lg font-light max-xl:hidden ">
            <a href="/" className={(location.pathname === '/' ? 'underline decoration-solid' : 'hover:underline hover:decoration-solid')}>Home</a>
            <a href="/contact" className={(location.pathname === '/contact' ? 'underline decoration-solid' : 'hover:underline hover:decoration-solid')}>Contact</a>
            <a href="/" className="hover:underline decoration-solid">About</a>
            <a href="/" className="hover:underline decoration-solid">Sign Up</a>
          </div>
        </div>
        <div className="flex gap-8 justify-between items-center">
          <InputField logo={<svg className="flex-shrink-0 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>} text={"What are you looking for?"}/>
          <a href="/">
            <IoIosHeartEmpty size={30} className="hover:bg-black/5"/>
          </a>
          <a href="/"><IoCartOutline size={30} className="hover:bg-black/5"/></a>
        </div>
        
      </nav>
  )
}

export default Nav