import React from 'react';
import { Bar } from 'react-chartjs-2';

const FeedbackVisuals = () => {
  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10'],
    datasets: [
      {
        label: 'Feedback Ratings',
        data: [3, 4, 5, 2, 4, 5, 3, 4, 5, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>Feedback Visuals</h2>
      <Bar data={data} />
    </div>
  );
};

export default FeedbackVisuals;
