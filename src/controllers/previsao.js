const Axios = require("axios");

const buscaDadosPrevisao = (latitude, longitude) => {
  let url = `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely&units=metric&lang=pt_br&appid=${process.env.API_WEATHER}`;

  return Axios.get(url, {
    params: {
      lat: latitude,
      lon: longitude
    }
  });
};

const buscaNomeCidade = (latitude, longitude) => {
  let url = `https://us1.locationiq.com/v1/reverse.php?key=${process.env.API_GEO}`;

  return Axios.get(url, {
    params: {
      lat: latitude,
      lon: longitude,
      format: "json"
    }
  });
};

module.exports = {
  buscaDadosPrevisao,
  buscaNomeCidade
};
