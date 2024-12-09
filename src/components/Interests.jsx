import React from "react";
const Interests=()=>{
    return(
        <div id="interests" className="bg bg-gradient-to-b from-black via-black to-gray-800 w-full min-h-screen text-white py-24">
            <div className="flex flex-col justify-between items-center w-full h-full px-4 md:px-0">
            <div className="flex flex-col items-center mt-36 md:mt-40"> {/* Adjusted margin-top */}
            <p className="text-6xl inline border-b-4 mb-14">Interests and Achievements</p>
            <p className="mb-40 underline inline text-2xl mt-4">Check out some of my achievments below</p>
          <p className="text-5xl inline border-b-4 mb-6">Class 10</p>
          <img className=" shadow-2xl shadow-blue-800 h-60 w-96 mx-auto md:mx-8 rounded-3xl"src="class10.png" alt="CSS" />
          <p className="text-2xl mt-4">Secured 94.8% in CBSE Boards</p> {/* Added margin-top */}
        </div>
        <div className="flex flex-col items-center mt-36 md:mt-40"> {/* Adjusted margin-top */}
          <p className="text-5xl inline border-b-4 mb-6">Class 12</p>
          <img className=" shadow-2xl shadow-blue-800 h-60 w-96 mx-auto md:mx-8 rounded-3xl" src="class12.png" alt="CSS" />
          <p className="text-2xl mt-4">Secured 97.92% in CBSE Boards</p> {/* Added margin-top */}
        </div>
        <div className="flex flex-col items-center mt-36 md:mt-40"> {/* Adjusted margin-top */}
          <p className="text-5xl inline border-b-4 mb-6">Jee Advance</p>
          <img className=" shadow-2xl shadow-blue-800 h-60 w-96 mx-auto md:mx-8 rounded-3xl" src="jee.png" alt="CSS" />
          <p className="text-2xl mt-4">Secured an AIR-10,398 in JEE ADVANCE</p> {/* Added margin-top */}
        </div>
        <div className="flex flex-col items-center mt-36 md:mt-40"> {/* Adjusted margin-top */}
          <p className="text-5xl inline border-b-4 mb-6">TIH-IoT Chanakya Fellowship</p>
          <img className=" shadow-2xl shadow-blue-800 h-60 w-96 mx-auto md:mx-8 rounded-3xl" src="TIH-logo.png" alt="CSS" />
          <p className="text-2xl mt-4">Selected for the prestigious TIH-IoT Fellowship by IIT Bombay</p> {/* Added margin-top */}
        </div>
            </div>
            </div>
    )
}
export default Interests