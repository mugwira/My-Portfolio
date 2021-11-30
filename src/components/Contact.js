import React from "react";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-gray-300 p-8">
      <h1 className="font-mono text-4xl fonr-semi-bold text-center p-16">
        Connect with me
      </h1>
      <div className="container contact-details flex justify-center items-center">
        <div className=" flex flex-1 justify-center socials text-4xl gap-8 text-blue-600">
          <a className="hover:text-blue-500" href="https://twitter.com/home" target="_blank" rel="noreferrer"><AiOutlineTwitter /></a>
          <a className="hover:text-blue-500" href="https://linkedin.com/home" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
          <a className="hover:text-blue-500" href="https://facebook.com/home" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a className="hover:text-blue-500" href="https://github.com/home" target="_blank" rel="noreferrer"><FaGithub /></a>
          
          
          
        </div>
        <div className="contacts w-full bg-gray-900 flex-1">
          <form className="flex flex-col px-8  py-8 px-2 space-y-8">
            <label className="text-gray-200">Name</label>
            <input
              className="py-1.5 px-2"
              type="text"
              placeholder="Enter full name"
            />
            <label className="text-gray-200">Email Address</label>
            <input
              className="py-1.5 px-2"
              type="email"
              placeholder="Enter email address"
            />
            <label className="text-gray-200">Message</label>
            <textarea
              className="py-4 px-2"
              placeholder="Type your message"
            ></textarea>
            <button className="px-4 py-2 bg-gray-600 rounded-lg text-gray-200">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
