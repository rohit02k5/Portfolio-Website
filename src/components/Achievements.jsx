import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaCertificate } from "react-icons/fa";

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            title: "TIH-IoT Chanakya Fellowship (IIT Bombay)",
            details:
                "Selected for the prestigious fellowship to engineer an AR-based HMI system at IIT Bombay.",
            link: "https://drive.google.com/file/d/1KMngdrW8YRtTRhCM1_pvNir3VDpuRYlx/view?usp=sharing",
        },
        {
            id: 2,
            title: "IBITF Technology Innovation Fellowship (IIT Bhilai)",
            details:
                "Selected for the prestigious fellowship to design a secure IoT-based smart campus network at IIT Bhilai.",
            link: "https://drive.google.com/file/d/1En52qWheab6xfy1O9j0SMe6zNNYJK1F5/view",
        },
        {
            id: 3,
            title: "JEE Advanced (AIR 10,398)",
            details:
                "Secured a seat at IIT Bhilai through Joint Entrance Examination Advanced.",
            link: "",
        },
        {
            id: 4,
            title: "Ingenuity Leaderboard Contest - 5th Rank",
            details:
                "Ranked 5th in the competitive programming contest organized by Ingenuity, IIT Bhilai.",
            link: "",
        },
        {
            id: 5,
            title: "Deep Learning Onramp",
            details:
                "MathWorks Certification",
            link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=a5b76e7c-1720-4346-a365-58c10d313613&",
        },
        {
            id: 6,
            title: "MATLAB Onramp",
            details:
                "MathWorks Certification",
            link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=2dd5e19e-aad0-4e03-8793-82be1faa56aa&",
        },
        {
            id: 7,
            title: "Deep Learning with MATLAB",
            details:
                "MathWorks Certification",
            link: "https://matlabacademy.mathworks.com/progress/share/report.html?id=2dd5e19e-aad0-4e03-8793-82be1faa56aa&",
        },
    ];

    return (
        <div
            name="achievements"
            className="w-full text-white py-20 bg-transparent"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-12 text-center">
                    <p className="text-4xl font-bold inline text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                        Achievements
                    </p>
                    <p className="py-6 text-gray-400">Recognitions & Certifications</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {achievements.map(({ id, title, details, link }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card rounded-xl p-6 flex flex-col justify-between hover:bg-white/10 duration-300 relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                <FaTrophy size={80} />
                            </div>
                            <div>
                                <div className="flex items-center mb-4 relative z-10">
                                    <FaTrophy className="text-yellow-400 mr-2 drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]" size={25} />
                                    <h3 className="text-lg font-bold text-gray-100">{title}</h3>
                                </div>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed relative z-10">{details}</p>
                            </div>
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="relative z-10 flex items-center justify-center w-full px-4 py-2 mt-auto duration-200 border border-yellow-400/50 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black font-bold shadow-[0_0_5px_rgba(250,204,21,0.2)]"
                            >
                                <FaCertificate className="mr-2" />
                                View Certificate
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
