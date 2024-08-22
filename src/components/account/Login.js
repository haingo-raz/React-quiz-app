import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Login({ onClose }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [feedback, setFeedback] = useState('');

    const navigate = useNavigate();

    const onLogin = (e) => { 
        e.preventDefault();
        axios.post('http://localhost:8080/login', {
            username: username, 
            password: password
        }).then((response) => {
            if (response.data.statusCode === 200){
                setFeedback(`${response.data.username} successfully logged in`);
                localStorage.setItem('username', response.data.username);
                navigate('/');
                window.location.reload();
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
            <form className="modalContainer" onSubmit={onLogin}>
                <Link to="/" className="backBtn" onClick={onClose}>
                    <FontAwesomeIcon className="speechBtn" icon={faArrowCircleLeft} />
                </Link>
                <div className="content">
                    <h1>Login</h1>
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
                    <button className="btnStyle" type="submit">Login</button>
                    <p>{feedback}</p>
                    <Link to="/signup">Create an account instead</Link>
                </div>
            </form>
        </>
    );
}

export default Login;