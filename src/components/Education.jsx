

import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    name: "Siliguri Institute of Technology",
    degree: "BTech in Computer Science and Engineering",
    year: "2021-2025",
    cgpa: "8.3",
  },
  {
    name: "Kendriya Vidyalaya Sevoke Road",
    class: "Higher Secondary",
    year: "2021",
    percentage: "80%",
  },
  {
    name: "Kendriya Vidyalaya Sevoke Road",
    class: "Senior Secondary",
    year: "2019",
    percentage: "78%",
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="max-w-[400px] mx-auto border border-purple-600 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
          >
            <h2 className="text-gray-300 text-lg font-semibold">{educations.name}</h2>

            {educations.class && (
              <p className="text-gray-300 text-sm">
                <strong>Class:</strong> {educations.class}
              </p>
            )}

            <p className="text-gray-300 text-sm ">
              <strong>Year:</strong> {educations.year}
            </p>

            {educations.degree && (
              <p className="text-gray-300 text-sm">
                <strong>Degree:</strong> {educations.degree}
              </p>
            )}

            {educations.cgpa && (
              <p className="text-gray-300 text-sm">
                <strong>CGPA:</strong> {educations.cgpa}
              </p>
            )}

            {educations.percentage && (
              <p className="text-gray-300 text-sm">
                <strong>Percentage:</strong> {educations.percentage}
              </p>
            )}

           
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
