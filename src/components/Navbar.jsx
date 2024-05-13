import { useState } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className="fixed w-full h-[80px] shadow-lg px-6 flex justify-between items-center bg-[#0a192f] text-gray-300">
        <div>
          <h2 className="ml-4 text-2xl font-bold font-ral">Roman</h2>
        </div>
        <ul className=" gap-x-4 hidden md:flex">
          <li className=" text-xl">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className=" text-xl">
            {" "}
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className=" text-xl">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className=" text-xl">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className=" text-xl">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger  */}
        <div className="mr-4 md:hidden z-10" onClick={handleClick}>
          {!show ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu  */}
        <ul
          className={
            !show
              ? "hidden"
              : "absolute  top-0 left-0 flex flex-col gap-4 justify-center items-center h-screen w-full bg-[#0a192f]"
          }
        >
          <li className="text-4xl py-6">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="text-4xl py-6">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="text-4xl py-6">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="text-4xl py-6">
            <Link
              onClick={handleClick}
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="text-4xl py-6">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Social Icon  */}
        <ul className="hidden lg:flex flex-col fixed  top-[35%] left-0">
          <li className="w-[160px] h-[60px] bg-blue-500 ml-[-100px] hover:ml-0 duration-300">
            <a
              href="https://www.linkedin.com/in/abdullah-al-roman-010433a6"
              target="_blank"
              className="flex items-center h-full justify-around w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>{" "}
          <li className="w-[160px] h-[60px] bg-[#333333] ml-[-100px] hover:ml-0 duration-300">
            <a
              href="https://github.com/Abdullah-Roman"
              target="_blank"
              className="flex items-center h-full justify-around w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] bg-blue-500 ml-[-100px] hover:ml-0 duration-300">
            <a
              href="https://www.facebook.com/romand.sailor/"
              target="_blank"
              className="flex items-center h-full justify-around w-full text-gray-300"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] bg-[#565f69] ml-[-100px] hover:ml-0 duration-300">
            <a
              href=""
              className="flex items-center h-full justify-around w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
