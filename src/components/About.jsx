import React from 'react';
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration: 1 }}
        className='max-w-xl sm:max-w-4xl'
    >
      <h2 className='text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-white'>Acerca de mí</h2>
      <p className='text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6'>
        Soy un apasionado desarrollador web con experiencia en tecnologías como <span className='font-semibold text-yellow-500'>JavaScript</span>,
        <span className='font-semibold text-blue-600'> React</span>, <span className='font-semibold text-green-600'>Node.js</span>,
        <span className='font-semibold text-blue-800'> PHP</span> entre otros...
      </p>
      <p className='text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6'>
        Disfruto resolver problemas y crear aplicaciones que faciliten la vida de los usuarios. En mis tiempos libres, me gusta aprender nuevas tecnologías y contribuir a proyectos
        open source
      </p>
      <p className='text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6'>
        Siempre estoy buscando oportunidades para mejorar y aprender más sobre el desarrollo web y las nuevas tendencias en tecnología.
      </p>
    </motion.div>
  )
}

export default About
