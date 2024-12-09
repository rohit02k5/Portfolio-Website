import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Social = () => {
  return (
    <div className="hidden lg:flex flex-col fixed top-72 left-0 justify-center items-center">
      <ul className="flex flex-col">
        <li className="bg-gray-700 text-white rounded-xl flex justify-between font-medium items-center w-45 h-14 px-2 hover:duration-300 hover:scale-125 hover:bg-gray-400">
          <a href="https://www.linkedin.com/in/svs-rohit-baa147283/" target='_blank' rel="noopener noreferrer">
            Linked In <FaLinkedin className="ml-2" size={30}/>
          </a>
        </li>

        <li className="bg-gray-700 text-white rounded-xl font-medium flex items-center w-35 h-14 px-2 hover:duration-300 hover:scale-125 hover:bg-gray-400">
          <a href="https://github.com/rohit02k5" target='_blank' rel="noopener noreferrer">
            Git Hub <FaGithub className="ml-2" size={30}/>
          </a>
        </li>

        <li className="bg-gray-700 text-white rounded-xl font-medium flex items-center w-35 h-14 px-2 hover:duration-300 hover:scale-125 hover:bg-gray-400">
          <a href="https://drive.google.com/file/d/12oX_6641Dssb6XGhqIBtAQ1qIbpCYXXo/view?usp=sharing" download={true} target='_blank' rel="noopener noreferrer">
            Resume <BsFillPersonLinesFill className="ml-2" size={30}/>
          </a>
        </li>

        <li className="bg-gray-700 text-white rounded-xl font-medium flex items-center w-20 h-14 px-2 hover:duration-300 hover:scale-125 hover:bg-gray-400">
          <a href="mailto:swarnas@iitbhilai.ac.in">
            Mail <HiOutlineMail className="ml-2" size={30}/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Social

