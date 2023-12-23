import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';

const context = require.context('../../public/photos', false, /\.(png|jpe?g|svg)$/);

const Lightbox = () => {
    const {id} = useParams();
    const [photo, setPhoto] = useState(undefined);

    useEffect(() => {
        setPhoto({
            url: `/photos/${context.keys().find((path, index) => index === id - 1).substring(1)}`,
            alt_description: `Photo ${id}`,
        })
    }, [id]);

    return photo ? (
            <div className="lightbox-container">
                <img className="lightbox-image" src={photo.url} alt={photo.alt_description}/>
                <Link to="/" className="close-button">Close</Link>
            </div>
        )
        : (<div className="loader-container">
            <div className="loader"></div>
        </div>)

};

export default Lightbox;
