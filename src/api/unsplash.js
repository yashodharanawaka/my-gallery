const clientId = process.env.REACT_APP_UNSPLASH_CLIENT_ID;
const UNSPLASH_ROOT = 'https://api.unsplash.com';

export const getPhotosByQuery = async ({query}) => {
    return await fetch(`${UNSPLASH_ROOT}/search/photos?query=${query}&client_id=${clientId}&per_page=20`)
        .then(response => response.json())
        .then(data => data.results)
        .catch(error => console.error('Error fetching photos:', error));
};

export const getPhotoById = async ({id}) => {
    return await fetch(`${UNSPLASH_ROOT}/photos/${id}?client_id=${clientId}`)
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error fetching photos:', error));
};