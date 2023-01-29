import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SayButton } from 'react-say';
import winSound from '../audio/winSound.wav';
import wrongSound from '../audio/wrongSound.mp3';
import gameCompleted from '../audio/gameCompleted.mp3';
import WinModal from './WinModal';



function Division(props) {

    const [score, setScore] = useState(0);
    const [answerInput, setAnswerInput] = useState('');
    const [num1, setNum1] = useState(Math.floor( Math.random() * 20 / 2 ) * 2 + 10);
    const [num2, setNum2] = useState(2);
    const[showWinModal, setShowWinModal] = useState(false);

    const generateOperation = (e) => {
        e.preventDefault();

        let result = num1 / num2;

        //if the answer is correct, increase score and change operations
        if(answerInput == result){
            setScore(score + 1); 
            toast.success("Correct!");
            playAudio(winSound);
        }
        else if(answerInput == ''){
            toast.warning("Input a number!");
            return;
        }
        else {
            toast.error("Wrong!");
            playAudio(wrongSound);
            return;
        }

        setNum1(Math.floor(Math.floor( Math.random() * 10 / 2 ) * 2 + 10));

        //stop the game when the score reaches 10
        if(score == 9){
            setShowWinModal(true);
            playAudio(gameCompleted);
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
                <WinModal/>
            }
             <section className="questionBox">
                <Link to="/" className="backBtn">
                    <FontAwesomeIcon  className="speechBtn" icon={faArrowCircleLeft} />
                </Link>
                <span>Score: {score}</span>
                <h1> How much is {num1} / {num2}?
                    <SayButton
                        speak= {"How much is " + num1 + "divided by" + num2}
                        rate={ 0.6 }
                        
                        >
                        <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
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
                    <a className="btnStyle" onClick={generateOperation}>Check answer
                        <SayButton
                            speak= "Check answer"
                            rate={ 0.6 }       
                            >
                            <FontAwesomeIcon  className="speechBtn" icon={faVolumeUp} />
                        </SayButton>
                    </a>
                </form>
                <ToastContainer 
                    position="bottom-center"
                    autoClose={1000}
                />
            </section>
        </>
    );
}

export default Division;