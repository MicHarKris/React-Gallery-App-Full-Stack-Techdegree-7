import React from 'react';

// Define a functional component for displaying a "Not Found" message
const NotFound = () => (
  <div className="main-content not-found">
    {/* Display an error icon */}
    <i className="material-icons icn-error">error_outline</i>
    {/* Display a heading indicating "Page Not Found" */}
    <h2>Page Not Found</h2>
  </div>
);

export default NotFound;
