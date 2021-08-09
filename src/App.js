import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import SingleTour from './pages/SingleTour';
import Tours from './pages/Tours';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tours" component={Tours} />
        <Route exact path="/tours/:slug" component={SingleTour} />
        <Route exact path="/Contacts" component={Contacts} />
        <Route exact path="/About" component={About} />
        <Route exact component={Error} />
      </Switch>
    </>
  );
}

export default App;
