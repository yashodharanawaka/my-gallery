import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import {getPhotoById} from "../api/unsplash";

const Lightbox = () => {
    const {id} = useParams();
    const [photo, setPhoto] = useState(undefined);

    useEffect(() => {
        getPhotoById({id}).then(data => {
            console.info('Fetched photo.')
            setPhoto(data);
        });
    }, [id]);

    return photo ? (
            <div className="lightbox-container">
                <img className="lightbox-image" src={photo.urls.small_s3} alt={photo.alt_description}/>
                <Link to="/" className="close-button">Close</Link>
            </div>
        )
        : (<div className="loader-container">
            <div className="loader"></div>
        </div>)

};

export default Lightbox;
