import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "education" },
    { id: 4, link: "experience" },
    { id: 5, link: "projects" },
    { id: 6, link: "skills" },
    { id: 7, link: "achievements" },
    { id: 8, link: "courses" },
    { id: 9, link: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center w-full fixed z-50 top-6 px-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className={`flex justify-between items-center w-full max-w-7xl h-24 px-10 rounded-2xl transition-all duration-300 ${scrolled || nav
          ? "glass-card bg-black/80 shadow-neon-blue/20"
          : "bg-transparent"
          }`}
      >
        <div>
          <h1 className="text-5xl font-signature cursor-pointer text-white hover:text-primary duration-200 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
            Rohit
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-10">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize font-medium text-lg text-gray-400 hover:text-white relative group transition-colors duration-300"
            >
              <Link
                to={link}
                smooth
                duration={500}
                spy={true}
                exact="true"
                offset={-100}
                activeClass="!text-neon-blue !font-bold scale-110 drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]"
              >
                {link}
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-neon-blue transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer xl:hidden text-gray-300 hover:text-white transition-colors z-[60]"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-24 left-0 right-0 mx-4 p-4 rounded-2xl glass-card bg-background/90 xl:hidden flex flex-col items-center justify-center space-y-6 border border-white/10"
            >
              <ul className="flex flex-col items-center w-full">
                {links.map(({ id, link }) => (
                  <li
                    key={id}
                    className="px-4 py-4 cursor-pointer capitalize text-2xl text-gray-300 hover:text-white hover:scale-105 duration-200"
                  >
                    <Link
                      onClick={() => setNav(false)}
                      to={link}
                      smooth
                      duration={500}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default NavBar;
