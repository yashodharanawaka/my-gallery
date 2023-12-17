import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {getPhotosByQuery} from "../api/unsplash";

const PhotoGallery = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        getPhotosByQuery({query: 'nature', per_page: 20}).then(data => {
            console.info('Fetched photos.')
            setPhotos(data)
        });
    }, []);

    return (
        <div className="photo-gallery">
            {photos.map((photo, index) => (
                <Link to={`/photo/${photo.id}`} key={index}>
                    <img src={photo.urls.small_s3} alt={photo.alt_description}/>
                </Link>
            ))}
        </div>
    );
};

export default PhotoGallery;
