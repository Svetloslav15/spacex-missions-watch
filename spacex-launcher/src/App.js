import React from 'react';
import './App.css';
import HomePage from './pages/home/HomePage';
import Navigation from './common/navigation/Navigation';

const App = () => {
  return (
    <div>
      <Navigation/>
      <HomePage/>
    </div>
  );
};

export default App;
