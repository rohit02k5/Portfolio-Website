import React from 'react'

const Projects = () => {
  return (
    <div id="projects" className="bg bg-gradient-to-b from-black via-black to-gray-800 w-full min-h-screen text-white py-24">
      <div className="flex flex-col items-center justify-around w-full h-full px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center mt-36">
            <p className="text-6xl inline border-b-4">My Projects</p>
            <p className="mb-40 inline text-2xl mt-4">Check out some of my work below</p>
        </div>

        {/* TIH Project */}
        <div className="flex flex-col my-10 space-y-10">
            <div className="flex flex-col md:flex-row items-center">
              <img className="h-60 w-96 mx-auto md:mx-8 rounded-3xl shadow-md shadow-blue-400" src="TIH-logo.png" alt="img" />
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <p className="shadow-md shadow-white p-4">
                  The AR-Based Human-Machine Interface for Tool Condition Monitoring, developed under the prestigious TIH-IoT Chanakya Fellowship at IIT Bombay, integrates Augmented Reality (AR) with IoT-enabled sensors to revolutionize tool health monitoring in manufacturing. The system provides real-time insights into parameters like wear, vibration, and temperature, allowing operators to address issues proactively. By enabling predictive maintenance, it reduces downtime, repair costs, and resource wastage while enhancing workplace safety through timely alerts and guidance. This innovative solution is a significant step towards smarter, safer, and more efficient manufacturing in the era of Industry 4.0.
                </p>
              </div>
            </div>
            <div className="md:ml-24 flex justify-center md:justify-start space-x-4 mt-4">
              <a href="https://drive.google.com/file/d/1KMngdrW8YRtTRhCM1_pvNir3VDpuRYlx/view" target="_blank" rel="noopener noreferrer">
                <button type="button" className="w-40 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                  View Sanction Letter
                </button>
              </a>
            </div>
        </div>

        {/* Amazon Clone */}
        <div className="flex flex-col my-10 space-y-10">
            <div className="flex flex-col md:flex-row items-center">
              <img className="h-60 w-96 mx-auto md:mx-8 rounded-3xl shadow-md shadow-blue-400" src="amazon.jpg" alt="img" />
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <p className="shadow-md shadow-white p-4">
                  The Clone of the Front-End of Amazon showcases expertise in recreating the design and functionality of a leading e-commerce platform. Built using HTML, CSS, JavaScript, and modern frameworks, it includes features like product listings, search functionality, responsive design, and interactive elements such as shopping carts and category filters. This project highlights skills in crafting visually appealing, user-friendly, and functional web interfaces, aligning with industry standards for high-performance e-commerce applications.
                </p>
              </div>
            </div>
            <div className="md:ml-24 flex justify-center md:justify-start space-x-4 mt-4">
              <a href="https://github.com/rohit02k5/Amazon-clone" target="_blank" rel="noopener noreferrer">
                <button type="button" className="w-24 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                  View Code
                </button>
              </a>
            </div>
        </div>

        {/* Tic-Tac-Toe Game */}
        <div className="flex flex-col my-10 space-y-10">
            <div className="flex flex-col md:flex-row items-center">
              <img className="h-60 w-96 mx-auto md:mx-8 rounded-3xl shadow-md shadow-blue-400" src="tic.jpg" alt="img" />
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <p className="shadow-md shadow-white p-4">
                  The Web-based Tic-Tac-Toe Game is a classic implementation developed using HTML, CSS, and JavaScript. This interactive game features a responsive design and dynamic gameplay, allowing two players to compete with intuitive controls and real-time feedback. The project demonstrates strong front-end development skills, logical problem-solving, and the ability to create engaging user experiences.
                </p>
              </div>
            </div>
            <div className="md:ml-24 flex justify-center md:justify-start space-x-4 mt-4">
              <a href="https://github.com/rohit02k5/Tic-Tac-Toe-Game" target="_blank" rel="noopener noreferrer">
                <button type="button" className="w-24 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                  View Code
                </button>
              </a>
            </div>
        </div>

        {/* Portfolio Website */}
        <div className="flex flex-col my-10 space-y-10">
            <div className="flex flex-col md:flex-row items-center">
              <img className="h-60 w-96 mx-auto md:mx-8 rounded-3xl shadow-md shadow-blue-400" src="IIT.png" alt="img" />
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <p className="shadow-md shadow-white p-4">
                  The Polaris Website for IIT Bhilai's Student Mentorship Programme (SMP) is a live platform developed using HTML and CSS to create an intuitive and user-friendly front-end. As the Website Manager, I contributed to enhancing the website's design and functionality, ensuring a seamless experience for active users. This project showcases my ability to manage and maintain a live website while addressing user requirements effectively. My contributions are recognized in the Developers section of the website, which can be accessed at Polaris Website.
                </p>
              </div>
            </div>
            <div className="flex md:ml-24 justify-center md:justify-start space-x-4 mt-4">
              <a href="https://polaris.iitbhilai.ac.in/" target="_blank" rel="noopener noreferrer">
                <button type="button" className="w-24 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                  Visit Website
                </button>
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

