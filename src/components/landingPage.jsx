import React, { useState } from "react";
import Profile from "../Image/yashpal_profile.jpg";
import html_logo from "../Image/htmllogo.jpg";
import css_logo from "../Image/csslogo.png";
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
        <div className={`${menuOpen ? "max-md:flex":"md:hidden"}`}>
          {/* <MenuIcon
            style={{height:'3rem', width: '3rem'}}
            className="text-white cursor-pointer"
            onClick={toggleMenu}
          /> */}
          <img src={Profile} className="h-8 w-8 rounded-full m-2 outline outline-zinc-600" alt="" onClick={toggleMenu} />
        </div>
        <div
          onClick={() => setMenuOpen(false)}
          className={`custom-width background-color bg-gray-700 flex flex-col items-center m-2 rounded-lg shadow-md transform transition-transform duration-300 max-md:w-full max-md:h-screen max-md:mt-16 ${
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
            <a href="#" className="underline underline-offset-4">
              Linkedin
            </a>
            <a href="#" className="underline underline-offset-4">
              GitHub
            </a>
            <a href="#" className="underline underline-offset-4">
              X
            </a>
          </div>
          <button className="border-2 border-gray-500 text-gray-500 font-semibold py-2 px-4 mt-4 rounded-lg hover:bg-gray-500 hover:text-white transition duration-300 ">
            <a href="#" className="font-poppins font-semibold text-slate-300 ">
              Resume
            </a>
          </button>
          <button className="border-2 border-gray-500 text-gray-500 font-semibold py-2 px-4 mt-4 rounded-lg hover:bg-gray-500 hover:text-white transition duration-300 ">
            <a href="#" className="font-poppins font-semibold text-slate-300 ">
              Get in touch
            </a>
          </button>
        </div>

        <div
          onClick={() => setMenuOpen(false)}
          className="custom-width-2 background-color bg-gray-700 flex flex-col m-2 ml-0 rounded-lg shadow-md overflow-y-auto max-md:w-full"
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
            Hello! I'm Yashpal Singh Chouhan, I have a solid foundation in
            computer science and a drive to continuously learn and grow.
            Throughout my academic journey, I have honed my skills in various
            programming languages and frameworks, particularly in backend
            development using Python and Django. My passion for technology is
            matched by my enthusiasm for sports, especially cricket. I am always
            eager to take on new challenges and contribute effectively to any
            project I am a part of.
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
                <span className="">‣ Worked on live projects.</span>
                <span className="">
                  ‣ Gained hands-on experience in Python (Django), MySQL.{" "}
                </span>
                <span className="">
                  ‣ Contributed to project development and implementation.
                </span>
              </p>
            </div>
            <div className="flex flex-col items-center mx-4 max-md:mx-2">
              <h2 className="bg-zinc-700 text-slate-50 font-poppins font-medium p-2">
                Python Intern [Fealty Technologies]
              </h2>
              <h6 className="text-slate-50 font-poppins font-medium my-4">
                June 2023 - October 2023
              </h6>
              <p className="flex flex-col items-start text-slate-50 font-sen font-extralight">
                <span className="">‣ Worked on live projects.</span>
                <span className="">
                  ‣ Gained hands-on experience in Python (Django), MySQL.{" "}
                </span>
                <span className="">
                  ‣ Contributed to project development and implementation.
                </span>
              </p>
            </div>
          </div>
          <h1 className="text-center text-3xl font-poppins font-bold text-slate-50 my-8 underline underline-offset-8 max-md:text-xl max-md:my-4 max-md:underline-offset-4">
            Technologies
          </h1>

          <div className="grid grid-cols-4 gap-8 p-8 max-md:grid-cols-2 max-md:gap-4">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center justify-center">
              <img src={html_logo} alt="HTML5 Logo" className="h-16 w-16" />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center justify-center">
              <img src={css_logo} alt="CSS3 Logo" className="h-16 w-16" />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center justify-center">
              <img
                src="path/to/javascript-logo.png"
                alt="JavaScript Logo"
                className="h-16 w-16"
              />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center justify-center">
              <img
                src="path/to/react-logo.png"
                alt="React Logo"
                className="h-16 w-16"
              />
            </div>
          </div>
          <h2 className="text-center text-3xl font-poppins font-bold text-slate-50 my-8 underline underline-offset-8 underline-slate-500 max-md:text-xl max-md:my-4 max-md:underline-offset-4">
            Projects
          </h2>
          <div className="grid grid-cols-3 gap-8 p-8 max-md:grid-cols-1">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
              <img src={css_logo} alt="HTML5" className="h-32 w-52" />
              <h2 className=" text-xl font-poppins text-slate-300 my-4">
                HTML5
              </h2>
              <p className="font-thin text-slate-300 px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                perspiciatis dolorum totam porro dignissimos vel numquam?
                Tempore eligendi quae ipsam totam illo molestias cumque cum.
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
              <img src={css_logo} alt="HTML5" className="h-32 w-52" />
              <h2 className=" text-xl font-poppins text-slate-300 my-4">
                HTML5
              </h2>
              <p className="font-thin text-slate-300 px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                perspiciatis dolorum totam porro dignissimos vel numquam?
                Tempore eligendi quae ipsam totam illo molestias cumque cum.
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
              <img src={css_logo} alt="HTML5" className="h-32 w-52" />
              <h2 className=" text-xl font-poppins text-slate-300 my-4">
                HTML5
              </h2>
              <p className="font-thin text-slate-300 px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                perspiciatis dolorum totam porro dignissimos vel numquam?
                Tempore eligendi quae ipsam totam illo molestias cumque cum.
              </p>
            </div>
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
