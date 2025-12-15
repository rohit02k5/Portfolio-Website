import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Project Intern – TIH-IoT Chanakya Fellowship",
            company: "IIT Bombay",
            duration: "Dec 2024 – Oct 2025",
            description:
                "Engineered a real-time, AR-based human–machine interface (HMI) for predictive maintenance, integrating IoT sensors, System on-Chip (SoC) platforms (e.g., Raspberry Pi), and multi-threaded edge computing to streamline operator workflows and enable low-latency decision-making.",
        },
        {
            id: 2,
            role: "Project Intern – IBITF Technology Innovation Fellowship",
            company: "IIT Bhilai",
            duration: "June 2025 – Sep 2025",
            description:
                "Building scalable, modular web applications using full-stack technologies, applying Human–Computer Interaction (HCI) principles, User-Centered Design (UCD), and Usability Testing. The project is currently in its deployment phase and is already being utilized by various sections within IIT Bhilai.",
        },
        {
            id: 3,
            role: "Research Intern",
            company: "DRDO (RCI Hyderabad)",
            duration: "May 2025 – June 2025",
            description:
                "Interned under the supervision of a senior scientist to decode On-Board Control (OBC) message streams. Developed Python-based parsers to convert raw hexadecimal telemetry into structured, human-readable data.",
        },
        {
            id: 4,
            role: "Mentor (SMP)",
            company: "Student Mentorship Program, IIT Bhilai",
            duration: "May 2024 – May 2025",
            description:
                "Mentored 10+ first-year students throughout the 2024–25 academic year at IIT Bhilai, guiding them from admission through academics, campus integration, and overall development.",
        },
        {
            id: 5,
            role: "Website Manager (SMP)",
            company: "Student Mentorship Program, IIT Bhilai",
            duration: "May 2024 – May 2025",
            description:
                "Revamped the SMP Polaris website through web development, enhancing user experience, engagement, and reducing the load time by 80%. (More than 250 users).",
        },
        {
            id: 6,
            role: "Mentor & Core Member",
            company: "Space Exploration Society (SES), IIT Bhilai",
            duration: "Oct 2023 – Present",
            description:
                "Active Core Member participating in group discussions, conducting sessions, and organizing telescopic observation sessions. Attended ISRO seminar at NIT Raipur.",
        },
        {
            id: 7,
            role: "Core Member",
            company: "FOSS Club, IIT Bhilai",
            duration: "Oct 2024 – May 2025",
            description:
                "Conducted 3+ open-source workshops under FOSS UNITED, increasing club signups and open-source awareness.",
        },
        {
            id: 8,
            role: "Mentor",
            company: "OpenLake, IIT Bhilai",
            duration: "2024 – 2025",
            description:
                "Conducted open-source awareness sessions, increasing engagement by 20%.",
        },
    ];

    return (
        <div
            name="experience"
            className="w-full text-white py-20 bg-transparent"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-12 text-center">
                    <p className="text-4xl font-bold inline text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-primary">
                        Experience
                    </p>
                </div>

                <div className="flex flex-col gap-12 px-4 md:px-0 relative">
                    {/* Vertical Connecting Line (Optional) */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10 hidden md:block md:left-1/2 md:-translate-x-1/2"></div>

                    {experiences.map(({ id, role, company, duration, description }, index) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`glass-card rounded-2xl p-8 hover:bg-white/5 transition-colors duration-300 relative z-10 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"} md:w-[48%] border-l-4 ${index % 2 === 0 ? "border-primary" : "border-secondary"}`}
                        >
                            <div className="flex flex-col mb-4">
                                <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${index % 2 === 0 ? "from-primary to-purple-400" : "from-secondary to-cyan-400"}`}>{role}</h3>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-lg font-semibold text-white">
                                        {company}
                                    </p>
                                    <p className="text-gray-400 text-sm italic border border-white/10 px-3 py-1 rounded-full">{duration}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 text-base leading-relaxed tracking-wide">
                                {description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
