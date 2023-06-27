import React, { useState } from 'react';
import '../../../Styles/ProfilePage/ProfilePage.css';
import InputField from '../../InputField';
import Button from '../../Button';

const ProfileSummary = () => {
    const [clicked, setClicked] = useState(false);
    const editBtnClickedHandler = () => {
        setClicked(!clicked);
    }
    return (
        <div className="profile__summary">
            <h1 className="profile__header">Profile Summary</h1>
            {
                !clicked ? 
                <div>
                    <span class="material-symbols-outlined update-btn" onClick={editBtnClickedHandler}>edit</span>
                    <h2 className='profile__header'>Aditya Kharadkar</h2>
                    <p className='profile__job-summary'>
                        <h3>Frontend Developer at Tata Consultancy Services, Pune</h3>
                    </p>
                </div> : 
                <div>
                    <InputField type="text" name="firstName" placeholder="Enter first name" />
                    <InputField type="text" name="lastName" placeholder="Enter last name" />
                    <InputField type="text" name="title" placeholder="Enter a title" />
                    <Button name="summaryBtn" value="Update" width="100px" />
                    <Button name="cancelSummaryBtn" value="Cancel" width="100px" onClick={editBtnClickedHandler} />
                </div>
            }
            
        </div>
    )
}

export default ProfileSummary;