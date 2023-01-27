import React from 'react';

const operations = ['+', '-', '*', '/'];



const operation = () => {

    //Random numbers from 0 to 1
    var num1 = Math.floor(Math.random() * 20) + 1
    var num2 = Math.floor(Math.random() * 10) + 1
    var randomOperation = operations[Math.floor(Math.random() * operations.length)];
    var question = num1 + ' + ' + num2;
    var answer = question;

    return answer;
}

function Questions(props) {
    return (
        <span>
            {operation()}
        </span>
    );
}

export default Questions;