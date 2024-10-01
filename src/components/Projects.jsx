import React from 'react';
import { motion } from "framer-motion";
import { projects } from '../constant/projects';

const Projects = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-center'>Proyectos</h2>
        <p className='text-center text-gray-700 dark:text-white text-md mb-12 sm:text-xl'>Estos son algunos de los proyectos que he realizado.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            { projects.map((project) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300'
                >
                    <img src={project.image} alt={project.title} className='w-full -h-48 object-cover mb-6 rounded-lg' />

                    <h3 className='text-xl font-semibold mb-3 text-gray-900 dark:text-white'>{project.title}</h3>
                    <p className='text-gray-600 dark:text-gray-400 mb-4'>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        { project.badges.map((badge, index) => (
                            <span key={index} className='text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 rounded-full px-3 py-1'>{badge}</span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
      
    </div>
  )
}

export default Projects
