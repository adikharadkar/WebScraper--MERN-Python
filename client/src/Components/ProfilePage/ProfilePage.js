import React from 'react';

import '../../Styles/ProfilePage/ProfilePage.css';

const ProfilePage = () => {
    return (
        <div>
            <div className="profile__summary">
                <h2 className='profile__user-name'>Aditya Kharadkar</h2>
                <p className='profile__job-summary'>
                    <p className='profile__job-position'>Frontend Developer at </p>
                    <p className='profile__job-company'>&nbsp;Tata Consultancy Services,&nbsp;</p>
                    <p className='profile__job-location'>Pune</p>
                </p>
            </div>
        </div>
    );
}

export default ProfilePage;