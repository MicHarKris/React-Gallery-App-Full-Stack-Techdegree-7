import React from "react";
import { Route, Routes} from "react-router-dom";

// App Components

import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
