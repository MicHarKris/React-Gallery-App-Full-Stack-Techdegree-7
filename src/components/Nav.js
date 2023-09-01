import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    // State to store the search term
    const [searchTerm, setSearchTerm] = useState('');
    
    // Get the navigate function for routing
    const navigate = useNavigate();

    // Handle form submission when searching
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        
        // Check if the search term is not empty
        if (searchTerm.trim() === '') return;

        // Navigate to the search results page with the search term
        navigate(`/${searchTerm}`);
    };

    return (
        // Navigation component with search bar and links
        <nav className="main-nav">
            <form className="search-form" onSubmit={handleSearchSubmit}>
                {/* Input for searching */}
                <input
                    type="search"
                    name="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    required
                />
                {/* Search button */}
                <button type="submit" className="search-button">
                    {/* Search icon */}
                    <svg
                        fill="#333"
                        height="24"
                        viewBox="0 0 23 23"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Search icon path */}
                        {<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>}
                    </svg>
                </button>
            </form>
            {/* List of navigation links */}
            <ul>
                <li>
                    <Link to="/cats">Cats</Link>
                </li>
                <li>
                    <Link to="/dogs">Dogs</Link>
                </li>
                <li>
                    <Link to="/computers">Computers</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
