import React from 'react';
import '../../../Styles/ProfilePage/ProfilePage.css';

const ProfileEducation = () => {
    return (
        <div className="profile__education">
            <span class="material-symbols-outlined update-btn">edit</span>
            <h1 className="profile__header">Education</h1>
            <h2 className="profile__degree-name">M.Sc. in Computer Science</h2>
            <h3 className='profile__university'>Dr. Babasaheb Ambedkar Marathwada University, Aurangabad</h3>
            <h3 className='profile__eduction-location'>Aurangabad, Maharashtra</h3>
            <p className="profile__eduction-duration">Aug 2021 - June 2023</p>
        </div>
    )
}

export default ProfileEducation;