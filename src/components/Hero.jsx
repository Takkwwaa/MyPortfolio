import React from "react";
import photo from "../assets/photo.png";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { useTheme } from "./ThemeContext";
import darkthemephoto from "../assets/darkthemephoto.png";

const Hero = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <section className=" w-full h-auto flex md:flex-col flex-row sm:py-20 py-3  items-center animate-fadeIn animation-delay-2 ">
      <div
        className={`flex-1 flex-col xl:px-0 sm:px-14 px-4 flex justify-center items-center" `}
      >
        <div className="flex sm:flex-row flex-col gap-12 items-center w-full ">
          <img
            src={isDarkMode ? darkthemephoto : photo}
            alt=""
            className="sm:w-[400px] sm:h-[400px] w-[200px] h-[200px]  "
          />
          <div className="flex flex-col sm:items-start items-center justify-center">
            <h1
              className={`flex-1 font-poppins font-semibold sm:text-5xl text-3xl  sm:leading-[90.8px] leading-[50px] ${
                isDarkMode ? "text-[#f1bb2b]" : "text-secondary"
              }`}
            >
              Hello, I'm Takoua!
            </h1>
            <p
              className={` max-w-[550px] ss:text-xl text-lg  ${
                isDarkMode ? " text-base " : "text-primary"
              } text-left `}
            >
              I'm a Junior Full-Stack Web Developer based in Tunis, Tunisia,
              passionate about creating attractive and functional websites.
            </p>
            <button
              type="submit"
              className={`px-8 mt-7 rounded sm:w-44 w-40 hover:bg-secondary bg-[#f1bb2b] text-white  py-2.5 text-xs sm:text-sm font-medium uppercase leading-tight shadow-md transition duration-150 ease-in-out focus:outline-none ${
                isDarkMode
                  ? "border-[#f1bb2b] border-[1px] hover:text-[#f1bb2b]"
                  : ""
              }`}
            >
              Contact me
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center text-center justify-center flex-1 sm:pb-10 py-3 sm:pt-20 pt-10 ">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HiArrowDown
              size={35}
              className={`animate-bounce cursor-pointer ${
                isDarkMode
                  ? "text-[#f1bb2b] hover:text-white "
                  : "text-secondary hover:text-[#f1bb2b]"
              }`}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
