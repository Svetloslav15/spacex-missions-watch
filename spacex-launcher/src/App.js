import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import LaunchDetails from './pages/launch-details/LaunchDetails';
import UpcomingLaunches from './pages/upcoming/UpcomingLaunches';
import PastLaunches from './pages/past/PastLaunches';
import About from './pages/about/About';
import Navigation from './common/navigation/Navigation';


const App = () => {
  return (
    <div>
      <Navigation/>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/upcoming' component={UpcomingLaunches} />
            <Route exact path='/past' component={PastLaunches} />
            <Route exact path='/about' component={About} />
            <Route exact path='/launches/:id' component={LaunchDetails} />
        </Switch>
    </div>
  );
};

export default App;
