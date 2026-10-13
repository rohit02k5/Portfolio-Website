import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaTerminal } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

const TerminalHero = () => {
    return (
        <div
            name="home"
            className="h-screen w-full flex items-center justify-center p-4"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-4xl relative"
            >
                {/* Glow Effect Behind */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-neon-blue rounded-xl blur opacity-30 animate-pulse-slow"></div>

                <div className="relative w-full bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                    {/* IDE Header */}
                    <div className="bg-[#121212] px-4 py-3 flex items-center justify-between border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors"></div>
                        </div>
                        <div className="text-gray-400 text-sm font-mono flex items-center gap-2">
                            <FaTerminal /> portfolio.tsx
                        </div>
                        <div className="w-12"></div>
                    </div>

                    {/* IDE Body */}
                    <div className="p-6 md:p-10 font-mono text-slate-300 space-y-4 text-base md:text-lg">
                        <p>
                            <span className="text-primary">const</span>{" "}
                            <span className="text-secondary">Developer</span> = {"{"}
                        </p>
                        <div className="pl-6 md:pl-12">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                                Swarna Venkata Sai Rohit
                            </h1>
                            <p className="text-xl md:text-2xl text-primary font-medium">
                                <ReactTyped
                                    strings={[
                                        "Full Stack Developer",
                                        "IoT & Embedded Systems Enthusiast",
                                        "3rd Year Student @ IIT Bhilai",
                                        "AR/VR Developer",
                                        "Open Source Contributor"
                                    ]}
                                    typeSpeed={50}
                                    backSpeed={30}
                                    loop
                                />
                            </p>
                            <p className="py-4 text-gray-400 text-xl font-medium">
                                3rd Year B.Tech Student in Electrical Engineering at <span className="text-neon-blue font-bold">IIT Bhilai</span>.
                            </p>
                        </div>

                        <p className="mt-6">
                            <span className="text-primary">bio</span>: ( ) {"=>"} {"{"}
                        </p>
                        <div className="pl-6 md:pl-12 text-lg leading-relaxed border-l-2 border-primary/30 pl-4 text-gray-400 italic">
                            "I build scalable web applications and explore the frontiers of IoT &
                            Edge Computing. Always deploying code onto the cloud or into the
                            real world."
                        </div>
                        <p>{"}"}</p>

                        <p className="mt-6">
                            <span className="text-secondary">return</span> (
                        </p>
                        <div className="pl-6 md:pl-12 flex flex-wrap gap-4 mt-4">
                            <Link
                                to="projects"
                                smooth
                                duration={500}
                                className="group relative px-6 py-2 bg-transparent text-primary border border-primary/50 rounded-lg overflow-hidden cursor-pointer"
                            >
                                <span className="absolute inset-0 w-0 bg-primary/20 transition-all duration-300 group-hover:w-full"></span>
                                <span className="relative font-bold">View Projects</span>
                            </Link>

                            <a
                                href="https://drive.google.com/file/d/1wWR1KXKj__l24tMMOJKehPwVpEo0CJZG/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="group relative px-6 py-2 bg-primary text-white rounded-lg overflow-hidden shadow-glow hover:shadow-neon-purple/50 transition-all duration-300"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-blob"></span>
                                <span className="relative flex items-center gap-2 font-bold">
                                    Resume <HiOutlineDownload size={20} />
                                </span>
                            </a>
                        </div>
                        <p>);</p>
                        <p>{"}"}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default TerminalHero;
