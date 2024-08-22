import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'; // Add this line
import axios from 'axios';

function SignUp({ onClose }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [feedback, setFeedback] = useState('');

    const navigate = useNavigate()

    const onSignUp = (e) => { 
        e.preventDefault();
        axios.post('http://localhost:8080/signup', {
            username: username, 
            password: password
        }).then((response) => {
            if (response.data.statusCode === 200){
                setFeedback(`Account created for ${response.data.username}`);
                navigate('/login');
            } else {
                setFeedback(response.data.message);
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <Link to="/" className="backdrop" onClick={onClose}></Link>
            <form className="modalContainer" onSubmit={onSignUp}>
                <Link to="/" className="backBtn" onClick={onClose}>
                    <FontAwesomeIcon className="speechBtn" icon={faArrowCircleLeft} />
                </Link>
                <div className="content">
                    <h1>Register</h1>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            onChange = {(e) => setUsername(e.target.value)}
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            onChange = {(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="btnStyle" type="submit">Create an account</button>
                    <p>{feedback}</p>
                    <Link to="/login">Log in instead</Link>
                </div>
            </form>
        </>
    );
}

export default SignUp;