import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const context = require.context('../../public/photos', false, /\.(png|jpe?g|svg)$/);

const PhotoGallery = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const localPhotos = context.keys().map((imagePath, index) => {
            return {
                id: index + 1,
                url: `photos/${imagePath.substring(1)}`,
                alt_description: `Photo ${index + 1}`,
            };
        });
        setPhotos(localPhotos);
    }, []);

    return (
        <div className="photo-gallery">
            {photos.map((photo, index) => (
                <Link to={`/photo/${photo.id}`} key={index}>
                    <img src={photo.url} alt={photo.alt_description}/>
                </Link>
            ))}
        </div>
    );
};

export default PhotoGallery;
