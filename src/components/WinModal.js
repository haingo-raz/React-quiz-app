import React from 'react';
import { Link } from 'react-router-dom';
import './WinModal.scss';
import click from '../audio/button-pixabay.mp3';

function WinModal() {

    const playAudio = (sound) => {
        new Audio(sound).play();
    }

    return (
        <>
            <Link to="/" className="backdrop"></Link>
            <div className="modalContainer">
                <div className="content">
                <Link to="/" className="close">X</Link>
                    <img src="./assets/win.png" alt="cookies-img" />
                    <p>Congratulations, you reached 10 correct answers</p>
                    <Link to="/" className="menuBtn" onClick={playAudio(click)}>Return to menu</Link>
                </div>
            </div>
        </>
        
    );
}

export default WinModal;