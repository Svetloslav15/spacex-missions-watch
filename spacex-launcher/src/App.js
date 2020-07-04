import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import LaunchDetails from './pages/launch-details/LaunchDetails';
import UpcomingLaunches from './pages/upcoming/UpcomingLaunches';
import PastLaunches from './pages/past/PastLaunches';
import About from './pages/about/About';
import Navigation from './common/navigation/Navigation';

const App = () => {
    return (
        <Router>
            <div>
                <Navigation/>
                <Switch>
                    <Route exact path='/'><HomePage/></Route>
                    <Route path='/upcoming'><UpcomingLaunches/></Route>
                    <Route path='/past'><PastLaunches/></Route>
                    <Route path='/about'><About/></Route>
                    <Route path='/launches/:id'  render={(props) => <LaunchDetails {...props} />}/>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
