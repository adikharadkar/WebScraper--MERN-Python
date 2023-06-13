import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/NavigationBar.css';

const InNavigationBar = () => {

    const LogoutHandler = () => {
        localStorage.removeItem('Token')
    }
    
    return (
        <nav>
            <header className='header'>
            <Link to="/" className="nav-title"><h1>Web Scraper</h1></Link>
            <div className='topnav-right'>
                <Link to="/" className="nav-link">
                    <h2>Search Jobs</h2>
                </Link>
                <Link to="/logout" className="nav-link" onClick={LogoutHandler}><h2>Logout</h2></Link>
            </div>
            </header>
        </nav>
    );
    
}

export default InNavigationBar;