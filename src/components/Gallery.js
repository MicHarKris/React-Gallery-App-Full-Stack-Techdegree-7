import React, { useState, useEffect } from 'react';
import Photo from './Photo';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NoResults from './NoResults';

const Gallery = ({ apiKey }) => {
    // State to store Flickr images and loading status
    const [flickrImages, setFlickrImages] = useState([]);
    const [loading, setLoading] = useState(true);

    // Access the searchTerm parameter from the URL
    const { searchTerm } = useParams();

    // Fetch images from the Flickr API when component mounts or searchTerm changes
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(
                    // Construct the Flickr API URL with apiKey and searchTerm
                    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1&tags=${searchTerm}`
                );

                if (response.data.photos) {
                    // Update state with fetched Flickr images and set loading to false
                    setFlickrImages(response.data.photos.photo);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching images from Flickr:', error);
                // Set loading to false in case of an error
                setLoading(false);
            }
        };

        // Call the fetchImages function
        fetchImages();
    }, [apiKey, searchTerm]);

    return (
        <div className="photo-container">
            <h2>{searchTerm}:</h2>
            {loading ? (
                // Display loading message when fetching images
                <p>Loading...</p>
            ) : flickrImages.length > 0 ? (
                // Display images when available
                <ul>
                    {flickrImages.map((photo) => (
                        // Render each image using the Photo component
                        <Photo
                            key={photo.id}
                            imageUrl={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                        />
                    ))}
                </ul>
            ) : (
                // Display NoResults component when no images are found
                <NoResults searchTerm={searchTerm} />
            )}
        </div>
    );
};

export default Gallery;
