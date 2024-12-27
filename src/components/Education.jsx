import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    name: "Siliguri Institute of Technology",
    year: "2021-2025",
    cgpa: "8.3",
  },
  {
    name: "Kendriya Vidyalaya Sevoke Road",
    year: "2019-2021",
    cgpa: "8.1",
  },
  {
    name: "Kendriya Vidyalaya Sevoke Road",
    year: "2017-2019",
    cgpa: "7.9",
  },
];

const Education = () => {
  return (
    <div className="flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="education">
      <h1 className="text-3xl text-gray-200 font-bold text-center mb-12">
        Education
      </h1>
      <motion.div
        className="space-y-8"
        initial="hidden"
        animate="visible"
        
      >
        {education.map((educations, index) => (
          <motion.div
            key={index}
            initial='hidden'
            whileInView='visible'
            viewport={{once:false,amount:0.3}}
            transition={{duration:1}}
            className="max-w-[400px] mx-auto border border-purple-600 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
          >
            <h2 className="text-gray-300">{educations.name}</h2>

            <p className="text-gray-300">
              <strong>Year:</strong> {educations.year}
            </p>

            <p className="text-gray-300">
              <strong>CGPA:</strong> {educations.cgpa}
            </p>

          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
