import React from "react";
import ninja from "../assets/ninja.jpg";
import cpp from "../assets/cpp.png";
import dsa from "../assets/dsa.png";
import code from "../assets/code.png";
import codehelp from "../assets/codehelp.png";
import motion from "../assets/motion.png";
import cut from "../assets/cut.png";

function Work() {
  return (
    <div className="dark:bg-gray-800 py-14 lg:py-24" id="work">
      <div className="text-3xl text-blue-700 dark:text-blue-400 font-bold tracking-wider text-center">
        Work & Training
      </div>
      <div
        className="w-full sm:w-3/4 md:w-1/2 mx-auto text-lg text-black dark:text-white text-center
        py-6"
      >
        My work & training experience as a software engineer and working on
        different companies and projects.
      </div>

      <div className="flex flex-col w-11/12 md:w-10/12 max-w-6xl mx-auto items-center gap-8 ">
        <div
          className="flex flex-col gap-2  border-2 border-gray-700 items-center justify-center py-3   lg:w-1/2"
          style={{ borderRadius: "15px" }}
        >
          <div>
            <img src={ninja} className="w-10" />
          </div>
          <div className="dark:text-white font-semibold text-2xl">
            Coding Ninjas
          </div>
          <div className="dark:text-white text-xl">
            Introduction to C++ (Trainee)
          </div>
          <div className="text-gray-900 dark:text-gray-100">
            Sep to Nov 2022
          </div>
          <div className="dark:text-white pl-4">
            It is a short 1 month training program in which we have been taught
            about basics of C++. In the course we have been build a big
            programs.
          </div>
          <a
            href="https://certificate.codingninjas.com/view/23579c53ade73e5b "
            target="_blank"
          >
            <div>
              <img src={cpp} className="w-24 py-3 cursor-pointer" />
            </div>
          </a>
        </div>
        <div
          className="flex flex-col gap-2 border-2 border-gray-700 items-center justify-center py-3   lg:w-1/2"
          style={{ borderRadius: "15px" }}
        >
          <div>
            <img src={ninja} className="w-10" />
          </div>
          <div className="dark:text-white font-semibold text-2xl">
            Coding Ninjas
          </div>
          <div className="dark:text-white text-xl">
            Data Structures in C++ (Trainee)
          </div>
          <div className="text-gray-900 dark:text-gray-100">
            Nov to May 2022
          </div>
          <div className="dark:text-white pl-4">
            It is a long 6 month training program in which we have been taught
            about basics and adavance of DSA . In the course we have been build
            a big programs and build very interesting programs .
          </div>
          <a
            href="https://certificate.codingninjas.com/view/c7392da48ce4a973 "
            target="_blank"
          >
            <div>
              <img src={dsa} className="w-24 py-3 cursor-pointer" />
            </div>
          </a>
        </div>
        <div
          className="flex flex-col gap-2 border-2 border-gray-700 items-center justify-center py-3   lg:w-1/2"
          style={{ borderRadius: "15px" }}
        >
          <div>
            <img src={codehelp} className="w-10" />
          </div>
          <div className="dark:text-white font-semibold text-2xl">
            Coding Ninjas
          </div>
          <div className="dark:text-white text-xl">
            Web Development (Trainee)
          </div>
          <div className="text-gray-900 dark:text-gray-100">4 - 5 month</div>
          <div className="dark:text-white pl-3">
            It is a long 4-5 month training program in which we have been taught
            about basics and adavance of Web Development .In this course we
            learn front end which in html, css, tailwindcss, js , reactjs and
            learn back end development. In the course we have been build a big
            projects and build very interesting projects and fully
            responsiveness.
          </div>
          <a
            href="https://learn.thecodehelp.in/share-certificate?serialno=DZPRVHWB "
            target="_blank"
          >
            <div>
              <img src={code} className="w-24 py-3 cursor-pointer" />
            </div>
          </a>
        </div>
        <div
          className="flex flex-col gap-2 border-2 border-gray-700 items-center justify-center py-3   lg:w-1/2"
          style={{ borderRadius: "15px" }}
        >
          <div>
            <img src={motion} className="w-14" />
          </div>
          <div className="dark:text-white font-semibold text-2xl">
            Motion Cut
          </div>
          <div className="dark:text-white text-xl">
            Frontend Web Development (Intern)
          </div>
          <div className="text-gray-900 dark:text-gray-100">
            20 Dec 23 - 20 Jan 24
          </div>
          <div className="dark:text-white pl-2">
            It is a frontend web development Internship. During the internship
            period, we have been taught about web development and for assessment
            we had to build some frontend website and create and share a demo
            video about our work and all the code used.
          </div>
          <a
            href="https://drive.google.com/file/d/15IhWh9O58pXI8MiMyQSg35J13VTHOA_x/view?usp=sharing "
            target="_blank"
          >
            <div>
              <img src={cut} className="w-24 py-3 cursor-pointer" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
