import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage.jsx';
// import CategoriesPage from './components/CategoriesPage';
// import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <Router> 
      <Routes> 
      <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
