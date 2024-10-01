import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Cargar la configuracion del tema desde Local Storage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
            if(savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }, []);

    // Detectar cuando el usuario hace scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cambiar el tema claro/oscuro
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light')
        }
    }

    // Animacion para el icono del menu hamburguesa
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    // Para ir al inicio de la pagina
    const scrollToTop = () => {
        scroll.scrollToTop();
    }

  return (
    <header className={`fixed top-0 w-full p-5 transition-all z-50 ${isScrolled ? 'shadow-lg bg-white dark:bg-gray-800' : 'bg-transparent'}`}>
      <nav className='max-w-7xl mx-auto flex justify-between items-center'>
        <h1 onClick={scrollToTop} className='text-lg font-bold dark:text-white cursor-pointer'>Ramiro Martinez</h1>

        {/* Icono para cambiar entre tema */}
        <div className='flex items-center space-x-4'>
            <button onClick={toggleTheme}>
                {darkMode ? <FaSun className='text-yellow-500 w-6 h-6'/> : <FaMoon className='text-gray-800 w-6 h-6 dark:text-white'/>}
            </button>

            {/* Menu hamburguesa para pantallas pequeñas */}
            <button onClick={toggleMenu} className='md:hidden'>
                {menuOpen ? <FaTimes className='w-6 h-6 dark:text-white'/> : <FaBars className='w-6 h-6 dark:text-white'/>}
            </button>
        </div>

        {/* Menu para pantallas grandes */}
        <div className='hidden md:flex space-x-4 dark:text-white'>
            <ScrollLink activeClass='text-yellow-500 font-semibold' to='about' smooth={true} offset={-70} spy={true} className='cursor-pointer hover:text-yellow-500'>
                Acerca de
            </ScrollLink>
            <ScrollLink activeClass='text-yellow-500 font-semibold' to='experience' smooth={true} offset={-70} spy={true} className='cursor-pointer hover:text-yellow-500'>
                Experiencia
            </ScrollLink>
            <ScrollLink activeClass='text-yellow-500 font-semibold' to='projects' smooth={true} offset={-70} spy={true} className='cursor-pointer hover:text-yellow-500'>
                Proyectos
            </ScrollLink>
            <ScrollLink activeClass='text-yellow-500 font-semibold' to='contact' smooth={true} offset={-70} spy={true} className='cursor-pointer hover:text-yellow-500'>
                Contacto
            </ScrollLink>
        </div>

        {/* Menu desplegable cuando se abre el menu hamburguesa */}
        <motion.div
            className={`absolute top-16 right-0 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center p-6 transition-transform transform md:hidden ${menuOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: menuOpen ? 1 : 0, scale: menuOpen ? 1 : 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            <ScrollLink to='about' smooth={true} offset={-70} className='block py-2 text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-400 transition-all duration-200' onClick={() => setMenuOpen(false)}>
                Acerca de
            </ScrollLink>
            <ScrollLink to='experience' smooth={true} offset={-70} className='block py-2 text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-400 transition-all duration-200' onClick={() => setMenuOpen(false)}>
                Experiencia
            </ScrollLink>
            <ScrollLink to='projects' smooth={true} offset={-70} className='block py-2 text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-400 transition-all duration-200' onClick={() => setMenuOpen(false)}>
                Proyectos
            </ScrollLink>
            <ScrollLink to='contact' smooth={true} offset={-70} className='block py-2 text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-400 transition-all duration-200' onClick={() => setMenuOpen(false)}>
                Contacto
            </ScrollLink>
        </motion.div>
      </nav>
    </header>
  )
}

export default Header
