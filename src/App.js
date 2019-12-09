import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import inicio from "./components/inicio.component"
import biblioteca from "./components/biblioteca.component"
import perfil from "./components/perfil.component"

import logo from "./Logo.png"
class App extends Component {
  render() {
    return (
      <Router>
      <div className="container" >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >       
            <ul className="navbar-nav ">
              <li className="navbar-nav">
                <img src={logo} width="60" height="50"/>
              </li>
              <li className="navbar-item">
                <Link to="/" className="navbar-brand">Wed comic</Link>
              </li>
              <li className="navbar-item">
                <Link to='/biblioteca' className="nav-link">Biblioteca</Link>
              </li>
              <li className="navbar-item">
                <Link to='/perfil' className="nav-link">Perfil</Link>
              </li>
            </ul>
        </nav>
        <Route path="/" exact component={inicio}/>
        <Route path="/biblioteca" component={biblioteca}/>
        <Route path="/perfil" component={perfil}/>
      </div>
      </Router>
    );
  }
}

export default App;
