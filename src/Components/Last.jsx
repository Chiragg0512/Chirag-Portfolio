import React from "react";
import git from "../assets/git.jpg";
import gmail from "../assets/gmail.png";
import insta from "../assets/insta.png";
import link from "../assets/link.png";

function Last() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 flex  justify-between py-5">
        <div className="text-black dark:text-white font-bold text-3xl pl-7">
          Chirag Gupta
        </div>
        <div className="flex gap-x-6 pt-4 items-center pr-8">
          <a href="https://github.com/Chiragg0512" target="_blank">
            <img className=" w-9 cursor-pointer" src={git} />
          </a>
          <a
            href="https://www.linkedin.com/in/chirag-gupta-a87230221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <img className="w-9 cursor-pointer" src={link} />
          </a>
          <a
            href="https://www.instagram.com/chiragg083?igsh=MXZ4dG9iaDhiZmkxeg=="
            target="_blank"
          >
            <img className="w-9 cursor-pointer" src={insta} />
          </a>
          <a href="mailto:chiragg083@gmail.com" target="_blank">
            <img className="w-9 cursor-pointer" src={gmail} />
          </a>
        </div>
      </div>
      <div className="bg-black text-white text-base py-1 flex justify-center">
        © 2024 Chirag Gupta. All rights reserved.
      </div>
    </>
  );
}

export default Last;
