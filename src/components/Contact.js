import React from "react";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-gray-300 p-8">
      <div className="container contact-details flex justify-center items-center">
        <div className="flex-1 justify-center socials text-4xl space-y-4 text-blue-800">
          <AiOutlineTwitter />
          <AiFillLinkedin />
          <FaFacebookF />
          <FaGithub />
        </div>
        <div className="contacts w-full bg-gray-900 flex-1">
          <form className="flex flex-col px-8  py-16 px-2 space-y-8">
            <label className="text-gray-200">Name</label>
            <input  className="py-1.5 px-2"type="text" placeholder="Enter full name" />
            <label className="text-gray-200">Email Address</label>
            <input  className="py-1.5 px-2"type="email" placeholder="Enter email address" />
            <label className="text-gray-200">Message</label>
            <textarea className="py-4 px-2" placeholder="Type your message">
            </textarea>
            <button className="px-4 py-2 bg-gray-600 rounded-lg text-gray-200">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
