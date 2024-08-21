import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import './App.scss';
import Menu from './components/Menu';
import Addition from './components/operations/Addition';
import Subtraction from './components/operations/Subtraction';
import Division from './components/operations/Division';
import Multiplication from './components/operations/Multiplication';
import InfoModal from './components/InfoModal';

function App() {
  const [showInfoModal, setShowInfoModal] = useState(false);

  const toggleModal = () => {
    setShowInfoModal(!showInfoModal);
  }

  return (
    <div className="App">
      <Link to="/" className="logo">Quiz app</Link>
      <div className="info" onClick={toggleModal} title="help">
        <FontAwesomeIcon icon={faInfoCircle} />
      </div>
      {showInfoModal &&
        <InfoModal onClose={toggleModal}/>
      }
      <div className="container">
        <Routes>
          <Route path="/" element={<Menu/>} />
          <Route path="/addition" element={<Addition/>} />
          <Route path="/subtraction" element={<Subtraction/>}/>
          <Route path="/multiplication" element={<Multiplication/>}/>
          <Route path="/division" element={<Division/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
