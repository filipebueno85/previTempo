import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Busca from './pages/Busca';
import Cidade from './pages/Cidade';
import Favoritos from './pages/Favoritos';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
          <Route path="/cidade/:city_name" component={ Cidade } />
          <Route path="/favoritos" component={ Favoritos } />
          <Route path="/busca" component={ Busca } />
          <Route exact path="/" component={ Login } />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
