import './App.css';
import PhotosContainer from './containers/PhotosContainer';
import FavouritePhotosContainer from './containers/FavouritePhotosContainer';
import FilterContainer from './containers/FilterContainer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';


class App extends Component {
  render () {
    return (
      <Router>
      <React.Fragment>
        <NavBar />
        <FilterContainer />
        <Switch>
        <Route path="/photos" component={PhotosContainer} />
        <Route path="/favourite-photos" component={FavouritePhotosContainer} />
        </Switch>
      </React.Fragment>
    </Router>
    );
  }
}

export default App;
