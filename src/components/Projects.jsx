import React from "react";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import photo from "../assets/photo.png";
import { useTheme } from "./ThemeContext";
import home from "../assets/home.png";
import ITCEQ from "../assets/ITCEQ.png";

const Projects = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const projects = [
    {
      name: "BonPlan",
      description:
        "The project involved creating a website that offers personalized food plans and entertainment plans based on users' dietary preferences, budget, and favorite cuisine, recommending restaurants, cafes, and hotels that match their taste and location. This platform allows users to discover new food experiences and uncover hidden gems in their area. I am proud of my work on this project and I believe it demonstrates my skills in web development and user experience design.",
      github: "https://github.com/Takkwwaa/Bon-Plan",
      photo: { photo },
    },
    {
      name: "Reclamation Management System",
      description:
        "Creation of a website that notifies the administrator of reclamations so he can assign them to a specific technical team member and manage projects and resources.Creation of a website that notifies the administrator of reclamations so he can assign them to a specific technical team member and manage projects and resources.",
      github: "https://github.com/Takkwwaa/itceq",
      photo: { ITCEQ },
    },
  ];
  return (
    <section id="projects" className=" m-6">
      <h1
        className={`font-poppins text-center font-bold text-4xl ${
          isDarkMode ? "text-white" : "text-secondary"
        }`}
      >
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-[#f1bb2b] border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className=" md:w-1/2">
                  <img
                    src={project.photo}
                    alt="project"
                    className="rounded-xl shadow-xl hover:opacity-70 h-32 w-32"
                  />
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6 text-secondary">
                    {project.name}
                  </h1>
                  <p
                    className={`text-xl leading-7 mb-4 text-primary ${
                      isDarkMode ? "text-white" : "text-secondary"
                    } `}
                  >
                    {project.description}
                  </p>
                  <a href={project.github} target="_blank">
                    <div className=" align-bottom h-auto w-auto ">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
