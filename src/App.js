
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer.js/Footer';
import Hero from './components/Hero/Hero';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkExperience from './components/WorkExperience/WorkExperience';


function App() {
  return (
    <>
     <Navbar/>
     <div className='container'> 
     <Hero/>
     <Skills/>
     <WorkExperience/>

     <Projects/>
     {/* <AboutMe/> */}
     <ContactMe/> 
   

    {/* <Router>
    <Navbar/>
        <Routes>
            <Route exact path='/' element={<Homepage/>}></Route>
            <Route exact path='/hero' element={<Hero/>}></Route>
            <Route exact path='/skill' element={<Skills/>}></Route>
            <Route exact path='/aboutme' element={<AboutMe/>}></Route>
            <Route exact path='/contactme' element={<ContactMe/>}></Route>

        </Routes>
        <Footer/>
    </Router>   */}
    </div>
    <Footer/>

    </>
  
  );
}

export default App;
