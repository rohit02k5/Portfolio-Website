import React from "react";
import { motion } from "framer-motion";

const KeyCourses = () => {
    const courses = [
        "Linear Algebra",
        "Probability & Statistics",
        "Artificial Intelligence",
        "Analog & Digital Electronics",
        "Introduction to Programming",
        "Digital Control",
        "Control Systems",
        "Power Electronics",
        "Electric Machines 1 & 2",
        "Sensors and Instrumentation",
    ];

    return (
        <div
            name="courses"
            className="w-full text-white py-24 bg-transparent"
        >
            <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-12 text-center">
                    <p className="text-4xl font-bold inline text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 border-b-4 border-purple-500">
                        Key Courses
                    </p>
                    <p className="py-6 text-xl text-gray-400">Academic & Technical Coursework</p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 px-4">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
                            className="px-8 py-4 glass-card rounded-full border border-white/10 text-gray-300 text-lg font-medium hover:text-white hover:border-primary/50 transition-all duration-300 cursor-default shadow-lg hover:shadow-neon-purple/30"
                        >
                            {course}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KeyCourses;
