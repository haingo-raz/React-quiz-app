import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faInfoCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import './App.scss';
import Menu from './components/Menu';
import Addition from './components/operations/Addition';
import Subtraction from './components/operations/Subtraction';
import Division from './components/operations/Division';
import Multiplication from './components/operations/Multiplication';
import InfoModal from './components/InfoModal';
import Login from './components/account/Login';
import SignUp from './components/account/SignUp';
import Statistics from './components/Statistics';

function App() {
  const [showInfoModal, setShowInfoModal] = useState(false);

  const toggleModal = () => {
    setShowInfoModal(!showInfoModal);
  }
  const [loggedInUser, setLoggedInUser] = useState('');

  const user = localStorage.getItem('username');
  useEffect(() => {
    setLoggedInUser(user);
  }, [user]);

  const onLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('username');
      setLoggedInUser('');
    }
  }

  return (
    <div className="App">
      <Link to="/" className="logo">Quiz app</Link>
      <div className="options">
        {loggedInUser && <span>Welcome {loggedInUser}!</span>}
        <div className="info" onClick={toggleModal} title="help">
          <FontAwesomeIcon icon={faInfoCircle} />
        </div>
        { loggedInUser ? 
        <>
        <Link to="/statistics">
          <div className="info" title="statistics">
            <FontAwesomeIcon icon={faDashboard} />
          </div>
        </Link>
        <button className="btnStyle" onClick={onLogout}>Logout</button> 
        </>
        :
        <Link to="/login">
          <div className="login" title="Log in to save your scores and performance">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </Link>
        }
      </div>
      {showInfoModal &&
        <InfoModal onClose={toggleModal}/>
      }

      <div className="container">
        <Routes>
          <Route path="/" element={<Menu/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/addition" element={<Addition/>} />
          <Route path="/subtraction" element={<Subtraction/>}/>
          <Route path="/multiplication" element={<Multiplication/>}/>
          <Route path="/division" element={<Division/>}/>
          <Route path="/statistics" element={<Statistics/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
