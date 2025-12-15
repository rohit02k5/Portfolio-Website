import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
    const education = [
        {
            id: 1,
            institution: "Indian Institute of Technology Bhilai",
            degree: "B.Tech. in Electrical Engineering",
            year: "July 2023 – May 2027 (Expected)",
            details: "CGPA: 8.72 (Best SGPA: 9.01)",
        },
        {
            id: 2,
            institution: "TSBIE, FIITJEE",
            degree: "Class XII",
            year: "2023",
            details: "97.92%",
        },
        {
            id: 3,
            institution: "CBSE",
            degree: "Class X",
            year: "2021",
            details: "94.8%",
        },
    ];

    return (
        <div
            name="education"
            className="w-full text-white py-20 bg-transparent"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-12 text-center">
                    <p className="text-4xl font-bold inline text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-primary">
                        Education
                    </p>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {education.map(({ id, institution, degree, year, details }, index) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass-card rounded-xl p-8 flex flex-col items-center text-center hover:bg-white/5 duration-300 border-t-2 border-transparent hover:border-neon-blue"
                        >
                            <div className="bg-neon-blue/10 p-4 rounded-full mb-6 relative">
                                <div className="absolute inset-0 bg-neon-blue/20 blur-md rounded-full"></div>
                                <FaGraduationCap size={40} className="text-neon-blue relative z-10" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white tracking-wide">{institution}</h3>
                            <p className="text-gray-300 font-semibold text-lg">{degree}</p>
                            <p className="text-gray-500 text-sm mt-3">{year}</p>
                            <div className="mt-6 px-4 py-2 bg-neon-blue/10 rounded-full border border-neon-blue/30">
                                <p className="text-neon-blue font-bold tracking-wider text-sm">{details}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
