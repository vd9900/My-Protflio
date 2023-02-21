import React from "react";
import HeroImage from "../assets/profile.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiDownload} from "react-icons/hi";
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full p-10 md:flex-row">
        <div className="flex flex-col justify-center h-ful sm:w-2/3">
          <h1 className="text-4xl sm:text-7xl  font-bold text-white">
            <Typewriter
            options={{
              cursor:"_",
              loop:true,
              autoStart:true
            }}
            onInit={(typewriter)=>{
              typewriter.typeString("I'm a Full Stack Developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("I love to code.")
              .pauseFor(1000)
              .deleteAll()
              .start()
            }}
            />
          </h1>
          <p className="text-gray-500 py-4 max-w-md">
            I have been working in web development since last year.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Node Js,Express Js,MongoDB and MySql.
          </p>

          <div className="flex gap-5">
            <Link
              to="projects"
              smooth
              duration={500}
              className=" text-white h-12 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-500 to-blue-400  cursor-pointer"
            >
         my work
            </Link>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit h-12 px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-500 to-blue-400  cursor-pointer"
            >
              Resume
              <span className="">
                <HiDownload size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className=" box-border">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto h-full min-w-0 sm:min-w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
