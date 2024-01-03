
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from "./Components/HeroComponent/Hero";
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {


  return (
    <>
      <Navbar />
      <main>
         <Hero/>
         <Experience/>
         <Projects/>
         <Contact/>
      </main>
         <Footer/>
    </>
  );
}

export default App
