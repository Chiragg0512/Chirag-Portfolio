import React, { useState } from "react";
import cod from "../assets/Coderimg.png";
import { IoMdSunny } from "react-icons/io";
import { LuMoon } from "react-icons/lu";
import { useEffect } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import photo from "../assets/photo.jpg";
import Typewriter from "typewriter-effect";
import git from "../assets/git.jpg";
import gmail from "../assets/gmail.png";
import insta from "../assets/insta.png";
import link from "../assets/link.png";

function Portfolio() {
  const [theme, settheme] = useState("light");
  const [menu, setmenu] = useState(false);
  function clickhandler() {
    setmenu((prev) => !prev);
  }
  function lightmode() {
    settheme("light");
  }
  function darkmode() {
    settheme("dark");
  }
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);
  function myFunction() {
    if (theme === "light") {
      darkmode();
    } else {
      lightmode();
    }
  }
  return (
    <>
      <div className="w-full bg-slate-100 z-50 dark:bg-gray-900 py-3 fixed top-0">
        <div className=" w-11/12 md:w-10/12 max-w-7xl  mx-auto flex justify-between items-center   ">
          <div className="flex items-center gap-x-1 lg:gap-x-3 ">
            <div className="">
              <img src={cod} className=" w-8 lg:w-16  " />
            </div>
            <div className=" text-2xl lg:text-4xl font-semibold text-black dark:text-white ">
              Chirag
            </div>
            <div className="text-2xl  lg:text-4xl font-semibold  text-blue-500">
              Gupta
            </div>
          </div>

          <div className=" gap-x-8 hidden lg:flex items-center  ">
            <a
              href="#about"
              className="text-2xl font-bold  opacity-60 cursor-pointer hover:opacity-100 dark:text-white   text-black  transition-all duration-300 "
            >
              About
            </a>
            <a
              href="#skills"
              className="text-2xl font-bold  opacity-60 cursor-pointer hover:opacity-100 dark:text-white   text-black  transition-all duration-300"
            >
              Skills
            </a>
            <a
              href="#work"
              className="text-2xl font-bold  opacity-60 cursor-pointer hover:opacity-100 dark:text-white   text-black  transition-all duration-300"
            >
              Work & Training
            </a>
            <a
              href="#project"
              className="text-2xl font-bold  opacity-60 cursor-pointer hover:opacity-100 dark:text-white   text-black  transition-all duration-300"
            >
              Project
            </a>
            <a
              href="#contact"
              className="text-2xl font-bold  opacity-60 cursor-pointer hover:opacity-100 dark:text-white   text-black transition-all duration-300"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center gap-x-3 lg:gap-x-8">
            <button
              onClick={clickhandler}
              className=" text-2xl lg:text-4xl text-gray-900 block lg:hidden dark:text-white"
            >
              <FaBarsStaggered />
            </button>

            <button
              onClick={myFunction}
              className=" text-2xl lg:text-4xl text-gray-900 dark:text-white"
            >
              {theme === "light" ? <LuMoon /> : <IoMdSunny />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          menu ? "translate-x-0" : "translate-x-full"
        } transition-all duration-700 flex justify-center items-center backdrop-blur-xl z-50 fixed left-0 right-0 top-14 bottom-0`}
      >
        <div className=" gap-y-8  flex lg:hidden flex-col items-center  ">
          <a
            href="#about"
            onClick={() => setmenu(false)}
            className="text-2xl font-bold cursor-pointer opacity-60  hover:opacity-100 dark:text-white text-black  transition-all duration-300 "
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setmenu(false)}
            className="text-2xl font-bold cursor-pointer opacity-60 hover:opacity-100 dark:text-white text-black  transition-all duration-300"
          >
            Skills
          </a>
          <a
            href="#work"
            onClick={() => setmenu(false)}
            className="text-2xl font-bold cursor-pointer opacity-60 hover:opacity-100 dark:text-white text-black  transition-all duration-300"
          >
            Work & Training
          </a>
          <a
            href="#project"
            onClick={() => setmenu(false)}
            className="text-2xl font-bold cursor-pointer opacity-60 hover:opacity-100 dark:text-white text-black  transition-all duration-300"
          >
            Project
          </a>
          <a
            href="#contact"
            onClick={() => setmenu(false)}
            className="text-2xl font-bold cursor-pointer opacity-60 hover:opacity-100 dark:text-white text-black transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="dark:bg-gray-950" id="about">
        <div className=" w-11/12 md:w-10/12 max-w-7xl  gap-y-10  mx-auto pt-28 pb-12 lg:pt-44 flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="flex flex-col gap-y-7 lg:gap-y-5 items-center lg:items-start">
            <div className="text-3xl lg:text-5xl dark:text-white text-black font-bold ">
              Hi👏, I am
            </div>
            <div className="text-4xl lg:text-5xl dark:text-white text-black font-bold ">
              Chirag Gupta
            </div>
            <div className="flex items-center gap-x-2 ">
              <div className="text-3xl lg:text-5xl font-semibold dark:text-white ">
                {" "}
                I am a{" "}
              </div>
              <div className="text-3xl lg:text-5xl text-blue-600 dark:text-blue-400 font-normal">
                <Typewriter
                  options={{
                    strings: [
                      "Coder",
                      "Software Developer",
                      "Front End Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>

            <div className="text-2xl lg:text-2xl text-gray-900 font-normal dark:text-white ">
              I am a motivated and versatile individual, always
              <br /> eager to take on new challenges. With a passion for
              <br /> learning I am dedicated to delivering high-quality
              <br /> results. With a positive attitude and a growth mindset, I
              <br /> am ready to make a meaningful contribution and <br />
              achieve great things.
            </div>

            <div
              className="bg-blue-700 dark:bg-blue-600 text-white sm:text-lg text-base z-20 py-2 px-3 border border-blue-700 dark:border-blue-600
    rounded-lg tracking-wider hover:text-black  transition-all duration-300 before:contents-[''] 
    before:absolute before:top-0 before:bottom-0 before:right-full before:rounded-lg before:left-0 before:bg-white before:hover:right-0 before:transition-all before:duration-500 before:-z-10
    flex items-center justify-center gap-x-2
    hover:scale-95 "
            >
              <a
                href="https://drive.google.com/file/d/17AnCYrLkOIdP44Ph57qQCTW4E1I-oq3Q/view?usp=sharing"
                target="blank"
              >
                Check Resume
              </a>
            </div>
            <div className="flex gap-x-6 pt-4 items-center">
              <a href="https://github.com/Chiragg0512" target="_blank">
                <img className="w-10 cursor-pointer" src={git} />
              </a>
              <a
                href="https://www.linkedin.com/in/chirag-gupta-a87230221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <img className="w-10 cursor-pointer" src={link} />
              </a>
              <a
                href="https://www.instagram.com/chiragg083?igsh=MXZ4dG9iaDhiZmkxeg=="
                target="_blank"
              >
                <img className="w-10 cursor-pointer" src={insta} />
              </a>
              <a href="mailto:chiragg083@gmail.com" target="_blank">
                <img className="w-12 cursor-pointer" src={gmail} />
              </a>
            </div>
          </div>

          <div className="">
            <img
              className=" border-4 border-blue-200  rounded-full"
              src={photo}
            />
          </div>
        </div>
      </div>

      {/* 
      style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }} */}

      <div className="w-full  pb-4 dark:bg-gray-950  ">
        <div className="h-1 w-11/12 md:w-10/12 max-w-7xl mx-auto bg-gray-600 "></div>
      </div>
    </>
  );
}

export default Portfolio;
