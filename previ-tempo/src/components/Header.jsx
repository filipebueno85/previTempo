import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
    name: '',
  }
  
  componentDidMount() {
    this.handlerUser();
  }
  
  handlerUser =  () => {
   const user = JSON.parse(localStorage.getItem('nomeLogin')).nome;
   this.setState({ name: user}); 
  }
  render() {
    const { name} = this.state;
    return (
      <header className="header-geral">
        <div className="nuvem-geral">
        <h1><span>Prev</span>Tempo</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/busca">Busca</Link>
              <Link to="/favoritos">Favoritos</Link>
            </li>
          </ul>
        </nav>
        <h4>{ `Olá ${name}` }</h4>
      </header>
    );
  }
}

export default Header;