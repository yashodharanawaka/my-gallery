import React from 'react';

const MyProfile = () => {
    console.log('Rendering MyProfile component');
    return (
        <div className="contact-container">
            <div className="contact-details">
                <h2>About Me</h2>
                <p>Welcome to my portfolio! I'm passionate about capturing moments and telling stories through
                    photography. Whether it's portraits, landscapes, or events, I strive to create visual narratives
                    that leave a lasting impression.</p>

                <h3>Skills & Expertise</h3>
                <p>Specializing in portrait photography, event coverage, and stunning landscapes. Proficient in using
                    state-of-the-art equipment and innovative techniques to capture the perfect shot.</p>

                <h3>Awards & Recognition</h3>
                <p>Recipient of the "Photographer of the Year" award (2022) and featured in Photography Magazine's Top
                    10 Emerging Photographers.</p>

                <h3>Follow Me</h3>
                <p>Stay connected for the latest updates and behind-the-scenes moments.</p>
                <div className="social-links">
                    <a href="https://www.instagram.com/photographer/" target="_blank"
                       rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.facebook.com/photographer/" target="_blank"
                       rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com/photographer/" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
            <div className="contact-picture">
                <img src='profile_pic.jpg' alt="Profile Pic"/>
            </div>

            <div className="contact-form">
                <h2>Contact Me</h2>
                <div className="contact-details">
                    <p>Email: myself@somehwere.com</p>
                    <p>Phone: +94 00-000-0000</p>
                    <p>Address: 1/44,Udara Mw., Colombo 01, Sri Lanka</p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
