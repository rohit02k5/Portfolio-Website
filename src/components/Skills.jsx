import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "C/C++",
      icon: <SiCplusplus size={40} className="text-blue-500 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />,
    },
    {
      id: 2,
      title: "Python",
      icon: <FaPython size={40} className="text-yellow-400 group-hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />,
    },
    {
      id: 3,
      title: "JavaScript",
      icon: <SiJavascript size={40} className="text-yellow-300 group-hover:drop-shadow-[0_0_10px_rgba(253,224,71,0.8)]" />,
    },
    {
      id: 4,
      title: "React.js",
      icon: <FaReact size={40} className="text-cyan-400 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />,
    },
    {
      id: 5,
      title: "Node.js",
      icon: <FaNodeJs size={40} className="text-green-500 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" />,
    },
    {
      id: 6,
      title: "Express.js",
      icon: <SiExpress size={40} className="text-gray-400 group-hover:drop-shadow-[0_0_10px_rgba(156,163,175,0.8)]" />,
    },
    {
      id: 7,
      title: "MongoDB",
      icon: <SiMongodb size={40} className="text-green-400 group-hover:drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]" />,
    },
    {
      id: 8,
      title: "MySQL",
      icon: <SiMysql size={40} className="text-blue-400 group-hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]" />,
    },
    {
      id: 9,
      title: "Tailwind CSS",
      icon: <SiTailwindcss size={40} className="text-sky-400 group-hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />,
    },
    {
      id: 10,
      title: "Git & GitHub",
      icon: <FaGithub size={40} className="text-gray-200 group-hover:drop-shadow-[0_0_10px_rgba(229,231,235,0.8)]" />,
    },
    {
      id: 11,
      title: "MATLAB",
      icon: <div className="text-xl font-bold bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center group-hover:drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">M</div>,
    },
    {
      id: 12,
      title: "DSA",
      icon: <div className="text-xl font-bold bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center group-hover:drop-shadow-[0_0_10px_rgba(147,51,234,0.8)]">DS</div>,
    },
  ];

  return (
    <div
      name="skills"
      className="w-full py-20 bg-transparent relative"
    >
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-secondary text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
            Skills
          </p>
          <p className="py-6 text-gray-400">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, title, icon }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="group glass-card rounded-xl py-6 flex flex-col items-center justify-center hover:bg-white/5 transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4 transition-all duration-300 transform group-hover:-translate-y-2">{icon}</div>
              <p className="mt-2 font-semibold text-gray-300 group-hover:text-white transition-colors">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
