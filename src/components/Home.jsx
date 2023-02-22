import React from "react";
import HeroImage from "../assets/profile.png";
import { HiDownload } from "react-icons/hi";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import myResume from "../assets/myResume.pdf";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen md:h-screen w-full pt-10  take-up box-shadow flex flex-col items-center justify-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col gap-20 items-center h-full p-10 md:flex-row">
        <div className="flex flex-col justify-center h-full sm:w-2/3">
          <div className="max-sm:py-3  h-40 max-sm:w-72  p-2 ">
            <h3 className="text-3xl md:text-4xl  lg:w-96 font-bold font-mono text-gray-300">
              <Typewriter
                options={{
                  cursor: "_",
                  loop: true,
                  autoStart: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hey 👋, thank you for visiting! ")
                    .pauseFor(1000)
                    .deleteAll()
                    // .typeString("I'm a web developer.")
                    // .pauseFor(1000)
                    // .deleteAll()
                    // .typeString("I love to code.")
                    // .pauseFor(1000)
                    // .deleteAll()
                    .start();
                }}
              />
            </h3>
          </div>

          <div className="flex gap-5">
            <Link
              to="projects"
              smooth
              duration={500}
              className=" text-gray-300 font-mono hover:translate-y-1 duration-500 text-xl h-12 w-fit px-6 py-3 my-2 flex items-center
rounded-md cursor-pointer btn btn-91"
            >
              my work
            </Link>
            <a
              to="portfolio"
              href={myResume}
              download={"resume(vinith)"}
              target="_blank"
              smooth
              duration={500}
              className="font-mono hover:translate-y-1 duration-300 text-gray-500 w-fit h-12 px-6 py-3 my-2 flex items-center rounded-md cursor-pointer btn"
            >
              Resume
              <span className="">
                <HiDownload size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div className=" box-border ">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto h-auto min-w-0 sm:min-w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
