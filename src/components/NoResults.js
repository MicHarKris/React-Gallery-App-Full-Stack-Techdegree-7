import React from 'react';

// Define a functional component for displaying a "No Results Found" message
const NoResultsFound = ({ searchTerm }) => (
    <div className="not-found">
        {/* Display a heading indicating "No Results Found" along with the searched term */}
        <h3>No Results Found</h3>
        {/* Display a message indicating that no results were found for the searched term */}
        <p>Your search for "{searchTerm}" did not return any results. Please try again.</p>
    </div>
);

export default NoResultsFound;
