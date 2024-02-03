import React, { useEffect, useState } from "react";
import metaverse from "../assets/metaverse.png";
import modern from "../assets/modern.png";
import middle from "../assets/middle.png";
import snake from "../assets/snake.png"

const Projects = () => {
  const projects = [
    {
      name: "Metaverse",
      link: "https://metaverse-by-chiragg0512.vercel.app/",
      repoLink: "https://github.com/Chiragg0512/Metaverse",
      pic: metaverse,
      techs: ["HTML", "CSS","JS"],
      category: "Web App's",
      desc: "  The app is a user-friendly interface. And it is fully responsiveness",
    },
    {
      name: "Modern Chair",
      link: "https://modern-chair-by-chiragg0512.vercel.app/",
      repoLink: "https://github.com/Chiragg0512/Modern-Chair",
      pic: modern,
      techs: ["HTML", "TAILWIND","JS"],
      category: "Web App's",
      desc: " The app is a user-friendly interface. And it is fully responsiveness.",
    },
    {
      name: "Middle Finance",
      link: "https://middle-finance-chiragg0512.vercel.app/",
      repoLink: "https://github.com/Chiragg0512/middle-finance-chiragg0512",
      pic: middle ,
      techs: ["HTML", "CSS","JS"],
      category: "Web App's",
      desc: "The app is a user-friendly interface. And it is fully responsiveness.Its all button working and easy to use and design is very impressive.",
    },
    {
      name: "Snake and Ladder",
      link: "https://snake-and-ladder-by-chiragg0512.vercel.app/",
      repoLink: "https://github.com/Chiragg0512/Snake-and-ladder",
      pic: snake,
      techs: ["React JS", "TAILWIND"],
      category: "React JS",
      desc: " The app is a user-friendly interface. And it is fully responsiveness.Its all button working and easy to use and design is very impressive.And 2 playersncan play this game ",
    },
  ];

  const filters = ["All", "Web App's", "React JS"];

  const [activeFilter, setActiveFilter] = useState("All");

  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
      return;
    }
    const temp = projects.filter(
      (project) => project.category === activeFilter
    );
    setFilteredProjects(temp);
  }, [activeFilter]);

  const clickHandler = (item) => {
    setActiveFilter(item);
  };

  return (
    <div  className="w-full bg-[#f7f8fc] dark:bg-[#1b1d1e] py-8 lg:py-14" id="project">
      <div className="w-11/12 md:w-10/12 mx-auto max-w-7xl">
        <div
          className="text-3xl text-blue-700 dark:text-blue-500 font-bold tracking-wider text-center"
          data-aos="fade-up"
        >
          Projects
        </div>
        <div
          className="w-full sm:w-3/4 md:w-1/2 mx-auto text-lg text-black dark:text-white text-center
        py-6"
          data-aos="fade-up"
        >
          I have worked on a wide range of projects. From Web apps to Machine
          Learning Algorithms. Here are some of my projects.
        </div>

        <div
          className="w-full sm:w-3/4 md:w-1/2 flex justify-center items-center flex-wrap gap-4 mx-auto pb-8"
          data-aos="fade-up"
        >
          {filters.map((item, index) => (
            <button
              key={index}
              className={`text-xl ${
                activeFilter === item
                  ? "bg-blue-700 text-white dark:bg-blue-600"
                  : "bg-white text-black"
              } border-2 bg-blue-700 dark:bg-blue-600 transition-all duration-300 rounded-md px-3 py-1`}
              onClick={() => clickHandler(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          data-aos="fade-up"
        >
          {filteredProjects.map((item, index) => (
            <div
              key={index}
              className=" bg-white dark:bg-black shadow-lg rounded-lg p-4 
              hover:-translate-y-2 hover:scale-105 transition-all duration-300
              flex flex-col items-center gap-y-2"
            >
              <img
                src={item.pic}
                alt=""
                className=" rounded-lg w-full aspect-[2/1] shadow-md"
              />
              <p className="text-lg text-black dark:text-white text-center font-semibold">
                {item.name}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-2">
                {item.techs.map((i, ind) => (
                  <div
                    key={ind}
                    className="bg-blue-700  dark:bg-blue-600 text-xs  text-white px-3 py-1 w-fit rounded-xl"
                  >{`${i}`}</div>
                ))}
              </div>
              <p className="text-sm text-black dark:text-white">{item.desc}</p>
              <div className="flex items-center gap-x-4">
                <a
                  href={item.link}
                  target="_blank"
                  className="border bg-blue-700 dark:bg-blue-600 rounded-md 
                text-xs sm:text-base px-3 py-1 text-white "
                >
                  Veiw Live App
                </a>
                <a
                  href={item.repoLink}
                  target="_blank"
                  className="bg-blue-700 dark:bg-blue-600 border border-[#6674cc] 
                dark:border-[#29347a] rounded-md text-xs sm:text-base px-3 py-1 text-white"
                >
                  Veiw Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
