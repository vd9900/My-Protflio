import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import myProfile from "../assets/myprofile.jpg";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const About = () => {
  return (
    <div
      
      className="w-full h-auto py-2  text-white take-down"
    >
      <div
        className="max-w-screen-lg px-4 py-20 mx-auto flex flex-col gap-8 justify-center w-full h-full"
      >
        <div className="max-sm:pt-5 sm:pb-8">
          <p  name="about" className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div  className="flex flex-col items-center gap-5 sm:flex-row md:gap-20 md:pt-8">
          <div className=" sm:p-4 px-4 py-2 flex sm:w-screen   flex-row items-center justify-center ">
            <img
              className="rounded-full w-64 h-64   skew-x-2  origin-bottom sm:w-72 sm:h-72 object-cover  border-solid border-4 border-gray-500 "
              src={myProfile}
              alt="mine"
            />
          </div>
          <div className="p-5">
            <h3 className="text-4xl pb-2 font-mono">I'm Vinith,</h3>
            <p className="text-md italic w-fit">
              a web developer with a solid background in JavaScript frameworks
              like ReactJS and is also intimately familiar with the MERN
              (MongoDB, Express, React, and Node.js) software stack. I have been
              working in web development since last year,If I cannot do great
              things, I can do small things in a great way.
            </p>
            <div className=" flex flex-col py-2 gap-2 ">
              <h3 className=" text-2xl not-italic py-4">Find me on : {")"} </h3>
              <div className="flex  items-center gap-4 sm:gap-5 justify-center">
                <a
                  href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=vinithdevadiga@gmail.com&tf=1
"
                >
                  <span className="hover:translate-y-2 duration-300 cursor-pointer hover:bg-opacity-40 flex btn text-gray-400  w-14 h-14 rounded-full items-center justify-center">
                    <HiOutlineMail fontSize={35} />
                  </span>
                </a>
                <a href="mailto:vinithdevadiga@gmail.com">
                  <span className="hover:translate-y-2 duration-300 cursor-pointer hover:bg-opacity-40 flex btn text-gray-400  w-14 h-14 rounded-full items-center justify-center">
                    <FaLinkedinIn fontSize={35} />
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/vinith-devadiga-79a342231/">
                  <span className="hover:translate-y-2 duration-300 cursor-pointer hover:bg-opacity-40 flex btn text-gray-400  w-14 h-14 rounded-full items-center justify-center">
                    <AiOutlineInstagram fontSize={35} />
                  </span>
                </a>
                <span className="hover:translate-y-2 duration-300 cursor-pointer hover:bg-opacity-40 flex btn text-gray-400  w-14 h-14 rounded-full items-center justify-center">
                  <AiOutlineTwitter fontSize={35} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
