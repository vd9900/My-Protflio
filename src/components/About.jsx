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
      name="about"
      className="w-full h-auto py-2 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg px-4 py-20 mx-auto flex flex-col justify-center w-full h-full">
        <div className="max-sm:pt-5 sm:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="flex flex-col items-center sm:flex-row md:gap-20 md:pt-8">
          <div className=" sm:p-4 p-4 flex sm:w-screen   flex-row items-center justify-center">
            <img
              className="rounded-full w-64 h-64 sm:w-72 sm:h-72 object-cover  border-solid border-4 border-gray-500 "
              src={myProfile}
              alt="mine"
            />
          </div>
          <div className="p-5">
            <p className="text-xl italic">
              <h3 className="text-4xl pb-2 not-italic">I'm Vinith,</h3>
              amet consectetur adipisicing elit. Eius, deserunt illum mollitia
              officiis qui exercitationem perferendis neque quasi a recusandae
              necessitatibus tempora iusto! Blanditiis error iste, totam fugiat
              recusandae rerum laborum perferendis molestiae aperiam asperiores
            </p>
            <div className=" flex flex-col">
              <h3 className=" text-2xl not-italic py-4">Find me on : {")"} </h3>
              <div className="flex  items-center gap-4 sm:gap-5 justify-center">
                <a
                  href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=vinithdevadiga@gmail.com&tf=1
"
                >
                  <span className="cursor-pointer hover:bg-opacity-40 flex bg-stone-700 w-14 h-14 rounded-full items-center justify-center">
                    <HiOutlineMail fontSize={35} />
                  </span>
                </a>
                <a href="mailto:vinithdevadiga@gmail.com">
                  <span className="cursor-pointer hover:bg-opacity-40 flex bg-stone-700 w-14 h-14 rounded-full items-center justify-center">
                    <FaLinkedinIn fontSize={35} />
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/vinith-devadiga-79a342231/">
                  <span className="cursor-pointer hover:bg-opacity-40 flex bg-stone-700 w-14 h-14 rounded-full items-center justify-center">
                    <AiOutlineInstagram fontSize={35} />
                  </span>
                </a>
                <span className="cursor-pointer hover:bg-opacity-40 flex bg-stone-700 w-14 h-14 rounded-full items-center justify-center">
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
