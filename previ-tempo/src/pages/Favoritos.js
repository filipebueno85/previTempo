import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CityCard from '../components/CityCard';
import Header from '../components/Header';

class Favoritos extends Component {
  state = {
    favorito: [],
  };

  componentDidMount() {
    this.getFavorite();
  }

  getFavorite = () => {
    const getItemFav = JSON.parse(localStorage.getItem('favoritos'));
    this.setState({ favorito: getItemFav })
    // if (favorito) {
    //   this.setState({
    //     favorito: favorito.filter((fav) => fav.city_name !== getItemFav)
    //   })
    // }
  }

  removeFavorite = (city) => {
    // const { favorito } = this.state
    const getItemFav = JSON.parse(localStorage.getItem('favoritos'));
    const remove = getItemFav.filter((fav) => fav.city_name !== city)
    this.setState({ favorito: remove })
    localStorage.setItem('favoritos', JSON.stringify(remove));
    // this.setState((prevState) => ({
    //   favorito: prevState.favorito.filter((fav) => fav.city_name !== city),
    // }));
  }

  // hadleClick = () => {
  //   this.removeFavorite()
  // }


  render() {
    const { favorito } = this.state;
    return (
      <div>
        <Header />
        <div className="title">
        <h1>Favoritos</h1>
        </div>
        {favorito.map((cities) =>
        <div className="pesquisa" key={cities.city_name} >
          <div className="card">
          <CityCard cities={cities}
          // onchange={this.removeFavorite}  
          />
          <div className="card-button">
          <button type="button" onClick={ () => this.removeFavorite(cities.city_name)} >Desfavoritar</button>
          <Link
          to={ `/cidade/${cities.city}` }
          >
          <button type="button">Previsão para 10 dias</button>
          </Link>

          </div>
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default Favoritos;