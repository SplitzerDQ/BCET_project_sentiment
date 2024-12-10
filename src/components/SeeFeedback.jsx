import React, { useState } from 'react';
import '../styles.css';

const SeeFeedback = () => {
  const [selectedCollege, setSelectedCollege] = useState('');

  const colleges = ['College A', 'College B', 'College C', 'College D'];

  const handleCollegeChange = (e) => {
    setSelectedCollege(e.target.value);
  };

  return (
    <div className="feedback-form">
      <h2>See Feedback</h2>

      <div>
        <label htmlFor="college-dropdown">Select College:</label>
        <select
          id="college-dropdown"
          value={selectedCollege}
          onChange={handleCollegeChange}
        >
          <option value="">--Select a College--</option>
          {colleges.map((college, index) => (
            <option key={index} value={college}>
              {college}
            </option>
          ))}
        </select>
      </div>

      {selectedCollege && (
        <div className="feedback-statistics">
          <h3>Feedback Statistics for {selectedCollege}</h3>
          <p>(Statistics will be displayed here once the backend is implemented.)</p>
          {/* Placeholder for future statistics visualization */}
          <div className="placeholder-chart">
            <p>[Bar chart or other visualizations]</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeeFeedback;
