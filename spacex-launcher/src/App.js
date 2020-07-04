import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import LaunchDetails from './pages/launch-details/LaunchDetails';
import UpcomingLaunches from './pages/upcoming/UpcomingLaunches';
import Navigation from './common/navigation/Navigation';


const App = () => {
  return (
    <div>
      <Navigation/>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/launches/:id' component={LaunchDetails} />
        <Route exact path='/upcoming' component={UpcomingLaunches} />
    </div>
  );
};

export default App;
