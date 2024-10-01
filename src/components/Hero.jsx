import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id='hero' className='h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-center'>
        {/* Animacion de entrada con Framer Motion */}
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='mb-6'
        >
            <h1 className='text-2xl sm:text-5xl font-bold mb-4 text-gray-800 dark:text-white'>
                !Hola! Soy <span className='text-yellow-500'>Ramiro Martinez</span>
            </h1>
        </motion.div>

        {/* Línea lateral izquierda con íconos */}
        <div className="absolute left-4 bottom-0 flex flex-col items-center space-y-6">
            <motion.a
                href="https://github.com/ramiromtz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-yellow-500 transition-all duration-300"
                initial={{ opacity: 0, y: 50}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
                href="https://www.linkedin.com/in/tu-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-yellow-500 transition-all duration-300"
                initial={{ opacity: 0, y: 100}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            >
                <FaLinkedin className="w-6 h-6" />
            </motion.a>
            <div className="w-[1px] h-24 bg-gray-400 dark:bg-gray-600"></div>
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
        >
            <h2 className='text-xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300'>
                Soy un{' '}
                <Typewriter
                    words={['Full Stack Developer']}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    pause
                />
            </h2>
        </motion.div>
    </section>
  )
}

export default Hero
