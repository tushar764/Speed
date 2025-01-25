// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dropdown from "./Components/Dropdown";
import Graph from "./Components/Graph";

const App = () => {
  const [selectedDevice, setSelectedDevice] = useState("desktop");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <Router>
        {/* Navbar with a dark mode toggle */}
        <Navbar toggleDarkMode={toggleDarkMode} />

        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <main className="main-content">
                {/* Device selection dropdown */}
                <Dropdown
                  selectedDevice={selectedDevice}
                  setSelectedDevice={setSelectedDevice}
                />

                {/* Dynamic graphs for selected metrics */}
                <div className="graphs">
                  <Graph metric="lcp" device={selectedDevice} />
                  <Graph metric="cls" device={selectedDevice} />
                </div>
              </main>
            }
          />

          {/* Static pages */}
          <Route path="/about" element={<h2>About Page</h2>} />
          <Route path="/contact" element={<h2>Contact Page</h2>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
