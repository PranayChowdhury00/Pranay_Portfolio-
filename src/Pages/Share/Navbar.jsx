import { SlSocialGithub, SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebookCircular, TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
    <li className="font-medium">
      <a href="#home" className="hover:text-[#FF014F]">HOME</a>
    </li>
    <li className="font-medium">
      <a href="#about" className="hover:text-[#FF014F]">ABOUT</a>
    </li>
    <li className="font-medium">
      <a href="#services" className="hover:text-[#FF014F]">SERVICES</a>
    </li>
    <li className="font-medium">
      <a href="#blog" className="hover:text-[#FF014F]">BLOG</a>
    </li>
    <li className="font-medium">
      <a href="#projects" className="hover:text-[#FF014F]">PROJECT</a>
    </li>
    <li className="font-medium">
      <a href="#contact" className="hover:text-[#FF014F]">CONTACT</a>
    </li>
  </>
  
  );
  return (
    <div className="navbar sticky top-0 z-10 bg-base-100 shadow-sm px-10">
      <div className="navbar-start">
        
        <Link to="/">
          <div className="flex items-center">
            <img className="w-12 " src="/portfolio-manager.png" alt="" />
            <p className="w-[200px]  md:font-bold text-[15px] md:text-xl ml-4">Pranay Chowdhury</p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <ul className="md:flex gap-6 items-center hidden ">
          <Link to="www.linkedin.com/in/pranay-chowdhury">
            <li className="p-2 bg-base-300 rounded-full transition delay-200 ease-in hover:text-white hover:bg-[#FF014F]">
              <TiSocialLinkedin className="w-5 h-5" />
            </li>
          </Link>

          <Link to="https://github.com/PranayChowdhury00">
            <li className="p-2 bg-base-300 rounded-full transition delay-200 ease-in hover:text-white hover:bg-[#FF014F]">
              <SlSocialGithub className="w-5 h-5" />
            </li>
          </Link>

          <Link to=" https://www.facebook.com/share/19ztW6gzmb/ ">
            <li className="p-2 bg-base-300 rounded-full transition delay-200 ease-in hover:text-white hover:bg-[#FF014F]">
              <TiSocialFacebookCircular className="w-5 h-5" />
            </li>
          </Link>

          <Link to="https://instagram.com">
            <li className="p-2 bg-base-300 rounded-full transition delay-200 ease-in hover:text-white hover:bg-[#FF014F]">
              <SlSocialInstagram className="w-5 h-5" />
            </li>
          </Link>
        </ul>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
