
const getWeather = async (endpoint) => {
  const URL = `https://api.hgbrasil.com/weather?format=json-cors&key=1f6137fc&city_name=${endpoint}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data.results;
}

export default getWeather;
