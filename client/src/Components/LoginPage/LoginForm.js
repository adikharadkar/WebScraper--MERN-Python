import React, {useState, useEffect} from "react";
import validator from 'validator';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../Styles/LoginPage/LoginForm.css'
import Button from "../Button";
import InputField from "../InputField";
import Label from "../Label";

const LoginForm = () => {
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword1, setErrorPassword1] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [jwtToken, setJwtToken] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('Token')) {
            let token = localStorage.getItem('Token');
            setJwtToken(token)
            navigate('/')
        }
    }, [jwtToken, navigate])

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

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const postDataHandler = async (event) => {

        // Preventing the app from re-rendering after sending a POST request
        event.preventDefault();

        // Store the user credentials in a dictionary
        const postData = {
            email,
            password
        }
        console.log(postData)

        // Send a POST request if the user input is validated
        if (errorEmail === '' && errorPassword1 === '') {

            // fetch('http://localhost:3001/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(postData)
            // });

            axios.post(`http://localhost:3001/login`, postData)
                .then((res) => {
                    console.log(res);
                    localStorage.setItem('Token', res.data.token)
                    navigate('/');
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <div className='LoginForm' onSubmit={postDataHandler}>
            <form>
                <ul>
                    <li><Label inputText="Email ID" /></li>
                    <li>
                    <InputField
                        type="email"
                        name="email"
                        placeholder="Enter Email ID"
                        onChange={(e) => {
                            checkEmailHandler(e)
                            handleEmailChange(e)
                        }}
                        value={email}
                    />
                    </li>
                    <li className='error'><span>{errorEmail}</span></li>
                    <li><Label inputText="Password" /></li>
                    <li>
                    <InputField
                        type="password"
                        name="password1"
                        placeholder="Enter Password"
                        onChange={(e) => {
                            checkPasswordHandler1(e)
                            handlePasswordChange(e)
                        }}
                        value={password}
                    />
                    </li>
                    <li className='error'><span>{errorPassword1}</span></li>
                    <li className="forgotPassword"><p>Forgot Password ?</p></li>
                    
                    <li><Button value="Log In" type="submit" /></li>
                    <li className="signupLink"><p>Don't have an account ? <Link to='/signup'>Sign Up</Link></p></li>
                </ul>
            </form>
        </div>
    )
}

export default LoginForm;