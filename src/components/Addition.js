import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Addition(props) {

    const [score, setScore] = useState(0);
    const [answerInput, setAnswerInput] = useState();
    const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
    const [num2, setNum2] = useState(Math.floor(Math.random() * 10));

    const generateOperation = (e) => {
        e.preventDefault();

        let result = num1 + num2;

        //if the answer is correct, increase score and change operations
        if(answerInput == result){
            setScore(score + 1); 
            toast.success("Correct!");
        } 
        else toast.error("Wrong!");

        setNum1(Math.floor(Math.random() * 10));
        setNum2(Math.floor(Math.random() * 10));

        //stop the game when the score reaches 10
        if(score == 9){
            alert('congrats!');
        }

        //clear the form
        setAnswerInput();
    }


    return (
        <section className="questionBox">
            <Link to="/" className="backBtn">
            <FontAwesomeIcon  className="speechBtn" icon={faArrowCircleLeft} />
            </Link>
            <span>{score}</span>
            <h1> How much is  {num1} + {num2}?</h1>
            <form>
                <input 
                    type="text" 
                    htmlFor="answerInput" 
                    name="answerInput"
                    defaultValue={answerInput}
                    onChange={(e) => setAnswerInput(e.target.value)}
                    />
                <button className="btnStyle" onClick={generateOperation}>Check answer</button>
            </form>
            <ToastContainer 
                position="bottom-center"
                autoClose={1000}
            />
        </section>
    );
}

export default Addition;