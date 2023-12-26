import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';


const MyProfile = () => {
    console.log('Rendering MyProfile component');
    return (
        <div className="contact-container">
            <div className="contact-details">
                <h2>About Me</h2>
                <p>Welcome to my portfolio!<br/>I'm passionate about capturing moments and telling stories through
                    photography. Whether it's portraits, landscapes, or events, I strive to create visual narratives
                    that leave a lasting impression.<br/>I am a recipient of the "Photographer of the Year" award (2022)
                    and featured in Photography Magazine's Top
                    10 Emerging Photographers.<br/>Further,I am Specializing in portrait photography, event coverage,
                    and stunning landscapes. Proficient in using
                    state-of-the-art equipment and innovative techniques to capture the perfect shot.</p>
            </div>

            <div className="contact-form">
                <div className="contact-picture">
                    <img src='profile_pic.jpg' alt="Profile Pic"/>
                </div>
                <h2>Contact Me</h2>
                <div className="contact-details">
                    <p>Email: myself@somehwere.com</p>
                    <p>Phone: +94 71-000-0000</p>
                    <p>Address: 1/44,Udara Mw., Colombo 01, Sri Lanka</p>
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                    <div className="social-links">
                        <a href="https://www.instagram.com/photographer/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                        <a href="https://www.facebook.com/photographer/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                        <a href="https://twitter.com/photographer/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
