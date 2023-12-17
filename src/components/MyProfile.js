import React from 'react';

const MyProfile = () => {
    return (
        <div className="contact-container">
            <div className="contact-details">
                <h2>Contact Information</h2>
                <p>Email: your-email@example.com</p>
                <p>Phone: +1 (123) 456-7890</p>
                <p>Address: 123 Street, City, Country</p>
            </div>
            <div className="contact-picture">
                <img src={process.env.PUBLIC_URL + '/your-picture.jpg'} alt="Your Name" />
            </div>
        </div>
    );
};

export default MyProfile;
