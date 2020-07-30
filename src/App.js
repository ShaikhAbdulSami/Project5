import React from 'react';
import './App.css';
import Home from './Components/Home';
import Content1 from './Components/Content1';
import Content2 from './Components/Content2';
import Content3 from './Components/Content3';
import Footer from './Components/Footer';


function App() {

  return (
    <>
        <Home />
        <Content1 />
        <Content2 />
        <Content3 />
        <div className=" fixed-bottom"> 
            <Footer></Footer>
          </div>
        
    </>
  );
}

export default App;
