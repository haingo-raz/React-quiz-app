import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.scss';
import Menu from './components/Menu';
import Addition from './components/Addition';
import Substraction from './components/Substraction';
import Division from './components/Division';
import Multiplication from './components/Multiplication';



function App() {

  return (
    <div className="App">
      <Link to="/" className="logo">Quiz app</Link>
      <div className="container">
      <Routes>
        <Route path="/" element={<Menu/>} />
        <Route path="/addition" element={<Addition/>} />
        <Route path="/substraction" element={<Substraction/>}/>
        <Route path="/multiplication" element={<Multiplication/>}/>
        <Route path="/division" element={<Division/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;



 





