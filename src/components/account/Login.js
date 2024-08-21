import React from 'react';
import { Link } from 'react-router-dom';
import './../Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'; // Add this line

function Login({ onClose }) {

    return (
        <>
            <Link to="/" className="backdrop" onClick={onClose}></Link>
            <div className="modalContainer">
                <Link to="/" className="backBtn" onClick={onClose}>
                    <FontAwesomeIcon className="speechBtn" icon={faArrowCircleLeft} />
                </Link>
                <div className="content">
                    <h1>Login</h1>
                    <div>
                        <input type="text" placeholder="Username" required/>
                        <input type="password" placeholder="Password" required/>
                    </div>
                    <button className="btnStyle" type="submit">Login</button>
                    <Link to="/signup">Create an account instead</Link>
                </div>
            </div>
        </>
    );
}

export default Login;