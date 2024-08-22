import React, { useState } from "react";
import Profile from "../Image/yashpal_profile.jpg";
import html from "../Image/html.png";
import css from "../Image/css.png";
import tailwind from "../Image/Tailwind.png";
import django from "../Image/django.png";
import nodejs from "../Image/nodejs.png";
import python from "../Image/python.png";
import react from "../Image/react.png";
import reactredux from "../Image/react-redux.png";
import mysql from "../Image/mysql.png";
import github from "../Image/github.png";
import git from "../Image/git.png";
import shopsy from "../Image/shopsy.png";
import taskManager from "../Image/task-manager.png";
import interviewease from "../Image/InterviewEase.png";
import yashpalsingh_resume from '../assets/YashpalSingh_Resume2024.pdf'
import MenuIcon from "@mui/icons-material/Menu";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="flex flex-col  bg-background h-screen md:flex-row">
        {/* mobile-device */}
        <div
          className={`background-color ${
            menuOpen ? "max-md:flex" : "md:hidden"
          }`}
        >
          {/* <MenuIcon
            style={{height:'3rem', width: '3rem'}}
            className="text-white cursor-pointer"
            onClick={toggleMenu}
          /> */}
          <img
            src={Profile}
            className="h-8 w-8 rounded-full m-2 outline outline-zinc-600"
            alt=""
            onClick={toggleMenu}
          />
        </div>
        <div
          onClick={() => setMenuOpen(false)}
          className={`custom-width background-color bg-gray-700 flex flex-col items-center m-2 rounded-lg shadow-md transform transition-transform duration-300 max-md:w-full max-md:h-screen max-md:mt-10 max-md:rounded-none ${
            menuOpen ? "translate-x-0 " : "-translate-x-full"
          } md:translate-x-0 md:static fixed z-50`}
        >
          <h1 className="font-poppins text-slate-50 text-2xl font-bold px-4 mt-4 text-center max-md:text-lg max-md:px-0 max-md:mt-2">
            Yashpal Singh Chouhan
          </h1>
          <img
            src={Profile}
            alt="Profile-image"
            className="mt-4 h-36 w-36 rounded-2xl md:mt-2 max-md:w-28 max-md:h-28"
          />
          <p className="font-poppins text-sm text-slate-300 mt-8 max-md:text-xs lg:mt-2">
            yashpalsinghchouhan764
          </p>
          <span className="font-poppins text-sm text-slate-300 text-center max-md:text-xs">
            @gmail.com
          </span>
          <span className="font-poppins text-slate-300 mt-2 font-bold md:text-xs">
            Indore, India
          </span>
          <div className="flex flex-row gap-4 mt-8 cursor-text text-slate-300">
            <a
              href="https://www.linkedin.com/in/yashpal-singh-chouhan-907819224"
              className="underline underline-offset-4"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/Yashpalsinghchouhan11"
              className="underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://x.com/Yashpal_11"
              className="underline underline-offset-4"
            >
              X
            </a>
          </div>
          <button className="border-2 border-gray-500 text-gray-500 font-semibold py-2 px-4 mt-4 rounded-lg hover:bg-gray-500 hover:text-white transition duration-300 ">
            <a href={yashpalsingh_resume} target="_blank" className="font-poppins font-semibold text-slate-300 ">
              Resume
            </a>
          </button>
          {/* <button className="border-2 border-gray-500 text-gray-500 font-semibold py-2 px-4 mt-4 rounded-lg hover:bg-gray-500 hover:text-white transition duration-300 ">
            <a href="#" className="font-poppins font-semibold text-slate-300 ">
              Get in touch
            </a>
          </button> */}
        </div>

        <div
          onClick={() => setMenuOpen(false)}
          className="custom-width-2 background-color bg-gray-700 flex flex-col m-2 ml-0 rounded-lg shadow-md overflow-y-auto max-md:w-full max-md:mt-0 max-md:rounded-none"
        >
          <h1 className="text-poppins font-bold text-white text-4xl pl-8 mt-12 leading-10 max-md:text-3xl max-md:pl-4 max-md:mt-8">
            <span className="">&#128075;</span> I'm Yashpal,
            <br />
            Software Developer
          </h1>

          <h4 className="text-poppins font-semibold text-slate-300 text-xl px-8 mt-24 max-md:text-md max-md:pl-4 max-md:mt-8">
            About me,
          </h4>
          <p className="text-poppins text-slate-300 text-md pl-8 mt-8 leading-8 max-md:text-sm max-md:pl-4 max-md:mt-8 max-md:leading-6">
            I am a passionate Full Stack Developer with expertise in front-end
            technologies like HTML, CSS, JavaScript, and React, combined with
            strong backend skills in Python and Django. With a solid foundation
            in computer science, I excel at building scalable, high-performance
            applications. I thrive on solving complex problems and am dedicated
            to continuous learning to stay at the forefront of the latest tech
            trends. My commitment to delivering quality code, along with my
            collaborative spirit, ensures that I contribute effectively to every
            project I work on.
          </p>
          <h1 className="text-center text-3xl font-poppins font-bold text-slate-50 my-8 underline underline-offset-8 underline-gray-300 max-md:text-xl max-md:my-4 max-md:underline-offset-4">
            Experience
          </h1>
          <div className="flex  items-center justify-around mt-8 pl-8 max-md:mt-4 max-md:pl-4 max-md:flex-col">
            <div className="flex flex-col items-center mx-4 max-md:mx-2 max-md:mb-8">
              <h2 className="bg-zinc-700 text-slate-50 font-poppins font-medium p-2">
                Python Intern [Fealty Technologies]
              </h2>
              <h6 className="text-slate-50 font-poppins font-medium my-4">
                June 2023 - October 2023
              </h6>
              <p className="flex flex-col items-start text-slate-50 font-sen font-extralight">
                <span className="">
                  ‣ Developed and implemented a scalable automation web
                  application using Django, enhancing operational efficiency.
                </span>
                <span className="">
                  ‣ Gained practical experience in Python (Django) and MySQL,
                  contributing to the backend development of live projects
                </span>
                <span className="">
                  ‣ Collaborated closely with the development team, playing a
                  key role in project development, troubleshooting, and
                  implementation.
                </span>
              </p>
            </div>
          </div>
          <h1 className="text-center text-3xl font-poppins font-bold text-slate-50 my-8 underline underline-offset-8 max-md:text-xl max-md:my-4 max-md:underline-offset-4">
            Technologies
          </h1>

          <div className="grid grid-cols-6 gap-8 p-8 max-md:grid-cols-4 max-md:gap-4">
            <div className="h-24 w-24 bg-white shadow-lg flex items-center justify-center max-md:h-14 max-md:w-14">
              <img src={html} alt="HTML5" className="bg-cover rounded-lg" />
            </div>
            <div className="h-24 w-24 bg-white  shadow-lg flex items-center justify-center max-md:h-14 max-md:w-14">
              <img src={css} alt="css" className="bg-cover rounded-lg" />
            </div>
            <div className="h-24 w-24 bg-white  shadow-lg flex items-center justify-center max-md:h-14 max-md:w-14">
              <img
                src={tailwind}
                alt="tailwind"
                className="bg-cover rounded-lg"
              />
            </div>
            <div className="h-24 w-24 bg-white shadow-lg flex items-center justify-center max-md:h-14 max-md:w-14">
              <img src={react} alt="react" className="bg-cover rounded-lg" />
            </div>
            <div className="h-24 w-24 bg-white shadow-lg flex items-center justify-center max-md:h-14 max-md:w-14">
              <img
                src={reactredux}
                alt="redux"
                className="bg-cover rounded-lg"
              />
            </div>
            <div className="h-24 w-24 bg-white shadow-lg flex items-center justify-center max-md:h-14 max-md:w-14">
              <img src={nodejs} alt="nodejs" className="bg-cover rounded-lg" />
            </div>
            <div className="h-24 w-24 bg-white shadow-lg flex items-center justify-center max-md:h-14 max-md:w-14">
              <img src={python} alt="python" className="bg-cover rounded-lg" />
            </div>
            <div className="h-24 w-24 bg-white shadow-lg flex items-center justify-center max-md:h-14 max-md:w-14">
              <img src={django} alt="python" className="bg-cover rounded-lg" />
            </div>
            <div className="h-24 w-24 bg-white shadow-lg flex items-center justify-center max-md:h-14 max-md:w-14">
              <img src={mysql} alt="mysql" className="bg-cover rounded-lg" />
            </div>
            <div className="h-24 w-24 bg-white shadow-lg flex items-center justify-center max-md:h-14 max-md:w-14">
              <img src={git} alt="git" className="bg-cover rounded-lg" />
            </div>
            <div className="h-24 w-24 bg-white shadow-lg flex items-center justify-center max-md:h-14 max-md:w-14">
              <img src={github} alt="github" className="bg-cover rounded-lg" />
            </div>
          </div>
          <h2 className="text-center text-3xl font-poppins font-bold text-slate-50 my-8 underline underline-offset-8 underline-slate-500 max-md:text-xl max-md:my-4 max-md:underline-offset-4">
            Projects
          </h2>
          <div className="grid grid-cols-4 gap-8 p-8 max-md:grid-cols-2 max-md:gap-4">
            <a
              href="https://github.com/Yashpalsinghchouhan11"
              target="_blank"
              className="bg-zinc-800 p-2 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-600 hover:-translate-y-4 hover:scale-110"
            >
              <div className="">
                <img
                  src={shopsy}
                  alt="HTML5"
                  className="rounded-lg h-36 w-52 max-md:h-32 max-md:w-40"
                />
              </div>
              <h2 className=" text-md font-poppins text-slate-300 my-2">
                Market-Place
              </h2>
              <span className="text-md font-poppins text-slate-300 my-2">
                The project's primary goal is to develop a user-friendly C2C
                website that facilitates the buying and selling of various
                items.
              </span>
            </a>
            
            <a
              href="https://github.com/Yashpalsinghchouhan11"
              target="_blank"
              className="bg-zinc-800 p-2 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-600 hover:-translate-y-4 hover:scale-110"
            >
              <div className="">
                <img
                  src={interviewease}
                  alt="HTML5"
                  className="rounded-lg h-36 w-52 max-md:h-32 max-md:w-40"
                />
              </div>
              <h2 className=" text-md font-poppins text-slate-300 my-2">
                InterviewEase
              </h2>
              <p className=" text-md font-poppins text-slate-300 my-2">
                Developed InterviewEase, a web application for users to prepare
                for theoretical interview questions.
              </p>
            </a>
            <a
              href="https://task-manager-dusky-eight.vercel.app/"
              target="_blank"
              className="bg-zinc-800 p-2 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-600 hover:-translate-y-4 hover:scale-110"
            >
              <div className="">
                <img
                  src={taskManager}
                  alt="HTML5"
                  className="rounded-lg h-36 w-52 max-md:h-32 max-md:w-40"
                />
              </div>
              <h2 className=" text-md font-poppins text-slate-300 my-2">
                Task-Manager
              </h2>
              <p className=" text-md font-poppins text-slate-300 my-2">
                Manage tasks effortlessly with our Task-Manager app. Add tasks
                with due dates, edit or remove them, and mark as complete with a
                click
              </p>
            </a>
          </div>
        </div>
        {/* <div className="custom-width-3 background-color bg-gray-700 flex flex-col items-center m-2 ml-0 rounded-lg shadow-md">
          <div className="font-poppins  flex flex-col items-center mt-32 text-slate-300 ">
            <a href="About-me" className="underline underline-offset-4 py-4">
              About me
            </a>
            <a href="experience" className="underline underline-offset-4 py-4">
              Experience
            </a>
            <a href="" className="underline underline-offset-4 py-4">
              Skills
            </a>
            <a href="" className="underline underline-offset-4 py-4">
              Work
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
}
