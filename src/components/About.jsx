import React from 'react';

const About = () => {
  return (
    <div id="about" className="bg-gradient-to-b from-gray-800 to-black text-white w-full min-h-screen">
      <div className="max-w-screen-lg w-full h-auto mx-auto flex flex-col text-xl justify-center px-4 md:px-0 py-28">
        <div className="flex flex-col items-center mt-36 md:mt-40">
          <p className="text-5xl inline border-b-4">About</p>
        </div>
        
        <div className="mt-8">
          <ul className="list-disc pl-8">
            <li className="mb-4"><strong>Location:</strong> From Hyderabad, known for its rich culture and educational excellence.</li>
            <li className="mb-4"><strong>Education:</strong>
              <ul className="list-inside list-disc pl-4">
                <li className="mb-2">Completed 10th grade from Defence Laboratories School (DLSK) with 94.8%.</li>
                <li className="mb-2">Completed 12th grade at FIITJEE Hyderabad with an All India Rank (AIR) of 10,398 in JEE Advanced, earning a seat at IIT Bhilai for B.Tech in Electrical Engineering.</li>
              </ul>
            </li>
            <li className="mb-4"><strong>Language Proficiency:</strong> Fluent in Hindi, English, and Telugu. Beginner in French, expanding linguistic skills.</li>
            <li className="mb-4"><strong>Sports:</strong> Passionate about playing badminton and cricket, which foster teamwork, discipline, and perseverance.</li>
            <li className="mb-4"><strong>Technology & Coding:</strong> Passionate about tech, coding, and problem-solving. Focused on software development, data structures, and algorithmic problem-solving.</li>
            <li className="mb-4"><strong>Overall Approach:</strong> Dedicated and versatile, constantly seeking personal and professional growth.</li>
          </ul>
          
          <br />

          <ul className="list-disc pl-8">
            <li className="mb-4"><strong>First Year at IIT Bhilai:</strong> Completed the first year with a cumulative CGPA of 8.87 and an SGPA of 9.01 in the latest semester.</li>
            <li className="mb-4"><strong>Key Courses Completed:</strong>
              <ul className="list-inside list-disc pl-4">
                <li className="mb-2">Probability and Statistics</li>
                <li className="mb-2">Linear Algebra</li>
                <li className="mb-2">Introduction to C</li>
              </ul>
            </li>
            <li className="mb-4"><strong>Additional Learning:</strong> Completed various other courses that strengthened my understanding of engineering principles, programming, and problem-solving.</li>
            <li className="mb-4"><strong>Course List:</strong> A detailed list of courses can be found on my resume.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
