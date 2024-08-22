import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SayButton } from 'react-say';
import winSound from '../../audio/winSound.wav';
import wrongSound from '../../audio/wrongSound.mp3';
import gameCompleted from '../../audio/gameCompleted.mp3';
import WinModal from '../WinModal';
import axios from 'axios';

function Subtraction(props) {
    const [score, setScore] = useState(0);
    const [answerInput, setAnswerInput] = useState('');
    const [num1, setNum1] = useState(Math.floor(Math.random() * (20 - 10 + 1) + 10));
    const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
    const [showWinModal, setShowWinModal] = useState(false);

    const [wrongAnswerCount, setWrongAnswerCount] = useState(0);
    const gameType = 'subtraction';
    const gameId = Math.floor(Math.random() * 15000);
    const gameTime =  new Date().toLocaleString();

    const loggedInUser = localStorage.getItem('username');

    // Save the current game state when the component unmounts
    // useEffect(() => {
    //     return () => {
    //         saveGame();
    //     };
    // }, []);

    const saveGame = async () => {
        const gameData = {
            id: gameId,
            user: loggedInUser,
            gameType,
            gameTime,
            wrongAnswerCount,
            score
        }
        try {
            await axios.post('http://localhost:8080/save', gameData)
        } catch (error) {
            console.log(error);
        }
    }

    const generateOperation = (e) => {
        e.preventDefault();

        let result = num1 - num2;

        //if the answer is correct, increase score and change operations
        if (parseInt(answerInput) === result) {
            setScore(score + 1);
            toast.success("Correct!");
            playAudio(winSound);
        } else if (answerInput === '') {
            toast.warning("Input a number!");
            return;
        } else {
            toast.error("Wrong!");
            playAudio(wrongSound);
            setWrongAnswerCount(wrongAnswerCount + 1);
            return;
        }

        setNum1(Math.floor(Math.random() * (20 - 10 + 1) + 10));
        setNum2(Math.floor(Math.random() * 10));

        //stop the game when the score reaches 10
        if (score === 10) {
            setShowWinModal(true);
            playAudio(gameCompleted);
            saveGame()
        }

        //clear the form
        setAnswerInput('');
    }

    const playAudio = (sound) => {
        new Audio(sound).play();
    }

    return (
        <>
            {showWinModal &&
                <WinModal />
            }
            <section className="questionBox">
                <Link to="/" className="backBtn">
                    <FontAwesomeIcon className="speechBtn" icon={faArrowCircleLeft} />
                </Link>
                <span>Score: {score}</span>
                <h1> How much is {num1} - {num2}?
                    <SayButton
                        speak={"How much is " + num1 + "minus" + num2}
                        rate={0.6}
                    >
                        <FontAwesomeIcon className="speechBtn" icon={faVolumeUp} />
                    </SayButton>
                </h1>
                <form>
                    <input
                        type="text"
                        htmlFor="answerInput"
                        name="answerInput"
                        value={answerInput}
                        onChange={(e) => setAnswerInput(e.target.value)}
                    />
                    <button className="btnStyle" onClick={generateOperation}>Check answer
                        <SayButton
                            speak="Check answer"
                            rate={0.6}
                        >
                            <FontAwesomeIcon className="speechBtn" icon={faVolumeUp} />
                        </SayButton>
                    </button>
                </form>
                <ToastContainer
                    position="bottom-center"
                    autoClose={1000}
                />
            </section>
        </>
    );
}

export default Subtraction;
