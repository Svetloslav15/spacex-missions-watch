import React from 'react';
import './App.css';
import HomePage from './pages/home/HomePage';
import LaunchDetails from './pages/launch-details/LaunchDetails';
import Navigation from './common/navigation/Navigation';
import {Route} from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Navigation/>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/launches/:id' component={LaunchDetails} />
    </div>
  );
};

export default App;
