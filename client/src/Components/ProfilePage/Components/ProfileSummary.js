import React from 'react';
import '../../../Styles/ProfilePage/ProfilePage.css';

const ProfileSummary = () => {
    return (
        <div className="profile__summary">
            <span class="material-symbols-outlined update-btn">edit</span>
            <h2 className='profile__header'>Aditya Kharadkar</h2>
            <p className='profile__job-summary'>
                <h3>Frontend Developer at Tata Consultancy Services, Pune</h3>
            </p>
        </div>
    )
}

export default ProfileSummary;