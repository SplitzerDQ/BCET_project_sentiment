import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import SeeFeedback from './components/SeeFeedback';
import LoginPage from './components/LoginPage'; // Import the login page
import './styles.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
        <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/give-feedback">Give Feedback</Link>
          <Link to="/see-feedback">See Feedback</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/give-feedback" element={<FeedbackForm />} />
          <Route path="/see-feedback" element={<SeeFeedback />} />
        </Routes>
      </div>
    </Router>
  );
};


const HomePage = () => (
  <div className="home-page">
    <h1>Welcome to the Universal College Feedback System</h1>
    <p>Select an option from the navigation bar to proceed.</p>
  </div>
);

export default App;
