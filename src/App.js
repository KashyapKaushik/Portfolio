
import './App.css';
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
    </div>
    
    </>
  
  );
}

export default App;
