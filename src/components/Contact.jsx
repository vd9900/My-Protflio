import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-auto take-down py-20 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            text me
          </p>
          <p className="py-6">
            I just can't stop checking my phone for your messges.
          </p>
        </div>

        <div className=" flex  items-center">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="name"
              required
              className="p-2  btn border-2 rounded-md text-white focus:outline-none "
            />
            <input
              type="text"
              name="email"
              placeholder="email "
              required
              className="my-4 p-2 bg-transparent btn border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="message..."
              rows="8"
              required
              className="p-2 bg-transparen btn border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white btn px-8 py-3 my-8  flex mr-auto items-center rounded-md hover:translate-y-1 duration-300">
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
