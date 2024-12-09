import React from "react";
import heroImage from "../Assets/rohit.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div id="home" className="bg-gradient-to-b from-black via-black to-gray-800 h-full w-full">
      <div className="flex flex-col justify-center h-full w-10/12 mx-auto items-center px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl mt-40 sm:text-7xl font-bold text-white hover:scale-105">I'm a Student</h2>
          <p className="text-gray-400 font-medium text-xl mt-4">
            Hello! I'm Rohit, a sophomore pursuing a B.Tech in Electrical Engineering at IIT Bhilai. I am deeply passionate about exploring and leveraging emerging technologies, with a keen interest in web development, data structures, and algorithmic problem-solving. With a solid foundation in programming and development, I enjoy building innovative projects and solving challenging problems. I am always eager to learn, grow, and contribute to exciting tech initiatives.
          </p>
          <div>
            <a
              href="https://drive.google.com/uc?export=download&id=12oX_6641Dssb6XGhqIBtAQ1qIbpCYXXo"
              download="Rohit_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white cursor-pointer w-48 py-3 my-7 flex justify-center items-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Resume
              <span className="flex justify-center items-center group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} />
              </span>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center mt-28 w-full">
          <img
            className="rounded-3xl w-96 h-auto transition-transform duration-500 ease-in-out transform hover:scale-200"
            src={heroImage}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

