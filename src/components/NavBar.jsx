import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [bars, setBars] = useState(false);
  const [activeLink, setActiveLink] = useState('home'); // State to track active link
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'interests', 'contact'];
      const scrollY = window.scrollY;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        const rect = element.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          setActiveLink(section); // Update active link based on the visible section
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update activeLink when a link is clicked
  const handleLinkClick = (section) => {
    setActiveLink(section);
    setBars(false); // Close the mobile menu when a link is clicked
  };

  return (
    <div className="flex justify-between items-center text-white bg-black border-b-4 border-cyan-700 w-full h-20 px-4 fixed z-10">
      <h1 className="font-signature text-5xl my-4">Rohit</h1>
      <ul className="hidden md:flex">
        <li className="px-8 cursor-pointer font-semibold text-xl text-gray-500 hover:text-white hover:scale-110">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={activeLink === 'home' ? 'text-white font-semibold' : 'text-gray-500'}
            onClick={() => handleLinkClick('home')} // Update activeLink on click
          >
            Home
          </Link>
        </li>
        <li className="px-8 cursor-pointer font-semibold text-xl text-gray-500 hover:text-white hover:scale-110">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={activeLink === 'about' ? 'text-white font-semibold' : 'text-gray-500'}
            onClick={() => handleLinkClick('about')} // Update activeLink on click
          >
            About Me
          </Link>
        </li>
        <li className="px-8 cursor-pointer font-semibold text-xl text-gray-500 hover:text-white hover:scale-110">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={activeLink === 'projects' ? 'text-white font-semibold' : 'text-gray-500'}
            onClick={() => handleLinkClick('projects')} // Update activeLink on click
          >
            Projects
          </Link>
        </li>
        <li className="px-8 cursor-pointer font-semibold text-xl text-gray-500 hover:text-white hover:scale-110">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className={activeLink === 'skills' ? 'text-white font-semibold' : 'text-gray-500'}
            onClick={() => handleLinkClick('skills')} // Update activeLink on click
          >
            Skills
          </Link>
        </li>
        <li className="px-8 cursor-pointer font-semibold text-xl text-gray-500 hover:text-white hover:scale-110">
          <Link
            to="interests"
            smooth={true}
            duration={500}
            className={activeLink === 'interests' ? 'text-white font-semibold' : 'text-gray-500'}
            onClick={() => handleLinkClick('interests')} // Update activeLink on click
          >
            Interests & Achievements
          </Link>
        </li>
        <li className="px-8 cursor-pointer font-semibold text-xl text-gray-500 hover:text-white hover:scale-110">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={activeLink === 'contact' ? 'text-white font-semibold' : 'text-gray-500'}
            onClick={() => handleLinkClick('contact')} // Update activeLink on click
          >
            Contact Me
          </Link>
        </li>
      </ul>
      <div onClick={() => setBars(!bars)} className="pr-5 z-10 cursor-pointer hover:text-white hover:scale-110 text-gray-500 md:hidden">
        {bars ? <FaTimes /> : <FaBars />}
      </div>
      {bars && (
        <ul className="bg-gradient-to-b from-black to-gray-800 flex flex-col justify-center items-center absolute top-0 left-0 right-0 w-full h-screen md:hidden">
          <li className="cursor-pointer font-semibold text-xl text-gray-500 hover:text-white hover:scale-110 py-6 px-4">
            <Link
              onClick={() => handleLinkClick('home')} // Update activeLink on click
              to="home"
              className={activeLink === 'home' ? 'text-white font-semibold' : 'text-gray-500'}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="cursor-pointer font-semibold text-xl text-gray-500 hover:text-white hover:scale-110 py-6 px-4">
            <Link
              onClick={() => handleLinkClick('about')} // Update activeLink on click
              to="about"
              className={activeLink === 'about' ? 'text-white font-semibold' : 'text-gray-500'}
              smooth={true}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li className="cursor-pointer font-semibold text-xl text-gray-500 hover:text-white hover:scale-110 py-6 px-4">
            <Link
              onClick={() => handleLinkClick('projects')} // Update activeLink on click
              to="projects"
              className={activeLink === 'projects' ? 'text-white font-semibold' : 'text-gray-500'}
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="cursor-pointer font-semibold text-xl text-gray-500 hover:text-white hover:scale-110 py-6 px-4">
            <Link
              onClick={() => handleLinkClick('skills')} // Update activeLink on click
              to="skills"
              className={activeLink === 'skills' ? 'text-white font-semibold' : 'text-gray-500'}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="cursor-pointer font-semibold text-xl text-gray-500 hover:text-white hover:scale-110 py-6 px-4">
            <Link
              onClick={() => handleLinkClick('interests')} // Update activeLink on click
              to="interests"
              className={activeLink === 'interests' ? 'text-white font-semibold' : 'text-gray-500'}
              smooth={true}
              duration={500}
            >
              Interests & Achievements
            </Link>
          </li>
          <li className="cursor-pointer font-semibold text-xl text-gray-500 hover:text-white hover:scale-110 py-6 px-4">
            <Link
              onClick={() => handleLinkClick('contact')} // Update activeLink on click
              to="contact"
              className={activeLink === 'contact' ? 'text-white font-semibold' : 'text-gray-500'}
              smooth={true}
              duration={500}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
