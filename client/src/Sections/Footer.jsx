import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiArrowRightCircle } from "react-icons/fi";
import InputField from "../Components/InputField";

const Footer = () => {
  return (
    <footer className="footer p-16 px-20 bg-black text-neutral-content">
        <nav>
          <header className="footer-title text-xl">Exclusive</header> 
          <a className="link link-hover">Subscribe</a>
          <p className="pb-2">Get 10% off your first order</p>
          <InputField logo={<FiArrowRightCircle size={30} />} text={"Enter Your Email"}/>
        </nav> 
        <nav>
          <header className="footer-title text-xl">Support</header> 
          <p>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit. <br />Ex quam, alias cupiditate <br />debitis repellat molestias.</p>
          <p>exclusive@gmail.com</p>
          <a>+88015-88888-9999</a>
        </nav> 
        <nav>
          <header className="footer-title text-xl">Account</header> 
          <a className="link link-hover">My Account</a>
          <a className="link link-hover">Login/Register</a>
          <a className="link link-hover">Cart</a>
          <a className="link link-hover">Wishlist</a>
          <a className="link link-hover">Shop</a>
        </nav>
        <nav>
          <header className="footer-title text-xl">Quick Link</header> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="flex flex-col justify-between h-full">
          <header className="footer-title text-xl">Download App</header> 
          <p>Save $3 with first time app users only</p>
          <div className="w-24 h-24 flex items-center justify-between min-w-full g-2">
            <img src="/qr-code.png" alt="image" className="w-28 h-24 p-2" />
            <div className="w-1/2">
              <img src="/google-play-badge.png" alt="image" className="w-full h-12" />
              <img src="/apple.png" alt="image" className="w-full h-12" />
            </div>
          </div>
          <div className="flex justify-between gap-3 w-full">
            <a href="/"><FaFacebook size={30} className="hover:text-blue-400"/></a>
            <a href="/"><FaXTwitter size={30} className="hover:text-white" /></a>
            <a href="/"><FaInstagram size={30} className="hover:text-pink-500"/></a>
            <a href="/"><FaLinkedin size={30} className="hover:text-blue-600"/></a>
          </div>
        </nav>
      </footer>
  )
}

export default Footer