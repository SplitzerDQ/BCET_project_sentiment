import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import FeedbackForm from './components/FeedbackForm';
import FeedbackVisuals from './components/FeedbackVisuals';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/feedback" element={<FeedbackForm />} />
      <Route path="/visuals" element={<FeedbackVisuals />} />
    </Routes>
  </Router>
);

export default App;
