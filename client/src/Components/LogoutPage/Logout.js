import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import '../../Styles/LogoutPage/Logout.css';

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('Token')) {
            localStorage.removeItem('Token')
        }
        setTimeout(() => {
            console.log('This will run after 1 second!')
          }, 3000);
        
        navigate('/login')
    }, [navigate])
    return (
        <div className="spinner-container">
            <div className="loading-spinner">
            </div>
        </div>
    )
}

export default Logout;