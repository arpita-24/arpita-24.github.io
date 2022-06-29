import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
// eslint-disable-next-line
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./pages/Header";
// eslint-disable-next-line
import { BrowserRouter,Routes,Route} from 'react-router-dom';
// eslint-disable-next-line
import AboutMe from "./pages/AboutMe"; 
import Achievements from "./pages/Acheivements";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
// import { Bubble } from "tsparticles/Options/Classes/Interactivity/Modes/Bubble";

function App() {
  return (

    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/acheivements" element={<Achievements />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contactMe" element={<ContactMe />} />
      </Routes>
    </>
    
  ); 
}

export default App;
