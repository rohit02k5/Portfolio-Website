import React from 'react';
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import js from "../Assets/js.png";
import react from "../Assets/react.png";
import c from "../Assets/c.jpg";
import cpp from "../Assets/cpp.png";
import git from "../Assets/git.png";
import open from "../Assets/open.jpg";
import dsa from "../Assets/dsa.png";
import tailwind from "../Assets/tailwind.png";
import node from "../Assets/node.png";
import mongo from "../Assets/mongo.png"
import exp from "../Assets/exp.png";
import mat2 from "../Assets/mat2.jpg";
const Skills = () => {
  return (
    <div id="skills" className="bg-gradient-to-b from-gray-800 to-black w-full h-full text-white">
      <div className="flex flex-col justify-between items-center w-full h-full px-4 md:px-0"> {/* Added padding for responsiveness */}
        <div className="flex flex-col items-center mt-36 md:mt-40"> {/* Adjusted margin-top */}
          <p className="text-6xl inline border-b-4">Skills</p>
          <p className="text-2xl mt-4">These are the tech-stacks I've worked with</p> {/* Added margin-top */}
        </div>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 mt-8"> {/* Added margin-top */}
          <div className="shadow-md hover:scale-110 duration-500 py-2 rounded-xl flex flex-col justify-center items-center">
            <img className="rounded-3xl shadow-2xl shadow-orange-500 w-44 h-44 mx-auto" src={html} alt="HTML" />
            <p className="text-xl mt-4">HTML</p> {/* Added margin-top */}
          </div>
          <div className="shadow-md hover:scale-110 duration-500 py-2 rounded-xl flex flex-col justify-center items-center">
            <img className="rounded-3xl shadow-2xl shadow-blue-500 w-44 h-44 mx-auto" src={css} alt="CSS" />
            <p className="text-xl mt-4">CSS</p> {/* Added margin-top */}
          </div>
          <div className="shadow-md hover:scale-110 duration-500 py-2 rounded-xl flex flex-col justify-center items-center">
            <img className="rounded-3xl shadow-2xl shadow-yellow-500 w-44 h-44 mx-auto" src={js} alt="JavaScript" />
            <p className="text-xl mt-4">JavaScript</p> {/* Added margin-top */}
          </div>
          <div className="shadow-md hover:scale-110 duration-500 py-2 rounded-xl flex flex-col justify-center items-center">
            <img className="rounded-3xl shadow-2xl shadow-blue-500 w-44 h-44 mx-auto" src={react} alt="React" />
            <p className="text-xl mt-4">React</p> {/* Added margin-top */}
          </div>
          <div className="shadow-md hover:scale-110 duration-500 py-2 rounded-xl flex flex-col justify-center items-center">
            <img className="rounded-3xl shadow-2xl shadow-red-500 w-44 h-44 mx-auto" src={c} alt="C" />
            <p className="text-xl mt-4">C</p> {/* Added margin-top */}
          </div>
          <div className="shadow-md hover:scale-110 duration-500 py-2 rounded-xl flex flex-col justify-center items-center">
            <img className="rounded-3xl shadow-2xl shadow-blue-600 w-44 h-44 mx-auto" src={cpp} alt="C++" />
            <p className="text-xl mt-4">C++</p> {/* Added margin-top */}
          </div>
          <div className="shadow-md hover:scale-110 duration-500 py-2 rounded-xl flex flex-col justify-center items-center">
            <img className="rounded-3xl shadow-2xl shadow-gray-400 w-44 h-44 mx-auto" src={git} alt="Git" />
            <p className="text-xl mt-4">Git</p> {/* Added margin-top */}
          </div>
          <div className="shadow-md hover:scale-110 duration-500 py-2 rounded-xl flex flex-col justify-center items-center">
            <img className="rounded-3xl shadow-2xl shadow-green-600 w-44 h-44 mx-auto" src={open} alt="Open Source" />
            <p className="text-xl mt-4">Open Rocket</p> {/* Added margin-top */}
          </div>
          <div className="shadow-md hover:scale-110 duration-500 py-2 rounded-xl flex flex-col justify-center items-center">
            <img className="rounded-3xl shadow-2xl shadow-blue-400 w-44 h-44 mx-auto" src={mongo} alt="Arduino" />
            <p className="text-xl mt-4">MongoDb</p> {/* Added margin-top */}
          </div>
          <div className="shadow-md hover:scale-110 duration-500 py-2 rounded-xl flex flex-col justify-center items-center">
            <img className="rounded-3xl shadow-2xl shadow-yellow-700 w-44 h-44 mx-auto" src={dsa} alt="DSA" />
            <p className="text-xl mt-4">DSA</p> {/* Added margin-top */}
          </div>
          <div className="shadow-md hover:scale-110 duration-500 py-2 rounded-xl flex flex-col justify-center items-center">
            <img className="rounded-3xl shadow-2xl shadow-teal-400 w-44 h-44 mx-auto" src={tailwind} alt="Tailwind CSS" />
            <p className="text-xl mt-4">Tailwind CSS</p> {/* Added margin-top */}
          </div>
          <div className="shadow-md hover:scale-110 duration-500 py-2 rounded-xl flex flex-col justify-center items-center">
            <img className="rounded-3xl shadow-2xl shadow-purple-400 w-44 h-44 mx-auto" src={mat2} alt="VS Code" />
            <p className="text-xl mt-4">MATLAB</p> {/* Added margin-top */}
          </div>
          <div className="shadow-md hover:scale-110 duration-500 py-2 rounded-xl flex flex-col justify-center items-center">
            <img className="rounded-3xl shadow-2xl shadow-purple-400 w-44 h-44 mx-auto" src={node} alt="VS Code" />
            <p className="text-xl mt-4">Node.JS</p> {/* Added margin-top */}
          </div>
          <div className="shadow-md hover:scale-110 duration-500 py-2 rounded-xl flex flex-col justify-center items-center">
            <img className="rounded-3xl shadow-2xl shadow-purple-400 w-44 h-44 mx-auto" src={exp} alt="VS Code" />
            <p className="text-xl mt-4">Express.JS</p> {/* Added margin-top */}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;


