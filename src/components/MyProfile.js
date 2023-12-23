import React from 'react';

const MyProfile = () => {
    console.log('Rendering MyProfile component');
    return (
        <div className="contact-container">
            <div className="contact-details">
                <h2>Contact Information</h2>
                <p>Email: myself@somehwere.com</p>
                <p>Phone: +94 00-000-0000</p>
                <p>Address: 1/44,Udara Mw., Colombo 01, Sri Lanka</p>
            </div>
            <div className="contact-picture">
                <img src='profile_pic.jpg' alt="Profile Pic" />
            </div>
        </div>
    );
};

export default MyProfile;
