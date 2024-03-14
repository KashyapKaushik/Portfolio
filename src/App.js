
import './App.css';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer.js/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
    <Navbar/>
    <div className='container'> 
     <Hero/>
     <Skills/>
     <ContactMe/>
    </div>
    <Footer/>
    
    </>
  
  );
}

export default App;
