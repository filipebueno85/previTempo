import React, { Component } from 'react';
import clear_day from '../assets/clear_day.png';
import clear_night from '../assets/clear_night.png';
import cloud from '../assets/cloud.png';
import cloudly_day from '../assets/cloudly_day.png';
import cloudly_night from '../assets/cloudly_night.png';
import fog from '../assets/fog.png';
import hail from '../assets/hail.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import storm from '../assets/storm.png';
import Header from '../components/Header';
import getWeather from '../services/tempoAPI';

class Cidade extends Component {
  state = {
    cidade: [],
  };
  async componentDidMount() {
    const { match: { params: { city_name } } } = this.props;
    const cidades = await getWeather(city_name);
    // console.log(cidades);
    this.setState({ cidade: [cidades] });
  }
  render() {
    const { cidade } = this.state;
    // console.log(cidade);
    return (
      <div>
        <Header />
        <div>
              <div className="title">
          <h1>Previsão para dez dias:</h1>
              </div>
          {cidade.map((cities) => (
            <div className="pesquisa" key={cities.city_name}>
              <h2 className="card">{cities.city}</h2>
              <div className="days">
                {cities.forecast.map((cities) =>
                  <ul className="card">
                    <li key={cities.city_name}>
                      <h2>{`${cities.weekday} ${cities.date}`}</h2>
                      <p>{`${cities.description}`}</p>
                      <div>
                      {cities.condition === "rain" && (<img src={rain} alt="chuva" />)}
                      {cities.condition === "clear_day" && (<img src={clear_day} alt="dia-claro" />)}
                      {cities.condition === "clear_night" && (<img src={clear_night} alt="noite-clara" />)}
                      {cities.condition === "cloud" && (<img src={cloudly_day} alt="dia-nublado" />)}
                      {cities.condition === "cloudly_day" && (<img src={cloud} alt="nublado" />)}
                      {cities.condition === "cloudly_night" && (<img src={cloudly_night} alt="nublado" />)}
                      {cities.condition === "fog" && (<img src={fog} alt="neblina" />)}
                      {cities.condition === "hail" && (<img src={hail} alt="granizo" />)}
                      {cities.condition === "snow" && (<img src={snow} alt="neve" />)}
                      {cities.condition === "storm" && (<img src={storm} alt="tempestade" />)}
                      </div>
                      <p>{`Min ${cities.min}°C`}</p>
                      <p>{`Max ${cities.max}°C`}</p>
                      <p>{`Possibildade de chuva ${cities.rain_probability}%`}</p>
                    </li>
                  </ul>)}
              </div>
            </div>))}
        </div>
      </div>
    );
  }
}

export default Cidade;