import React from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen text-white p-4 py-20 bg-transparent"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-12 text-center">
          <p className="text-5xl font-bold inline text-transparent bg-clip-text bg-gradient-to-r from-primary to-neon-purple drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">
            Contact Me
          </p>
          <p className="py-8 text-xl text-gray-400">Submit the form below or connect with me directly</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="flex flex-col gap-10 w-full md:w-1/2">
            {[
              { icon: <FaUser />, title: "Name", value: "Swarna Venkata Sai Rohit" },
              { icon: <FaEnvelope />, title: "Email", value: "swarnas@iitbhilai.ac.in" },
              { icon: <FaPhone />, title: "Phone", value: "+91-7981544438" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-8 glass-card p-8 rounded-2xl group hover:border-primary/50 transition-all duration-300 hover:shadow-neon-purple/20 shadow-lg"
              >
                <div className="text-primary text-4xl group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-gray-200 text-2xl mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-lg md:text-xl font-medium tracking-wide">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            action="https://getform.io/f/ayvqvdeb"
            method="POST"
            className="flex flex-col w-full md:w-1/2 gap-6 glass-card p-8 rounded-2xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-4 bg-black/30 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 placeholder-gray-500"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-4 bg-black/30 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 placeholder-gray-500"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              className="p-4 bg-black/30 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 placeholder-gray-500 resize-none"
            ></textarea>

            <button className="text-white font-bold bg-gradient-to-r from-primary to-neon-purple px-8 py-4 my-2 mx-auto rounded-lg hover:scale-105 duration-300 shadow-lg hover:shadow-neon-purple/50 w-full md:w-auto">
              Let's talk
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
