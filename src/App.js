import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
// import CategoriesPage from './components/CategoriesPage';
// import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <Router> 
      <Routes> 
      <Route path="/" element={<HomePage />} />
      <Route path="/Sidebar"  element={<Sidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
