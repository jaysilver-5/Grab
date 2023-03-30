import React from 'react';
import Header from "./components/Header";
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import Count from './components/Count';
import Projects from './components/Projects';
import Background from './components/Background';
import Testimonails from './components/Testimonails';
import Choose from './components/Choose';

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
    </div>
  );
}

export default App;
