import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import LaunchDetails from './pages/launch-details/LaunchDetails';
import UpcomingLaunches from './pages/upcoming/UpcomingLaunches';
import PastLaunches from './pages/past/PastLaunches';
import Navigation from './common/navigation/Navigation';


const App = () => {
  return (
    <div>
      <Navigation/>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/launches/:id' component={LaunchDetails} />
        <Route exact path='/upcoming' component={UpcomingLaunches} />
        <Route exact path='/past' component={PastLaunches} />
    </div>
  );
};

export default App;
