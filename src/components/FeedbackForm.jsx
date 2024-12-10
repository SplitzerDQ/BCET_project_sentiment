import React, { useState } from 'react';
import '../styles.css';

const FeedbackForm = () => {
  const [selectedCollege, setSelectedCollege] = useState('');
  const [feedback, setFeedback] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1); // Start with no question displayed

  const colleges = ['College A', 'College B', 'College C', 'College D'];

  const questions = [
    'How do you rate the teaching quality?',
    'How do you rate the campus facilities?',
    'How do you rate the student support services?',
    'How satisfied are you with the course content?',
    'How do you rate the extracurricular activities?',
    'How do you rate the career support services?',
    'How do you rate the administration efficiency?',
    'How do you rate the accessibility of resources?',
    'How do you rate the student community?',
    'How likely are you to recommend this college to others?',
  ];

  const handleCollegeChange = (e) => {
    setSelectedCollege(e.target.value);
    setFeedback({});
    setCurrentQuestionIndex(0); // Start with the first question
  };

  const handleInputChange = (e, questionIndex) => {
    setFeedback({ ...feedback, [`Q${questionIndex + 1}`]: e.target.value });
  };

  const handleNextQuestion = (e) => {
    e.preventDefault();
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('Feedback Submitted:', feedback);
      alert('Thank you for your feedback!');
      setSelectedCollege('');
      setCurrentQuestionIndex(-1);
      setFeedback({});
    }
  };

  return (
    <div className="feedback-form">
      <h2>Give Feedback</h2>

      {!selectedCollege ? (
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
      ) : (
        <div className="selected-college">
          <h3>Selected College: {selectedCollege}</h3>
        </div>
      )}

      {selectedCollege && (
        <form onSubmit={handleNextQuestion}>
          <div className="question-container">
            {questions.slice(0, currentQuestionIndex + 1).map((question, index) => (
              <div key={index} className="question-slide">
                <label>{question}</label>
                <input
                  type="text"
                  placeholder={`Your answer for Question ${index + 1}`}
                  value={feedback[`Q${index + 1}`] || ''}
                  onChange={(e) => handleInputChange(e, index)}
                  required
                />
              </div>
            ))}
          </div>
          <button type="submit">
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit Feedback'}
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
