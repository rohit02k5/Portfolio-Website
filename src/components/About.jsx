import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      className="w-full text-white py-24 bg-transparent"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-12 text-center md:text-left">
          <p className="text-5xl font-bold inline text-transparent bg-clip-text bg-gradient-to-r from-primary to-neon-blue border-b-4 border-primary">
            About Me
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-10 md:p-14 rounded-3xl border border-white/10 shadow-glass relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <p className="text-2xl text-gray-300 leading-relaxed tracking-wide font-light mb-8 relative z-10 text-justify">
            I am <span className="font-bold text-white text-3xl font-signature">Swarna Venkata Sai Rohit</span>, a JEE Advanced qualified undergraduate pursuing <span className="font-semibold text-neon-blue">B.Tech in Electrical Engineering at IIT Bhilai</span>, with a CGPA of <span className="font-bold text-white">8.72</span> (Best SGPA: 9.01). I am deeply driven by building real-world, scalable technology systems at the intersection of <span className="text-primary font-semibold">Web Development, IoT, Embedded Systems, and AI</span>.
          </p>

          <p className="text-2xl text-gray-300 leading-relaxed tracking-wide font-light mb-8 relative z-10 text-justify">
            I have hands-on experience developing production-grade MERN applications, IoT-based embedded systems using Raspberry Pi/ESP32, and AR-driven predictive maintenance solutions. As a <span className="font-semibold text-neon-purple">Chanakya Fellow (TIH-IoT, IIT Bombay)</span> and <span className="font-semibold text-neon-purple">DRDO Research Intern</span>, I have worked on real-time systems, edge computing, telemetry decoding, and human–machine interfaces, focusing on low-latency, reliable, and efficient designs.
          </p>

          <p className="text-2xl text-gray-300 leading-relaxed tracking-wide font-light mb-8 relative z-10 text-justify">
            With <span className="font-bold text-white">300+ DSA problems solved</span>, I bring strong problem-solving and algorithmic thinking, complemented by solid system design and full-stack development skills. Beyond technical expertise, I have demonstrated leadership and managerial skills as a <span className="font-semibold text-secondary">Website Manager, Mentor, and Core Member</span> across multiple student and technical organizations at IIT Bhilai—successfully leading deployments used at an institutional scale.
          </p>

          <p className="text-2xl text-gray-200 font-medium italic relative z-10 text-center border-t border-white/10 pt-8 mt-4">
            "I thrive in challenging, interdisciplinary environments where innovation, execution, and impact come together."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
