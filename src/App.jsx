
import './App.css'
import HeroImage from './Components/HeroImage/Heroimage'
import HeroSection from './Components/HeroSection/HeroSection'
import Navbar from './Components/Navbar/Navbar'

function App() {


  return (
    <>
      <Navbar/>
      <main>
        <HeroSection/>
      <HeroImage/>
      </main>
    </>
  )
}

export default App
