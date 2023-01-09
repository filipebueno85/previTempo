import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CityCard from '../components/CityCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import getWeather from '../services/tempoAPI';

class Busca extends Component {
  state ={
    cidade: '',
    busca: [],
    favorita: [], 
  }

  inputText = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  saveFavorite = (city) => {
    const { favorita } = this.state;
    
    const getItemFav = JSON.parse(localStorage.getItem('favoritos')) || favorita;

    const save = localStorage.setItem('favoritos', JSON.stringify([...getItemFav, city]));
    this.setState({
      favorita: save.some((fav) => fav.city_name === city.city_name),
    });
    // console.log(favorita);
  };

  // saveFavorite = (cities) => {
  //   const { favorita } = this.state;
  //   favorita.push(cities);
  //   localStorage.setItem('favoritos', JSON.stringify(favorita));
  //   console.log(favorita);
  // };

  // favoritas = () => {
  //    const { favorita } = this.state;
  //   const { city_name }  = this.props;
  //   const saveItem = this.saveFavorite(favorita);
  //   this.setState({
  //     favorita: saveItem.some((fav) => fav.city_name),  
  //   });
  // }

  handleclick = async () => {
    const { cidade } = this.state;
    const resultado = await getWeather(cidade);
    this.setState({
      busca: [resultado],
    })
    // console.log(resultado);
    this.setState({
      cidade: '',

    })
  }

  render() {
    const { cidade, busca } = this.state;
    return (
      <div>
        <Header />
        <form className="form-login">
          <h3>Qual cidade deseja saber a Previsão do tempo?</h3>
          <input onChange={ this.inputText } value={ cidade } type="text" name="cidade"/>
          <button onClick={ this.handleclick } type="button">Buscar</button>
        </form>
          {busca.map((cities) =>
        <div className="resultado-pesquisa" 
         key={cities.city_name}>
          <div className="card">
          <CityCard cities={cities}
          // onchange={this.removeFavorite}  
          />
          <div className="card-button">
          <button type="button" onClick={() => this.saveFavorite(cities)}>Favoritar</button>
          <Link
          to={ `/cidade/${cities.city}` }
          >
          <button type="button">Previsão para 10 dias</button>
          </Link>
            </div>        
          </div>
        </div>
          )}
          <Footer />
        </div>
    );
  }
}

export default Busca;