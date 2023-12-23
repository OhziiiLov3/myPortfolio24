
import './App.css'
import HeroImage from './Components/HeroImage/HeroImage'
import HeroScetion from './Components/HeroSection/HeroScetion'
import Navbar from './Components/Navbar/Navbar'

function App() {


  return (
    <>
      <Navbar/>
      <main>
        <HeroScetion/>
        <HeroImage/>
      </main>
    </>
  )
}

export default App
