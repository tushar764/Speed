
import React from "react";

const Dropdown = ({ selectedDevice, setSelectedDevice }) => {
  return (
    <div className="dropdown">
      <label htmlFor="device-type">Select Device:</label>
      <select
        id="device-type"
        value={selectedDevice}
        onChange={(e) => setSelectedDevice(e.target.value)}
      >
        <option value="desktop">Desktop</option>
        <option value="mobile">Mobile</option>
      </select>
    </div>
  );
};

export default Dropdown;




