import React from 'react';
import { Link } from 'react-router-dom';

import '../../../Styles/ProfilePage/ProfilePage.css';

const ProfileCertifications = () => {
    return (
        <div className="profile__certifications">
            <span class="material-symbols-outlined update-btn">edit</span>
            <h1 className="profile__header">Certifications</h1>
            <h2 className='profile__certificate-name'>React - The Complete Guide</h2>
            <h3 className='profile__organization-name'>Udemy</h3>
            <Link to="#">Certificate Link</Link>
        </div>
    )
}

export default ProfileCertifications;