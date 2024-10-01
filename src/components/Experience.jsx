import React from 'react';
import { experiences } from '../constant/experience';
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <h2 className='text-3xl sm:text-4xl font-bold mb-12 text-center dark:text-white'>Experiencia</h2>

      <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4 sm:ml-8">
        {
          experiences.map((experience) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='mb-10 ml-6'
            >
              <div className='absolute w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full -left-3.5 border border-gray-300 dark:border-gray-700'></div>
              <div className="mb-2 text-sm sm:text-base text-gray-500 dark:text-gray-400 ml-8 sm:ml-12">{experience.year}</div>
              <div className="text-lg sm:text-2xl font-semibold dark:text-white">{experience.title}</div>
              <div className="text-md sm:text-lg text-gray-600 dark:text-gray-300">{experience.company}</div>
              <div className="text-lg sm:text-base text-gray-700 dark:text-gray-400">{experience.description}</div>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Experience
