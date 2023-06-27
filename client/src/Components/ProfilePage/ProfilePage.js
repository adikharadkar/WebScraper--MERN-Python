import React from 'react';

import '../../Styles/ProfilePage/ProfilePage.css';
import ProfileSummary from './Components/ProfileSummary';
import ProfileExperience from './Components/ProfileExperience';
import ProfileEducation from './Components/ProfileEducation';
import ProfileProject from './Components/ProfileProject';
import ProfileSkills from './Components/ProfileSkills';
import ProfileCertifications from './Components/ProfileCertifications';

const ProfilePage = () => {
    return (
        <div className="ProfilePage">
            <ProfileSummary />
            <ProfileExperience />
            <ProfileEducation />
            <ProfileProject />
            <ProfileSkills />
            <ProfileCertifications />
        </div>
    );
}

export default ProfilePage;