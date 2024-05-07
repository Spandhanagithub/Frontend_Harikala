import React from 'react';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Mission from './Components/Mission';
import What from './Components/What';
import Check from './Components/Check';
import Core from './Components/Core';
import Process from './Components/Process';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';

import './App.css'; 


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Content />
      <Mission />
      <What />
      <Check />
   <Core />
   <Process />
   <Testimonials />
   <Footer />
    </div>
  );
};

export default App;
