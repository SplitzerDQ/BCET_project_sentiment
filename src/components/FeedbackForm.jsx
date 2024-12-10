import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({});

  const handleInput = (e, question) => {
    setFeedback({ ...feedback, [question]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedback);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Give Feedback</h2>
      {[...Array(10)].map((_, i) => (
        <div key={i}>
          <label>Question {i + 1}</label>
          <input type="text" onChange={(e) => handleInput(e, `Q${i + 1}`)} />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
