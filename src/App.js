import React from "react";
import { Route, Routes } from "react-router-dom";

// Import App Components and API Key
import NotFound from "./components/NotFound";
import Gallery from "./components/Gallery";
import Nav from "./components/Nav";
import apiKey from "./config";

function App() {
  return (
    // Main container for the entire app
    <div className="container">
      {/* Always display the Nav component */}
      <Nav />

      {/* Define routes for different components */}
      <Routes>
        {/* Root route ("/"): No component rendered, Nav remains visible */}
        <Route path="/" element={null} />

        {/* Route with a dynamic "searchTerm" parameter: Displays Gallery */}
        <Route path="/:searchTerm" element={<Gallery apiKey={apiKey} />} />

        {/* Catch-all route: Shows NotFound for unmatched routes */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
