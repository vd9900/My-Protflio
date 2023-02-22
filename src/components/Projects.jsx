import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Projects = () => {
  // const portfolios = [
  //   {
  //     id: 1,
  //     src: arrayDestruct,
  //   },
  //   {
  //     id: 2,
  //     src: reactParallax,
  //   },
  //   {
  //     id: 3,
  //     src: navbar,
  //   },
  //   {
  //     id: 4,
  //     src: reactSmooth,
  //   },
  //   {
  //     id: 5,
  //     src: installNode,
  //   },
  //   {
  //     id: 6,
  //     src: reactWeather,
  //   },
  // ];

  return (
    <div name="projects" className="take-up w-full text-white h-auto">
      <div className="max-w-screen-lg p-4  py-10 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-5">Check out some of my work right here</p>
        </div>
        <div className="">
          <div className="flex flex-col sm:flex-row sm:gap-12 py-8">
            <div className="sm:w-3/4">
              <img
                src="https://res.cloudinary.com/sebkay/image/upload/v1643826868/app.harlist.io_vvgqlv.webp"
                alt="king"
                className=" w-full sm:w-full"
              />
            </div>
            <div className="flex flex-col">
              <div className="py-5">
                <p className="text-3xl font-bold inline border-b-2 border-gray-400">
                  e-commerce website
                </p>
              </div>
              <p className="text-1xl ">
                e-commerce website creation using MERN-Stack.Both funcitonlity
                sell a product and buy.
              </p>
              <ul className="py-4 text-slate-400">
                <li className="flex items-center gap-1 justify-start">
                  <MdArrowForwardIos fontSize={20} />
                  Login & SignUP
                </li>
                <li className="flex py-2 items-center gap-1 justify-start">
                  <MdArrowForwardIos fontSize={20} />
                  Search & Filter
                </li>
                <li className="flex items-center gap-1 justify-start">
                  <MdArrowForwardIos fontSize={20} />
                  Responsive
                </li>
              </ul>
              <div className="flex items-center justify-evenly py-4">
                <button className="text-gray-300 btn w-28 py-2 flex items-center justify-center rounded-md  cursor-pointer">
                  Demo
                </button>
                <button className="text-gray-300 btn w-28 py-2 flex items-center justify-center rounded-md cursor-pointer">
                  Code
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col   sm:flex-row sm:gap-12 py-8">
            <div className="sm:w-3/4  container-shadow">
              <img
                src="https://res.cloudinary.com/sebkay/image/upload/v1643826868/app.harlist.io_vvgqlv.webp"
                alt="king"
                className=" w-full  sm:w-full "
              />
            </div>
            <div className="flex flex-col">
              <div className="py-5">
                <p className="text-3xl font-bold inline border-b-2 border-gray-400">
                  e-commerce website
                </p>
              </div>
              <p className="text-1xl ">
                e-commerce website creation using MERN-Stack.Both funcitonlity
                sell a product and buy.
              </p>
              <ul className="py-4 text-slate-400">
                <li className="flex items-center gap-1 justify-start">
                  <MdArrowForwardIos fontSize={20} />
                  Login & SignUP
                </li>
                <li className="flex py-2 items-center gap-1 justify-start">
                  <MdArrowForwardIos fontSize={20} />
                  Search & Filter
                </li>
                <li className="flex items-center gap-1 justify-start">
                  <MdArrowForwardIos fontSize={20} />
                  Responsive
                </li>
              </ul>
              <div className="flex items-center justify-evenly py-4">
                <button className="text-white w-28 py-2 flex items-center justify-center rounded-md btn cursor-pointer">
                  Demo
                </button>
                <button className="text-white w-28 py-2 flex items-center justify-center rounded-md btn cursor-pointer">
                  Code
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-12 py-8">
            <div className="sm:w-3/4">
              <img
                src="https://res.cloudinary.com/sebkay/image/upload/v1643826868/app.harlist.io_vvgqlv.webp"
                alt="king"
                className=" w-full sm:w-full"
              />
            </div>
            <div className="flex flex-col">
              <div className="py-5">
                <p className="text-3xl font-bold inline border-b-2 border-gray-400">
                  Crypto-Coin Tracker
                </p>
              </div>
              <p className="text-1xl ">
                Track your coin using crypto-tracker and you can buy sell the
                coin any time on this platform.
              </p>
              <ul className="py-4 text-slate-400">
                <li className="flex items-center gap-1 justify-start">
                  <MdArrowForwardIos fontSize={20} />
                  Track the Coin
                </li>
                <li className="flex py-2 items-center gap-1 justify-start">
                  <MdArrowForwardIos fontSize={20} />
                  Buy & Sell
                </li>
                <li className="flex items-center gap-1 justify-start">
                  <MdArrowForwardIos fontSize={20} />
                  Responsive
                </li>
              </ul>
              <div className="flex items-center justify-evenly py-4">
                <button className="text-white w-28 py-2 flex items-center justify-center rounded-md btn cursor-pointer">
                  Demo
                </button>
                <button className="text-white w-28 py-2 flex items-center justify-center rounded-md btn cursor-pointer">
                  Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
