import React from 'react';

import '../../../Styles/ProfilePage/ProfilePage.css';

const ProfileSkills = () => {
    return (
        <div className="profile__skills">
            <span class="material-symbols-outlined update-btn">edit</span>
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
    )
}

export default ProfileSkills;