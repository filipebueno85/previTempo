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

class CityCard extends Component {
  render() {
    const { cities } = this.props;
    return (
      <div>
      <div key={cities.city_name}>
        <div className="city-temp">
        <div>
        <h3>{cities.city_name}</h3>
        <p>{cities.date}</p>
        </div>
        <div className="temperatura">
        <h1>{`${cities.temp} °C`}</h1>
        <p>{cities.currently}</p>
        <p>{cities.time}</p>
        </div>
        </div>
        <div className="temp-condition">
        <p>{cities.description}</p>
        <div>
        {cities.condition_slug === "rain" && (<img src={rain} alt="chuva" />)}
        {cities.condition_slug === "clear_day" && (<img src={clear_day} alt="dia-claro" />)}
        {cities.condition_slug === "clear_night" && (<img src={clear_night} alt="noite-clara" />)}
        {cities.condition_slug === "cloud" && (<img src={cloudly_day} alt="dia-nublado" />)}
        {cities.condition_slug === "cloudly_day" && (<img src={cloud} alt="nublado" />)}
        {cities.condition_slug === "cloudly_night" && (<img src={cloudly_night} alt="nublado" />)}
        {cities.condition_slug === "fog" && (<img src={fog} alt="neblina" />)}
        {cities.condition_slug === "hail" && (<img src={hail} alt="granizo" />)}
        {cities.condition_slug === "snow" && (<img src={snow} alt="neve" />)}
        {cities.condition_slug === "storm" && (<img src={storm} alt="tempestade" />)}
        </div>
        </div>
        <p>{`Humidade: ${cities.humidity}%`}</p>
        <p>{`Volume de Chuva mm/h: ${cities.rain}`}</p>
        <p>{`Velocidade do Vento: ${cities.wind_speedy}`}</p>
        <p>{`Direção do Vento: ${cities.wind_direction}°`}</p>
        <p>{`Nascer do Sol: ${cities.sunrise}`}</p>
        <p>{`Pôr do Sol: ${cities.sunset}`}</p>
      </div>
      </div>
    );
  }
}

export default CityCard;