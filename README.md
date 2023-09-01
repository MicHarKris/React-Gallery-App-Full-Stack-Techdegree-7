# React-Gallery-App-Full-Stack-Techdegree-7
 A photo gallery application with a search function for different topics, using an API connection to Flickr.

Includes: 
Routes
- Routes declared between the Home Route, and the resultant Gallery Route when a search is made, as well as a Gallery Route when the pre-defined buttons are clicked - that all change the URL correspondingly.

API
- When navigating to another Route, the App accesses Flickr through their API and pulls 24 images for the given search-term.

Components
- Components for the Navigation, 404-route (NotFound), Gallery, Photo and NoResults contain the HTML in JSX form, that then build the page.

Layout, CSS and Styles: 
 Changes made to the original index.css - Changed some colors to yellow/yellowish, gave things a black outline and a dropshadow, and gave the photo-containers a rounded corner:
- body {[...] background-color: #ffffe0;}
- .search-form {[...] box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);}
- .search-form button {[...] background-color: #FFD700; border: 3px solid #333;}
- input {[...] border: 3px solid #333;}
- .main-nav a {[...] background-color: #FFD700; border: 3px solid #333; [...] color: #333; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);}
- .main-nav .active, .main-nav a:hover, .search-form button:hover {background-color: #ac9200;}
- .photo-container ul li {[...] border: 3px solid #333; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);}

Note: As per a warning in the DevTools, I changed 'import ReactDOM from 'react-dom';' to 'import { createRoot } from 'react-dom/client';' to create the Root reference in the DOM. Seems to be the version I was referencing from the study-courses was slightly outdated in that regard, cannot see any difference in the functionality of the app.