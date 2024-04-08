import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and Switch
import HomePage from './components/Home/HomePage.jsx';
// import CategoriesPage from './components/CategoriesPage';
// import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <Router> {/* Wrap your components with Router */}
      <Switch> {/* Use Switch to render the first matching route */}
        <Route exact path="/" component={HomePage} /> {/* Define route for HomePage */}
        {/* Define routes for other pages */}
        {/* <Route path="/categories" component={CategoriesPage} /> */}
        {/* <Route path="/profile" component={ProfilePage} /> */}
      </Switch>
    </Router>
  );
}

export default App;
