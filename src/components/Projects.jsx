import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AR-Based Tool Condition Monitoring",
      description:
        "Engineered an AR-based, real-time tool condition monitoring system integrating IoT sensors and SoCs (Raspberry Pi) with deep learning for predictive maintenance and tool failure detection. Used WebSockets and MQTT.",
      demo: "https://drive.google.com/file/d/1KMngdrW8YRtTRhCM1_pvNir3VDpuRYlx/view?usp=sharing",
      code: "",
    },
    {
      id: 2,
      title: "Polaris Website (SMP)",
      description:
        "Revamped the SMP Polaris website using HTML, CSS, and PHP for smooth performance. Improved UI/UX and load time by 80%.",
      demo: "https://polaris.iitbhilai.ac.in/",
      code: "https://drive.google.com/file/d/1q2_luVsT3FVmGMl2Ty5_L6IvjB4O-GAL/view",
    },
    {
      id: 3,
      title: "NeuraPix – AI Image Generator",
      description:
        "Developed a full-stack AI image generator using MERN stack and Hugging Face API. Added dark mode, 'Surprise Me' feature, and a searchable community gallery.",
      demo: "https://neurapix-frontend-3.onrender.com/",
      code: "https://github.com/rohit02k5/NeuraPix-AI-IMAGE-GENERATOR-",
    },
    {
      id: 4,
      title: "Quantum Chat – AI Workspace",
      description:
        "Built an AI chatbot workspace using MERN stack, Gemini API, and Plotly.js. Features summarization, sentiment analysis, AI image generation, and data visualization.",
      demo: "https://quantum-chat-frontend.onrender.com/login",
      code: "https://github.com/rohit02k5/QUANTUM-CHAT-AI-WORKSPACE",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "Personal portfolio website. Developed the front-end using React.js and integrated Tailwind CSS for responsive design. Featuring extreme dark mode and smooth animations.",
      demo: "/",
      code: "https://github.com/rohit02k5/Portfolio-Website",
    },
  ];

  return (
    <div
      name="projects"
      className="w-full text-white py-20 bg-transparent"
    >
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-12 text-center">
          <p className="text-4xl sm:text-5xl font-bold inline text-transparent bg-clip-text bg-gradient-to-r from-primary to-neon-blue drop-shadow-md">
            Projects
          </p>
          <p className="py-6 text-gray-400 text-lg">Check out some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-0">
          {projects.map(({ id, title, description, demo, code }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              className="group relative rounded-xl overflow-hidden glass-card hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Neon Glow Border Effect on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-all duration-300"></div>

              <div className="p-8 flex flex-col h-full relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
                <p className="text-slate-300 mb-8 leading-relaxed flex-grow">
                  {description}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-6 rounded-lg bg-gradient-to-r from-primary to-purple-600 text-white font-semibold text-center hover:shadow-neon-purple/50 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                  {code && (
                    <a
                      href={code}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 px-6 rounded-lg border border-white/20 hover:bg-white/10 text-white font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <FaGithub size={20} /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
