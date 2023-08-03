import React from "react";
import {
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { useTheme } from "./ThemeContext";

const Footer = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr
        className={`w-full h-0.5 mx-auto mt-8  border-0 ${
          isDarkMode ? "bg-base" : "bg-secondary"
        }`}
      ></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div
          className={`flex flex-row items-center justify-center space-x-1 ${
            isDarkMode ? "text-base" : "text-[#01022b]"
          }`}
        >
          © 2023 Takoua Hosni<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a
            href="https://github.com/Takkwwaa"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className={`hover:-translate-y-1 transition-transform cursor-pointer ${
                isDarkMode ? "text-base" : "text-[#01022b]"
              }`}
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/takwa-hosni-ba3b991b9/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className={`hover:-translate-y-1 transition-transform cursor-pointer ${
                isDarkMode ? "text-base" : "text-[#01022b]"
              }`}
              size={30}
            />
          </a>
          <a
            href="https://www.instagram.com/takoua_hosni/?hl=fr"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram
              className={`hover:-translate-y-1 transition-transform cursor-pointer ${
                isDarkMode ? "text-base" : "text-[#01022b]"
              }`}
              size={30}
            />
          </a>

          <a
            href="https://www.facebook.com/ta.koua.5036/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineFacebook
              className={`hover:-translate-y-1 transition-transform cursor-pointer ${
                isDarkMode ? "text-base" : "text-[#01022b]"
              }
      `}
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
