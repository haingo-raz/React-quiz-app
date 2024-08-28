import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import './Statistics.scss';

function Statistics(props) {
    const [data, setData] = useState([]);
    const [operation, setOperation] = useState('addition');
    const loggedInUser = localStorage.getItem('username');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/getstats/${operation}?user=${loggedInUser}`);
                const gameData = response.data;

                // Filter and calculate accuracy
                const filteredData = gameData
                    .filter(session => session.gameType === operation)
                    .map(session => {
                        const totalAnswers = session.score + session.wrongAnswerCount;
                        const calculatedAccuracy = (session.score / totalAnswers) * 100;
                        return {
                            gameTime: session.gameTime,
                            accuracy: session.accuracy ?? calculatedAccuracy,
                        };
                    })
                    .sort((a, b) => new Date(a.gameTime) - new Date(b.gameTime));

                setData(filteredData);
            } catch (error) {
                console.error('Error fetching game data:', error);
            }
        };

        fetchData();
    }, [loggedInUser, operation]);

    const handleButtonClick = (selectedOperation) => {
        setOperation(selectedOperation);
    };

    return (
        <div className="stats-page">
            <div className="stats-options">
                <button className={`btnStyle ${operation === 'addition' ? 'active' : ''}`} onClick={() => handleButtonClick('addition')}>Addition</button>
                <button className={`btnStyle ${operation === 'subtraction' ? 'active' : ''}`} onClick={() => handleButtonClick('subtraction')}>Subtraction</button>
                <button className={`btnStyle ${operation === 'multiplication' ? 'active' : ''}`} onClick={() => handleButtonClick('multiplication')}>Multiplication</button>
                <button className={`btnStyle ${operation === 'division' ? 'active' : ''}`} onClick={() => handleButtonClick('division')}>Division</button>
            </div>
            <h1>Accuracy per game for {operation}</h1>
            <ResponsiveContainer width="90%" height="75%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="gameTime" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="accuracy" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Statistics;
