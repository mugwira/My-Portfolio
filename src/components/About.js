import React from "react";
import Zoom from 'react-reveal/Zoom'

function About() {
  return (
    <div className="container flex gap-2 my-16 px-32">
      <div className="image flex-1">
        <img className="w-60 " src="./claire.jpg" alt="" />
      </div>
<Zoom duration={2000} delay={500}>
    <div className="main"></div>
      <div className="content font-mono flex-1 self-center">
      <h2 className="text-5xl font-semibold text-gray-700 text-center pb-6">
          About{" "}
          <span className="text-2xl text-blue-500">Mugwira Matsveru </span>
        </h2>
        <p className="leading-8 text-sm">
          A frontend developer specializing in building responsive and scalable
          web applications. If you want to have your website or web application
          built or revamped, just get in touch. I primarily use JavaScript,
          React, HTML, CSS/Tailwind among other technologies to deliver
          exceptional customer experience.
        </p>
      </div>
      </Zoom >
    </div>
  );
}

export default About;
