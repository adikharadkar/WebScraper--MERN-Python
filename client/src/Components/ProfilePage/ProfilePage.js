import React from 'react';
import { Link } from 'react-router-dom';

import '../../Styles/ProfilePage/ProfilePage.css';

const ProfilePage = () => {
    return (
        <div className="ProfilePage">
            <div className="profile__summary">
                <h2 className='profile__header'>Aditya Kharadkar</h2>
                <p className='profile__job-summary'>
                    <h3>Frontend Developer at Tata Consultancy Services, Pune</h3>
                </p>
            </div>
            <div className="profile__experience">
                <h1 className="profile__header">Experience</h1>
                <h2 className="profile__job-position">Frontend Developer</h2>
                <h3 className="profile__job-company-name">Tata Consultancy Services</h3>
                <p className="profile__job-duration">1 year 9 months</p>
                <h3 className="profile__job-company-location">Pune, Maharashtra</h3>
                <p className="profile__job-dsecription">Handling multiple clients' requirements and performing multiple tasks. Keep on learning the relevant technologies such as React.js, Node.js, Python, SQL, Javascript, HTML, CSS, etc., with the work simultaneously. Good with communication skills.
Top 5 key skills:
React.js,Communication Skills,HTML,CSS,Javascript</p>
            </div>
            <div className="profile__education">
                <h1 className="profile__header">Education</h1>
                <h2 className="profile__degree-name">M.Sc. in Computer Science</h2>
                <h3 className='profile__university'>Dr. Babasaheb Ambedkar Marathwada University, Aurangabad</h3>
                <h3 className='profile__eduction-location'>Aurangabad, Maharashtra</h3>
                <p className="profile__eduction-duration">Aug 2021 - June 2023</p>
            </div>
            <div className="profile__project">
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
            <div className="profile__skills">
                <h1 className="profile__header">Skills</h1>
                <ul className="profile__skills-list">
                    <li className="profile__skills-item">React.js</li>
                    <li className="profile__skills-item">Node.js</li>
                    <li className="profile__skills-item">Python</li>
                    <li className="profile__skills-item">MongoDB</li>
                    <li className="profile__skills-item">HTML</li>
                    <li className="profile__skills-item">CSS</li>
                    <li className="profile__skills-item">Javascript</li>
                    <li className="profile__skills-item">MySQL</li>
                </ul>
            </div>
            <div className="profile__certifications">
                <h1 className="profile__header">Certifications</h1>
                <h2 className='profile__certificate-name'>React - The Complete Guide</h2>
                <h3 className='profile__organization-name'>Udemy</h3>
                <Link to="#">Certificate Link</Link>
            </div>
        </div>
    );
}

export default ProfilePage;