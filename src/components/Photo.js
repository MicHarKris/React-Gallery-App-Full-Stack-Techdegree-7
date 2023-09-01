import React, { useState } from 'react';

const Photo = ({ imageUrl }) => {
    // State to track whether there's an error loading the image
    const [imageError, setImageError] = useState(false);

    // Handle image loading error
    const handleImageError = () => {
        setImageError(true);
    };

    // Open the full-size image in a new tab when clicked
    const openFullSizeImage = () => {
        window.open(imageUrl, '_blank');
    };

    return (
        // List item for each image with error handling
        <li className={`image-item ${imageError ? 'error' : ''}`}>
            {imageError ? (
                // Error message when image fails to load
                <div className="not-found">
                    <h3>Error Loading Image</h3>
                    <p>There was an issue loading this image. Please try again later.</p>
                </div>
            ) : (
                // Display the image with error handling and click-to-open feature
                <img
                    src={imageUrl}
                    alt=""
                    onError={handleImageError}
                    onClick={openFullSizeImage}
                    style={{ cursor: 'pointer' }}
                />
            )}
        </li>
    );
};

export default Photo;
