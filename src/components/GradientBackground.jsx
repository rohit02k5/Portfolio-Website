import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GradientBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (ev) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    // Increased particle count for "PEAK" visibility
    const particles = Array.from({ length: 40 });
    const shootingStars = Array.from({ length: 5 });

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#000000] overflow-hidden perspective-1000">
            {/* Interactive Spotlight - Intensified */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-20 mix-blend-screen"
                style={{
                    background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.25), transparent 80%)`,
                }}
            />

            {/* Deep Space Gradients - Base Layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#020205] to-[#050505]"></div>

            {/* Floating Orbs - Peak Nebula Effect with Blend Modes */}
            <div className="absolute inset-0 overflow-hidden mix-blend-plus-lighter">
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3],
                        x: [0, 100, 0],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-600/30 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.5, 0.2],
                        x: [0, -80, 0],
                        y: [0, 80, 0]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[-10%] left-[-10%] w-[900px] h-[900px] bg-blue-600/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.2, 0.4, 0.2],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[30%] left-[20%] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1],
                        x: [0, 50, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[90px]"
                />
            </div>

            {/* Shooting Stars */}
            {shootingStars.map((_, i) => (
                <motion.div
                    key={`shooting-${i}`}
                    className="absolute h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
                    initial={{
                        x: -100,
                        y: Math.random() * window.innerHeight,
                        opacity: 0,
                        rotate: -45,
                        width: "100px"
                    }}
                    animate={{
                        x: window.innerWidth + 200,
                        y: Math.random() * window.innerHeight + 200,
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: Math.random() * 1 + 1, // Fast duration
                        repeat: Infinity,
                        repeatDelay: Math.random() * 5 + 3, // Random delay between shots
                        ease: "easeIn",
                        delay: Math.random() * 5
                    }}
                />
            ))}

            {/* Twinkling Starfield */}
            {particles.map((_, i) => (
                <motion.div
                    key={`star-${i}`}
                    className="absolute bg-white rounded-full shadow-[0_0_5px_white]"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        opacity: Math.random() * 0.5 + 0.2,
                        scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2
                    }}
                    style={{
                        width: Math.random() * 3 + "px",
                        height: Math.random() * 3 + "px",
                    }}
                />
            ))}

            {/* Grid Pattern Overlay with Pulse */}
            <motion.div
                animate={{ opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150 contrast-150 pointer-events-none mix-blend-overlay"
            ></motion.div>
        </div>
    );
};

export default GradientBackground;
