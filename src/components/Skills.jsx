import React from "react";
import CSS from "../assets/css.png";
import Figma from "../assets/figma.png";
import Firebase from "../assets/firebase.png";
import Github from "../assets/github.png";
import HTML from "../assets/html.png";
import Javascript from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300 grid place-items-center sm:pt-24"
    >
      <div className="w-full h-full">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-bold text-4xl bold border-b-4 border-pink-600 inline ml-8">
            Skills
          </h2>
          <p className="py-4 ml-8">
            These are the technologies I've worked with
          </p>
        </div>
        {/* icon  */}
        <div className="max-w-[1000px] mx-auto pt-4 grid grid-cols-2 md:grid-cols-3 gap-y-8 place-items-center sm:justify-start">
          <div>
            <img
              src={HTML}
              alt=""
              className="w-24 shadow-md shadow-[#040c16] hover:scale-110 p-4 "
            />
            <p className="my-4 text-center">HTML</p>
          </div>
          <div>
            <img
              src={CSS}
              alt=""
              className="w-24 p-4 shadow-md shadow-[#040c16] hover:scale-110 "
            />
            <p className="my-4 text-center">CSS</p>
          </div>
          <div>
            <img
              src={Javascript}
              alt=""
              className="w-24 p-4 shadow-md shadow-[#040c16] hover:scale-110 "
            />
            <p className="my-4 text-center">JavasCript</p>
          </div>
          <div>
            <img
              src={Tailwind}
              alt=""
              className="w-24 p-4 shadow-md shadow-[#040c16] hover:scale-110 "
            />
            <p className="my-4 text-center">Tailwind</p>
          </div>
          <div>
            <img
              src={ReactLogo}
              alt=""
              className="w-24 p-4 shadow-md shadow-[#040c16] hover:scale-110 "
            />
            <p className="my-4 text-center">React</p>
          </div>
          <div>
            <img
              src={Github}
              alt=""
              className="w-24 p-4 shadow-md shadow-[#040c16] hover:scale-110 "
            />
            <p className="my-4 text-center">Github</p>
          </div>
          <div>
            <img
              src="boostrap.png"
              alt=""
              className="w-24 p-4 shadow-md shadow-[#040c16] hover:scale-110 "
            />
            <p className="my-4 text-center">Bootstrap</p>
          </div>
          <div>
            <img
              src={Figma}
              alt=""
              className="w-24 p-4 shadow-md shadow-[#040c16] hover:scale-110 "
            />
            <p className="my-4 text-center">Figma</p>
          </div>
          <div>
            <img
              src={Firebase}
              alt=""
              className="w-24 p-4 shadow-md shadow-[#040c16] hover:scale-110 "
            />
            <p className="my-4 text-center">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
