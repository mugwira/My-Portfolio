import React from "react";
import Flip from "react-reveal/Flip";
import { AiOutlineDownload } from "react-icons/ai";

function Card() {
  return (
    <div>
      <div className="main lg:h-screen py-1 md:py-8 w-3/4 md:w-2/3 mx-auto my-8 md:my-16 rounded-xl shadow-2xl">
        <h1 className="text-center text-3xl md:text-5xl font-semibold font-mono mb-4">
          About me
        </h1>

        <div className="items md:flex">
          <div className="my-pic ml-4 md:ml-24 p-2 rounded">
            <img className="w-48 md:-mb-16" src="./claire.jpg" alt="" />
          </div>

          <div className="bg-blue-50 md:w-2/3 mx-auto py-6 rounded-lg md:-mr-10 filter drop-shadow-xl ">
            <div className="content px-2">
              <h2 className="md:text-3xl font-extrabold md:font-semibold font-mono py-4">
                Mugwira Matsveru
              </h2>
              <h3 className="md:text-2xl pb-2 text-blue-600 md:font-bold">
                Frontend Developer
              </h3>
              <p className="text-sm leading-6 pb-6">
                I help businesses and individuals build their online presence by
                creating responsive and scalable websites and web applications.
                I primarily use JavaScript, React, HTML, CSS/Tailwind among
                other technologies to deliver exceptional user experience.
              </p>
              <Flip left duration={5000}>
                <a
                  className="flex items-center gap-2 lg:gap-4 lg:text-xl 
                  py-0.5 px-2 bg-blue-600 text-white rounded hover:bg-blue-400 w-32 "
                  href="https://drive.google.com/file/d/1mxp9pbkIU6v3irIg93Di3aFAzrxtYwnZ/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <AiOutlineDownload /> Resume
                </a>
              </Flip>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Card;
