import { useState } from "react";
import logo from "../assets/logo.png";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { useTheme } from "./ThemeContext";
import darkthemelogo from "../assets/darkthemelogo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [currentTheme, setTheme] = useState("light");
  const { isDarkMode, toggleTheme } = useTheme();
  console.log(isDarkMode);
  return (
    <nav className="sticky top-0 z-50 ">
      <div
        className={`${
          isDarkMode ? "bg-dark-primary" : "bg-white"
        } w-full flex px-6 py-4 justify-between items-center `}
      >
        <img
          src={isDarkMode ? darkthemelogo : logo}
          alt="Takoua Hosni"
          className="sm:w-[90px] sm:h-[70px] h-12 w-12 "
        />
        <ul
          className={`list-none sm:flex hidden justify-end items-center ${
            isDarkMode ? "text-dark-secondary" : "text-secondary"
          }`}
        >
          <li
            className={
              "font-poppins font-normal cursor-pointer text-[18px] mr-10 "
            }
          >
            <a href={"#contact"} className=" hover:text-[#f1bb2b]">
              Contact
            </a>
          </li>
          <li
            className={
              "font-poppins font-normal cursor-pointer text-[18px] mr-10 border-none"
            }
          >
            <a href={"#about"} className=" hover:text-[#f1bb2b]">
              About
            </a>
          </li>
          <li
            className={
              "font-poppins font-normal cursor-pointer text-[18px] mr-10 border-none"
            }
          >
            <a href={"#projects"} className=" hover:text-[#f1bb2b]">
              Projects
            </a>
          </li>
        </ul>
        {currentTheme === "light" ? (
          <button
            onClick={() => {
              toggleTheme();
              setTheme("dark");
              console.log(isDarkMode);
            }}
            className="bg-[#143573] p-2 rounded-xl"
          >
            <RiSunLine size={25} color="#f1bb2b" />
          </button>
        ) : (
          <button
            onClick={() => {
              toggleTheme();
              setTheme("light");
              console.log(isDarkMode);
            }}
            className="bg-[#143573] p-2 rounded-xl"
          >
            <div className=" border-[#f1bb2b] border-[1px] p-2 rounded-xl">
              <RiMoonFill size={25} color="#f1bb2b" />
            </div>
          </button>
        )}
        <div className="sm:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[26px] h-[26px] object-contain mr-10 "
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar border-solid border-primary border-2`}
        >
          <ul
            className={`list-none flex justify-end items-start flex-1 flex-col ${
              isDarkMode ? "text-dark-secondary" : "text-secondary"
            }`}
          >
            <li
              className={
                "font-poppins font-normal cursor-pointer text-[16px] hover:text-[#f1bb2b] mb-4"
              }
            >
              <a href={"#contact"}>Contact Us</a>
            </li>
            <li
              className={
                "font-poppins font-normal cursor-pointer text-[16px] hover:text-[#f1bb2b] mb-4 border-none"
              }
            >
              <a href={"#about"}>About Us</a>
            </li>
            <li
              className={
                "font-poppins font-normal cursor-pointer text-[16px] hover:text-[#f1bb2b] mb-0 border-none"
              }
            >
              <a href={"#projects"}>Projects</a>
            </li>
            <li>
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-[#143573] p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="#f1bb2b" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-[#143573] p-2 rounded-xl"
                >
                  <RiMoonFill size={25} color="#f1bb2b" />
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className=" flex justify-center items-center">
        <div
          className={` w-4/5 h-[1px]  flex ${
            isDarkMode ? " bg-base" : "bg-primary"
          }`}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
