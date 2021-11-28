import React from "react";
import {IoLogoJavascript, IoLogoHtml5, IoLogoCss3} from 'react-icons/io'
import {SiJquery} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'


function Skills() {
  return (
    <div className="bg-gray-100 h-screen">
      <h1 className="font-mono text-4xl fonr-semi-bold text-center pt-16">Skill Set</h1>
      <div className="container flex justify-between gap-4 p-16 ">
        <div className="left space-y-8 flex-1 ">
          <div className="flex flex-col items-center justify-center space-y-2 text-2xl">
            <IoLogoJavascript />
            <h1>JavaScript</h1>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-2xl">
            <FaReact />
            <h1>React Js</h1>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-2xl">
            <IoLogoHtml5 />
            <h1>HTML</h1>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-2xl">
            <IoLogoCss3 />
            <h1>CSS</h1>
          </div>
        </div>
        <div className="right space-y-8 flex-1  ">
          <div className="flex flex-col items-center justify-center space-y-2 text-2xl">
            <SiJquery />
            <h1>JQuery</h1>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-2xl">
            <SiTailwindcss />
            <h1>Tailwind CSS</h1>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-2xl">
            <FaBootstrap />
            <h1>Bootstrap</h1>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-2xl">
            <AiFillGithub />
            <h1>Git/GitHub</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
