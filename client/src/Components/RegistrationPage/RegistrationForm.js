import React, { useState, useEffect } from 'react';
import validator from 'validator';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import InputField from '../InputField';
import Label from '../Label';
import Button from '../Button';
import '../../Styles/RegistrationPage/RegistrationForm.css';
import ErrorMessage from '../ErrorMessage';
import Modal from '../UI/Modal/Modal';

const RegistrationForm = () => {

    // Handling the state of the respective components
    const [errorUsername, setErrorUsername] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword1, setErrorPassword1] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [clicked, setClicked] = useState(false);
    const [jwtToken, setJwtToken] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('Token')) {
            let token = localStorage.getItem('Token');
            setJwtToken(token)
            navigate('/')
        }
    }, [jwtToken, navigate])

    // Handler to validate the username sent by the user
    const checkUsernameHandler = (event) => {
        let userInput = event.target.value;
        if (userInput.length <= 0) {
            setErrorUsername('Please enter a username');
        } else {
            setErrorUsername('');
        }
    }

    // Handler to send a POST request and send the user data to the backend
    const postDataHandler = (event) => {

        event.preventDefault();

        // Store the user input in a dictionary
        const postData = {
            username,
            email,
            password
        }

        if (username === '') {
            setMessage('Please enter a username');
        }else if (email === '') {
            setMessage('Please enter an Email ID');
        } else if (password === '') {
            setMessage("Please enter a password")
        }

        // Send a POST request only when the user inputs are validated
        if (errorEmail === '' && errorPassword1 === '' && errorUsername === '' && email !== '' && username !== '' && password !== '') {
            axios.post(`http://localhost:3001/signup`, JSON.stringify(postData), {
                headers: { 'content-type': 'application/json', "access-control-allow-origin" : "*", },
              })
                .then((res) => {
                    console.log(res.data.token);
                    setClicked(true);
                    localStorage.setItem('Token', res.data.token)
                    navigate('/');
                    
                })
                .catch((err) => {
                    if (err.response.status === 422) {
                        setMessage('User already exists! Please enter another email address or login instead!');
                    }
                    else if (err.response.status === 500) {
                        setMessage('Account could not be created. Please try again!');
                    } 
                    console.log(err);
                })
        }
    }

    // Handlers to get the userinput for the respective fields
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    // Handler to validate the email ID of user
    const checkEmailHandler = (event) => {
        let userInput = event.target.value;
        if (userInput.length <= 0) {
            setErrorEmail('Email ID is required!');
        } else {
            if (!validator.isEmail(userInput)) {
                setErrorEmail('Please enter a valid email ID');
            } else {
                setErrorEmail('');
            }
        }
        
    }

    // Handler to validate the password of user
    const checkPasswordHandler1 = (event) => {
        let userInput = event.target.value;
        if (userInput.length <= 0) {
            setErrorPassword1('Password is required!');
        } else {
            if (userInput.length < 8) {
                setErrorPassword1('Password must contain at least 8 characters!');
            } else {
                setErrorPassword1('');
            }
        }
    }

    const closeModalHandler = () => {
        setClicked(false);
    }

    return (
        <div>
            <Modal show={clicked}>
                <h2>Congratulations!!!</h2>
                <h3>Your accound has been created!</h3>
                <Button onClick={closeModalHandler} value="Close" />
            </Modal>
            <ErrorMessage message={message} />
            <div className='RegistrationForm'>
            
                <form onSubmit={postDataHandler}>
                    <ul>
                        <li><Label inputText="Username" /></li>
                        <li>
                        <InputField
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            onChange={(e) => {
                                checkUsernameHandler(e)
                                handleUsernameChange(e)
                            }}
                            value={username}
                        />
                        </li>
                        <li className='error'><span>{errorUsername}</span></li>
                        <li><Label inputText="Email ID" /></li>
                        <li>
                        <InputField
                            type="email"
                            name="email"
                            placeholder="Enter Email ID"
                            value={email}
                            onChange={(e) => {
                                checkEmailHandler(e)
                                handleEmailChange(e)
                            }}
                        />
                        </li>
                        <li className='error'><span>{errorEmail}</span></li>
                        <li><Label inputText="Password" /></li>
                        <li>
                        <InputField
                            type="password"
                            name="password1"
                            value={password}
                            placeholder="Enter Password"
                            onChange={(e) => {
                                checkPasswordHandler1(e)
                                handlePasswordChange(e)
                            }}
                        />
                        </li>
                        <li className='error'><span>{errorPassword1}</span></li>
                        
                        <li><Button value="Create Account" type="submit" /></li>
                        <li className="loginLink"><p>Already have an account ? <Link to='/login'>Log In</Link></p></li>
                    </ul>
                </form>
            </div>
        </div>
        
    )
}

export default RegistrationForm;