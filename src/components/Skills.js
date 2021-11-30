import React from "react";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiJquery } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function Skills() {
  return (
    <div className="bg-gray-100 h-screen">
      <h1 className="font-mono text-4xl fonr-semi-bold text-center pt-32">
        Skill Set
      </h1>
      <div className="container flex justify-between gap-4 p-16 ">
        {/* <div className="left space-y-8 flex-1 "> */}
        <div className="flex flex-col items-center justify-center space-y-2 text-2xl bg-gray-50 rounded-lg shadow-2xl w-1/3 py-1">
          <IoLogoJavascript />
          <h1 className="text-lg">JavaScript</h1>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 text-2xl bg-gray-50 rounded-lg shadow-2xl w-1/3 py-1">
          <FaReact />
          <h1 className="text-lg">React Js</h1>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 text-2xl bg-gray-50 rounded-lg shadow-2xl w-1/3 py-1">
          <IoLogoHtml5 />
          <h1 className="text-lg">HTML</h1>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 text-2xl bg-gray-50 rounded-lg shadow-2xl w-1/3 py-1">
          <IoLogoCss3 />
          <h1 className="text-lg">CSS</h1>
        </div>
        {/* </div> */}
        {/* <div className="right space-y-8 flex-1  "> */}
        <div className="flex flex-col items-center justify-center space-y-2 text-2xl bg-gray-50 rounded-lg shadow-2xl w-1/3 py-1">
          <SiJquery />
          <h1 className="text-lg">JQuery</h1>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 text-2xl bg-gray-50 rounded-lg shadow-2xl w-1/3 py-1">
          <SiTailwindcss />
          <h1 className="text-lg">Tailwind CSS</h1>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 text-2xl bg-gray-50 rounded-lg shadow-2xl w-1/3 py-1">
          <FaBootstrap />
          <h1 className="text-lg">Bootstrap</h1>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 text-2xl bg-gray-50 rounded-lg shadow-2xl w-1/3 py-1">
          <AiFillGithub />
          <h1 className="text-lg">Git/GitHub</h1>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Skills;
