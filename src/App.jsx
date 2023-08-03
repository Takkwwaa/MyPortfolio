import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import { useTheme } from "./components/ThemeContext";

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  console.log("theme =" + isDarkMode);
  return (
    <div
      className={`${
        isDarkMode ? "bg-dark-primary" : "bg-white"
      }  w-screen h-screen overflow-x-hidden`}
    >
      <Navbar />
      <div className={`mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl  `}>
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
