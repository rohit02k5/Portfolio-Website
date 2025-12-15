import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/svs-rohit-baa147283/",
      style: "rounded-tr-md",
      color: "hover:text-blue-500",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/rohit02k5",
      color: "hover:text-white",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:swarnas@iitbhilai.ac.in",
      color: "hover:text-red-500",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1wWR1KXKj__l24tMMOJKehPwVpEo0CJZG/view?usp=sharing",
      style: "rounded-br-md",
      download: true,
      color: "hover:text-primary",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
      <ul>
        {links.map(({ id, child, href, style, download, color }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 glass-card bg-[#0a0a0a]/90 border border-white/10" +
              " " +
              style
            }
          >
            <a
              href={href}
              className={`flex justify-between items-center w-full text-gray-300 transition-colors duration-300 ${color}`}
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
