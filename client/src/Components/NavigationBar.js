import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/NavigationBar.css';

const NavigationBar = () => {
    
    return (
        <nav>
            <header className='header'>
            <Link to="/" className="nav-title"><h1>Web Scraper</h1></Link>
            <div className='topnav-right'>
                
                <Link to="/login" className="nav-link"><h2>Log In</h2></Link>
                <Link to="/signup" className="nav-link"><h2>Create Account</h2></Link>
            </div>
            </header>
        </nav>
    );
    
}

export default NavigationBar;