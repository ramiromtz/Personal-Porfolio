import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import './styles/main.css';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <Header/>
      <Hero/>

      <main>
        <section id='about' className='min-h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-center p-4 sm:p-8'>
          <About/>
        </section>
        <section id='experience' className='min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4 sm:p-8'>
          <Experience/>
        </section>
        <section id='projects' className='min-h-screen flex justify-center bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 p-4 sm:p-8'>
          <Projects/>
        </section>
        <section id='contact' className='min-h-screen flex items-center justify-center bg-gray-100 text-gray-900 dark:text-gray-200 dark:bg-gray-900 p-4 sm:p-8'>
          <Contact/>
        </section>
      </main>
    </>
  )
}

export default App
