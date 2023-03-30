import React from 'react';
import Header from "./components/Header";
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import Count from './components/Count';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Navbar/>
      <Services/>
      <About/>
      <Count/>
    </div>
  );
}

export default App;
