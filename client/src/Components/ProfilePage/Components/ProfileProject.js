import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Styles/ProfilePage/ProfilePage.css';

const ProfileProject = () => {
    return (
        <div className="profile__project">
            <span class="material-symbols-outlined update-btn">edit</span>
            <h1 className="profile__header">Projects</h1>
            <h2 className="profile__project-name">Web Scraper</h2>
            
            <h3>Project Description</h3>
            <p className="profile__project-description">
                Web Scraper is a web application which is developed to help different job seeking candidates to get the information 
                about all the current openings. Candidates can create their accounts and setup their profile. The application takes 
                job position and company location as inputs, access the different job posting websites, searches by entering the user 
                inputs, scans the search results and extracts them and shows them on the application.
            </p>
            <h3>Techologies Used</h3>
            <ul className="profile__project-technologies">
                <li className="profile__project-technology-item">React.js</li>
                <li className="profile__project-technology-item">Node.js</li>
                <li className="profile__project-technology-item">Python</li>
                <li className="profile__project-technology-item">MongoDB</li>
                <li className="profile__project-technology-item">Express.js</li>
            </ul>
            <p>Project Link - <Link to="https://github.com/adikharadkar/WebScraper--MERN-Python">https://github.com/adikharadkar/WebScraper--MERN-Python</Link></p>
        </div>
    )
}

export default ProfileProject;