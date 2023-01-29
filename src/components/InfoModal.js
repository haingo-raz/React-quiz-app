import React from 'react';
import { Link } from 'react-router-dom';
import click from '../audio/button-pixabay.mp3';
import './InfoModal.scss';

function InfoModal({onClose}) {

    const playAudio = (sound) => {
        new Audio(sound).play();
    }

    return (
        <>
            <Link to="/" className="backdrop" onClick={onClose}></Link>
            <div className="modalContainer">
                <div className="content">
                <Link to="/" className="close" onClick={onClose}>X</Link>
                    <img src="https://i0.wp.com/armeehistoire.fr/wp-content/uploads/2022/11/archimede.png?resize=750%2C750&ssl=1" alt="cookies-img" />
                    <p>Did you know that Archimedes is the father of Mathematics?</p>
                    <ul>
                        <li>Score + 1 for each good answer.</li>
                        <li>Score + 0 for each wrong answer.</li>
                        <li>Complete 10 correct answers to finish a game.</li>
                    </ul>
                    <Link to="/" className="menuBtn" onClick={onClose}>Return to menu</Link>
                </div>
            </div>
    </>
    );
}

export default InfoModal;