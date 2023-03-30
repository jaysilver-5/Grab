import React from 'react';
import Header from "./components/Header";
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import Count from './components/Count';
import Projects from './components/Projects';
import Testimonails from './components/Testimonails';
import Choose from './components/Choose';
import Team from './components/Team';
import Contact from './components/Contact';
import Blog from './components/Blog'

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Navbar/>
      <Services/>
      <About/>
      <Count/>
      <Projects/>
      <Testimonails/>
      <Choose/>
      <Team/>
      <Contact/>
      <Blog/>
    </div>
  );
}

export default App;
