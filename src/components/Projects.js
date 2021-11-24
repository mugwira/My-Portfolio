import React from "react";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import { FaLongArrowAltRight } from "react-icons/fa";

function Projects() {
  return (
    <div className="main bg-blue-100 pt-8">
      <div className="lg:container py-4 px-2">
        <div className="head text-center">
          <h1 className="text-4xl font-mono font-semibold py-2 filter">
            Projects i built
          </h1>
          <p className="pt-2 pb-12 text-lg">
            Below is a list of some of the projects i have built, together with
            the technologies that i used.
          </p>
        </div>
        <div className="inner md:flex space-y-2 gap-2 lg:gap-12">
          <Slide left>
            <div className="bg-blue-300 rounded-lg ">
              <div className="image ">
                <img className="w-full " src="./Web Dev.png" alt="" />
              </div>
              <div className="title">
                <h1 className="text-xl text-white py-2 px-2">My Portfolio</h1>
                <p className="px-2 text-sm ">
                  A professional website to showcase my programming skills and
                  some of the projects that I have built.
                </p>
                <div className="stacks py-2 px-2 flex gap-4">
                  <a
                    className="px-2 text-white rounded-full bg-blue-600 py-0.5 text-xs"
                    href="home#"
                  >
                    React
                  </a>
                  <a
                    className="px-2 text-white rounded-full bg-blue-600 py-0.5 text-xs"
                    href="home#"
                  >
                    Tailwind CSS
                  </a>
                </div>
                <div className="link py-8 mx-auto px-2">
                  <a
                    className="bg-gray-800 hover:bg-gray-600 text-white rounded flex items-center gap-2 justify-center py-2"
                    href="https://mugwira-weatherapp.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project <FaLongArrowAltRight />
                  </a>
                </div>
              </div>
            </div>
          </Slide>
          <div className="second">
            <Zoom delay={1000} duration={2000}>
              <div className="bg-blue-300 rounded-lg ">
                <div className="image ">
                  <img className="w-full " src="./Web Dev.png" alt="" />
                </div>
                <div className="title">
                  <h1 className="text-xl text-white py-2 px-2">Weather App</h1>
                  <p className="px-2 text-sm ">
                    Utilised openWeatherMap API, React, Tailwind CSS to build a
                    simple app where the user has to enter name of a city to
                    fetch a summary of the weather status.
                  </p>
                  <div className="stacks py-2 px-2 flex gap-4">
                    <a
                      className="px-2 text-white rounded-full bg-blue-600 py-0.5 text-xs"
                      href="home#"
                    >
                      React
                    </a>
                    <a
                      className="px-2 text-white rounded-full bg-blue-600 py-0.5 text-xs"
                      href="home#"
                    >
                      Tailwind CSS
                    </a>
                  </div>
                  <div className="link py-8 mx-auto px-2">
                    <a
                      className="bg-gray-800 hover:bg-gray-600 text-white rounded flex items-center gap-2 justify-center py-2"
                      href="https://mugwira-weatherapp.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project <FaLongArrowAltRight />
                    </a>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
          <div className="third">
            <Slide right>
              <div className="first bg-blue-300 rounded-lg ">
                <div className="image ">
                  <img className="w-full " src="./Web Dev.png" alt="" />
                </div>
                <div className="title">
                  <h1 className="text-xl text-white py-2 px-2">My Portfolio</h1>
                  <p className="px-2 text-sm ">
                    A professional website to showcase my programming skills and
                    some of the projects that I have built.
                  </p>
                  <div className="stacks py-2 px-2 flex gap-4">
                    <a
                      className="px-2 text-white rounded-full bg-blue-600 py-0.5 text-xs"
                      href="home#"
                    >
                      React
                    </a>
                    <a
                      className="px-2 text-white rounded-full bg-blue-600 py-0.5 text-xs"
                      href="home#"
                    >
                      Tailwind CSS
                    </a>
                  </div>
                  <div className="link py-8 mx-auto px-2">
                    <a
                      className="bg-gray-800 hover:bg-gray-600 text-white rounded flex items-center gap-2 justify-center py-2"
                      href="https://mugwira-weatherapp.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project <FaLongArrowAltRight />
                    </a>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
