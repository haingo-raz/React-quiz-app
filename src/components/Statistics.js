import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import './Statistics.scss';

function Statistics(props) {
    const [data, setData] = useState([]);
    const loggedInUser = localStorage.getItem('username');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/getstats/subtraction?user=${loggedInUser}`);
                const gameData = response.data;

                // Filter and calculate accuracy for "subtraction" game type
                const filteredData = gameData
                    .filter(session => session.gameType === 'subtraction')
                    .map(session => {
                        const totalAnswers = session.score + session.wrongAnswerCount;
                        const calculatedAccuracy = (session.score / totalAnswers) * 100;
                        return {
                            gameTime: session.gameTime,
                            accuracy: session.accuracy ?? calculatedAccuracy,
                        };
                    });

                setData(filteredData);
            } catch (error) {
                console.error('Error fetching game data:', error);
            }
        };

        fetchData();
    }, [loggedInUser]);

    return (
        <div className="stats-page">
            <h1>Accuracy per game for subtraction</h1>
            <ResponsiveContainer width="90%" height="80%">
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
