import React, { useState } from 'react';
import '../../../Styles/ProfilePage/ProfilePage.css';
import InputField from '../../InputField';
import Button from '../../Button';

const ProfileExperience = () => {
    const [clicked, setClicked] = useState();
    const editBtnClickedHandler = () => {
        setClicked(!clicked);
    }
    return (
        <div className="profile__experience">
            <span class="material-symbols-outlined update-btn" onClick={editBtnClickedHandler}>edit</span>
            <h1 className="profile__header">Experience</h1>
            <h2 className="profile__job-position">Frontend Developer</h2>
            <h3 className="profile__job-company-name">Tata Consultancy Services</h3>
            <p className="profile__job-duration">1 year 9 months</p>
            <h3 className="profile__job-company-location">Pune, Maharashtra</h3>
            <p className="profile__job-dsecription">
                Handling multiple clients' requirements and performing multiple tasks. Keep on learning the relevant technologies
                such as React.js, Node.js, Python, SQL, Javascript, HTML, CSS, etc., with the work simultaneously. Good with
                communication skills. Top 5 key skills: React.js,Communication Skills,HTML,CSS,Javascript
            </p>

            

        </div>
    )
}

export default ProfileExperience;