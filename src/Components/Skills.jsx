import htmlLogo from "../assets/HTML.png";
import cssLogo from "../assets/CSS.png";
import bootstrapLogo from "../assets/Bootstrap.svg";
import tailwindLogo from "../assets/Tailwind.png";
import jsLogo from "../assets/Javascript.svg";
import reactLogo from "../assets/React.png";
import reduxLogo from "../assets/Redux.svg";
import nodejsLogo from "../assets/NodeJs.svg";
import expressLogo from "../assets/Express.png";
import mongodblogo from "../assets/MongoDB.svg";
import mongooseLogo from "../assets/Mongoose.png";
import gitLogo from "../assets/Gitu.svg";
import githubLogo from "../assets/GitHub.png";
import vercelLogo from "../assets/Vercel.jpg";
import postmanLogo from "../assets/Postman.png";
import m from "../assets/skillsBgM.png";

const Skills = () => {
  const frontendSkillsData = [
    {
      name: "HTML",
      logo: htmlLogo,
    },
    {
      name: "CSS",
      logo: cssLogo,
    },
    {
      name: "Bootstrap",
      logo: bootstrapLogo,
    },
    {
      name: "Tailwind CSS",
      logo: tailwindLogo,
    },
    {
      name: "Javascript",
      logo: jsLogo,
    },
    {
      name: "React JS",
      logo: reactLogo,
    },
    {
      name: "Redux",
      logo: reduxLogo,
    },
  ];

  const backendSkillsData = [
    {
      name: "Node Js",
      logo: nodejsLogo,
    },
    {
      name: "Express JS",
      logo: expressLogo,
    },
    {
      name: "Mongo DB",
      logo: mongodblogo,
    },
    {
      name: "Mongoose",
      logo: mongooseLogo,
    },
  ];

  const otherSkillsData = [
    {
      name: "Git",
      logo: gitLogo,
    },
    {
      name: "Github",
      logo: githubLogo,
    },
    {
      name: "Vercel",
      logo: vercelLogo,
    },
    {
      name: "Postman",
      logo: postmanLogo,
    },
  ];

  return (
    <div
      className="w-full bg-[#f7f8fc] dark:bg-gray-900 pt-24 pb-8 relative"
      id="skills"
    >
      <img src={m} alt="" className="absolute top-0 left-0" />
      <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto ">
        <div className="text-3xl text-blue-700 font-bold tracking-wider text-center">
          Skills
        </div>
        <div
          className="w-full sm:w-3/4 md:w-1/2 mx-auto text-xl text-black dark:text-white text-center
          py-3"
        >
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </div>
        <div className="flex flex-wrap gap-5 justify-center pt-4">
          <div
            className="flex flex-col items-center gap-y-2 border border-[#6d7ace] dark:border-[#6b92c9] rounded-lg p-2 sm:p-4 
            max-w-xl"
          >
            <p className=" text-blue-800 dark:text-blue-500 text-2xl font-bold -mt-2">
              Frontend
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {frontendSkillsData.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-x-2 border border-[#6d7ace] dark:border-[#6b92c9] w-fit px-3 py-2 rounded-lg"
                >
                  <img src={skill.logo} alt="" className="w-10" />
                  <p className="text-lg text-black dark:text-white">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="flex flex-col items-center gap-y-2 border border-[#6d7ace] dark:border-[#6b92c9] rounded-lg p-2 sm:p-4 
            max-w-xl "
          >
            <p className=" text-blue-800 dark:text-blue-500 text-2xl font-bold -mt-2">
              Backend
            </p>
            <div className="flex flex-wrap gap-3 justify-center ">
              {backendSkillsData.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-x-2 border border-[#6d7ace] dark:border-[#6b92c9] w-fit px-3 py-2 rounded-lg"
                >
                  <img src={skill.logo} alt="" className="w-10" />
                  <p className="text-lg text-black dark:text-white">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="flex flex-col items-center gap-y-2 border border-[#6d7ace] dark:border-[#6b92c9] rounded-lg p-2 sm:p-4 
            max-w-xl "
          >
            <p className=" text-blue-800 dark:text-blue-500 text-2xl font-bold -mt-2">
              Others
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {otherSkillsData.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-x-2 border border-[#6d7ace] dark:border-[#6b92c9] w-fit px-3 py-2 rounded-lg
                    "
                >
                  <img src={skill.logo} alt="" className="w-10 " />
                  <p className="text-lg text-black dark:text-white">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
