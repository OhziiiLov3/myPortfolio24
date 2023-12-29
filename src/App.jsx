
import './App.css'
import Experience from './Components/Experience/Experience';

import Hero from "./Components/HeroComponent/Hero";
import Navbar from './Components/Navbar/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <main>
         <Hero/>
         <Experience/>
      </main>
    </>
  );
}

export default App
