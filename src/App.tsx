import React from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route, 
} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/resume">
          <ResumePage/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
