var express = require("express");
var routes = express();
var controller = require("../controllers/previsao");

let dummy = {
  lat: -26.2527347,
  lon: -49.3851994,
  timezone: "Etc/GMT+3",
  timezone_offset: -10800,
  current: {
    dt: 1633631087,
    sunrise: 1633595378,
    sunset: 1633642203,
    temp: 6.78,
    feels_like: 1.62,
    pressure: 1006,
    humidity: 77,
    dew_point: 3.04,
    uvi: 1.69,
    clouds: 99,
    visibility: 10000,
    wind_speed: 11.41,
    wind_deg: 279,
    wind_gust: 11.68,
    weather: [
      { id: 500, main: "Rain", description: "chuva leve", icon: "10d" }
    ],
    rain: { "1h": 0.17 }
  },
  hourly: [
    {
      dt: 1634203200,
      temp: 6.78,
      feels_like: 1.62,
      pressure: 1006,
      humidity: 77,
      dew_point: 3.04,
      uvi: 1.69,
      clouds: 99,
      visibility: 10000,
      wind_speed: 11.41,
      wind_deg: 279,
      wind_gust: 11.68,
      weather: [
        { id: 500, main: "Rain", description: "chuva leve", icon: "10d" }
      ],
      pop: 0.34,
      rain: { "1h": 0.17 }
    },
    {
      dt: 1634213200,
      temp: 6.52,
      feels_like: 1.29,
      pressure: 1006,
      humidity: 81,
      dew_point: 3.5,
      uvi: 0.47,
      clouds: 99,
      visibility: 8658,
      wind_speed: 11.32,
      wind_deg: 281,
      wind_gust: 12.76,
      weather: [
        { id: 500, main: "Rain", description: "chuva leve", icon: "10d" }
      ],
      pop: 1,
      rain: { "1h": 0.6 }
    },
    {
      dt: 1634223200,
      temp: 6.31,
      feels_like: 1.09,
      pressure: 1006,
      humidity: 85,
      dew_point: 3.98,
      uvi: 0.2,
      clouds: 99,
      visibility: 9331,
      wind_speed: 10.96,
      wind_deg: 281,
      wind_gust: 13.17,
      weather: [
        { id: 501, main: "Rain", description: "chuva moderada", icon: "10d" }
      ],
      pop: 1,
      rain: { "1h": 1.01 }
    },
    {
      dt: 1634233200,
      temp: 6.27,
      feels_like: 1.11,
      pressure: 1005,
      humidity: 86,
      dew_point: 4.1,
      uvi: 0.05,
      clouds: 100,
      visibility: 10000,
      wind_speed: 10.64,
      wind_deg: 279,
      wind_gust: 13.28,
      weather: [
        { id: 500, main: "Rain", description: "chuva leve", icon: "10d" }
      ],
      pop: 1,
      rain: { "1h": 0.56 }
    },
    {
      dt: 1634243200,
      temp: 7.08,
      feels_like: 2.05,
      pressure: 1004,
      humidity: 85,
      dew_point: 4.73,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 11.29,
      wind_deg: 249,
      wind_gust: 13.15,
      weather: [
        { id: 500, main: "Rain", description: "chuva leve", icon: "10n" }
      ],
      pop: 1,
      rain: { "1h": 0.31 }
    },
    {
      dt: 1634253200,
      temp: 7.26,
      feels_like: 2.32,
      pressure: 1004,
      humidity: 85,
      dew_point: 4.94,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 11.16,
      wind_deg: 245,
      wind_gust: 12.92,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04n" }
      ],
      pop: 0.8
    },
    {
      dt: 1634263200,
      temp: 7.06,
      feels_like: 1.94,
      pressure: 1004,
      humidity: 82,
      dew_point: 4.26,
      uvi: 0,
      clouds: 85,
      visibility: 10000,
      wind_speed: 11.68,
      wind_deg: 242,
      wind_gust: 13.18,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04n" }
      ],
      pop: 0.8
    },
    {
      dt: 1634273200,
      temp: 6.72,
      feels_like: 1.25,
      pressure: 1004,
      humidity: 85,
      dew_point: 4.4,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 12.79,
      wind_deg: 236,
      wind_gust: 14.93,
      weather: [
        { id: 500, main: "Rain", description: "chuva leve", icon: "10n" }
      ],
      pop: 0.67,
      rain: { "1h": 0.17 }
    },
    {
      dt: 1634283200,
      temp: 6.45,
      feels_like: 0.68,
      pressure: 1004,
      humidity: 88,
      dew_point: 4.59,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 13.8,
      wind_deg: 222,
      wind_gust: 15.45,
      weather: [
        { id: 500, main: "Rain", description: "chuva leve", icon: "10n" }
      ],
      pop: 0.86,
      rain: { "1h": 0.27 }
    },
    {
      dt: 1634293200,
      temp: 6.85,
      feels_like: 1.39,
      pressure: 1004,
      humidity: 81,
      dew_point: 3.82,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 12.95,
      wind_deg: 213,
      wind_gust: 14.4,
      weather: [
        { id: 500, main: "Rain", description: "chuva leve", icon: "10n" }
      ],
      pop: 0.93,
      rain: { "1h": 0.17 }
    },
    {
      dt: 1633665600,
      temp: 6.87,
      feels_like: 1.45,
      pressure: 1005,
      humidity: 81,
      dew_point: 3.94,
      uvi: 0,
      clouds: 95,
      visibility: 10000,
      wind_speed: 12.79,
      wind_deg: 206,
      wind_gust: 13.88,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04n" }
      ],
      pop: 0.76
    },
    {
      dt: 1633669200,
      temp: 6.89,
      feels_like: 1.49,
      pressure: 1006,
      humidity: 80,
      dew_point: 3.71,
      uvi: 0,
      clouds: 95,
      visibility: 10000,
      wind_speed: 12.71,
      wind_deg: 201,
      wind_gust: 14.13,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04n" }
      ],
      pop: 0.7
    },
    {
      dt: 1633672800,
      temp: 7.01,
      feels_like: 1.83,
      pressure: 1007,
      humidity: 76,
      dew_point: 3.13,
      uvi: 0,
      clouds: 96,
      visibility: 10000,
      wind_speed: 11.87,
      wind_deg: 198,
      wind_gust: 13.51,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04n" }
      ],
      pop: 0.83
    },
    {
      dt: 1633676400,
      temp: 6.83,
      feels_like: 1.58,
      pressure: 1007,
      humidity: 80,
      dew_point: 3.6,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 11.88,
      wind_deg: 199,
      wind_gust: 13.05,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04n" }
      ],
      pop: 0
    },
    {
      dt: 1633680000,
      temp: 6.78,
      feels_like: 1.41,
      pressure: 1009,
      humidity: 80,
      dew_point: 3.55,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 12.37,
      wind_deg: 201,
      wind_gust: 13.52,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04n" }
      ],
      pop: 0
    },
    {
      dt: 1633683600,
      temp: 6.75,
      feels_like: 1.31,
      pressure: 1010,
      humidity: 76,
      dew_point: 2.86,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 12.66,
      wind_deg: 199,
      wind_gust: 13.88,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04d" }
      ],
      pop: 0
    },
    {
      dt: 1633687200,
      temp: 6.45,
      feels_like: 0.89,
      pressure: 1011,
      humidity: 74,
      dew_point: 2.16,
      uvi: 0.36,
      clouds: 82,
      visibility: 10000,
      wind_speed: 12.77,
      wind_deg: 202,
      wind_gust: 13.67,
      weather: [
        { id: 803, main: "Clouds", description: "nublado", icon: "04d" }
      ],
      pop: 0
    },
    {
      dt: 1633690800,
      temp: 6,
      feels_like: 0.54,
      pressure: 1012,
      humidity: 71,
      dew_point: 1.23,
      uvi: 1.04,
      clouds: 75,
      visibility: 10000,
      wind_speed: 11.56,
      wind_deg: 200,
      wind_gust: 12.36,
      weather: [
        { id: 803, main: "Clouds", description: "nublado", icon: "04d" }
      ],
      pop: 0
    },
    {
      dt: 1633694400,
      temp: 5.73,
      feels_like: 0.24,
      pressure: 1013,
      humidity: 70,
      dew_point: 0.64,
      uvi: 2.1,
      clouds: 79,
      visibility: 10000,
      wind_speed: 11.31,
      wind_deg: 201,
      wind_gust: 12.27,
      weather: [
        { id: 803, main: "Clouds", description: "nublado", icon: "04d" }
      ],
      pop: 0
    },
    {
      dt: 1633698000,
      temp: 5.61,
      feels_like: 0.37,
      pressure: 1013,
      humidity: 68,
      dew_point: 0.08,
      uvi: 3.62,
      clouds: 74,
      visibility: 10000,
      wind_speed: 10.09,
      wind_deg: 203,
      wind_gust: 11.13,
      weather: [
        { id: 803, main: "Clouds", description: "nublado", icon: "04d" }
      ],
      pop: 0
    },
    {
      dt: 1633701600,
      temp: 5.67,
      feels_like: 0.52,
      pressure: 1014,
      humidity: 67,
      dew_point: 0.06,
      uvi: 4.77,
      clouds: 52,
      visibility: 10000,
      wind_speed: 9.85,
      wind_deg: 204,
      wind_gust: 10.84,
      weather: [
        { id: 803, main: "Clouds", description: "nublado", icon: "04d" }
      ],
      pop: 0
    },
    {
      dt: 1633705200,
      temp: 5.67,
      feels_like: 0.74,
      pressure: 1014,
      humidity: 67,
      dew_point: 0.1,
      uvi: 5.33,
      clouds: 38,
      visibility: 10000,
      wind_speed: 9.02,
      wind_deg: 207,
      wind_gust: 9.78,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "nuvens dispersas",
          icon: "03d"
        }
      ],
      pop: 0
    },
    {
      dt: 1633708800,
      temp: 5.79,
      feels_like: 1.21,
      pressure: 1014,
      humidity: 67,
      dew_point: 0.08,
      uvi: 5.41,
      clouds: 30,
      visibility: 10000,
      wind_speed: 7.96,
      wind_deg: 210,
      wind_gust: 8.66,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "nuvens dispersas",
          icon: "03d"
        }
      ],
      pop: 0
    },
    {
      dt: 1633712400,
      temp: 5.8,
      feels_like: 1.36,
      pressure: 1015,
      humidity: 67,
      dew_point: 0.23,
      uvi: 4.45,
      clouds: 25,
      visibility: 10000,
      wind_speed: 7.54,
      wind_deg: 216,
      wind_gust: 8.17,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "nuvens dispersas",
          icon: "03d"
        }
      ],
      pop: 0
    },
    {
      dt: 1633716000,
      temp: 5.88,
      feels_like: 1.78,
      pressure: 1015,
      humidity: 68,
      dew_point: 0.44,
      uvi: 3.07,
      clouds: 22,
      visibility: 10000,
      wind_speed: 6.62,
      wind_deg: 222,
      wind_gust: 7.24,
      weather: [
        { id: 801, main: "Clouds", description: "algumas nuvens", icon: "02d" }
      ],
      pop: 0
    },
    {
      dt: 1633719600,
      temp: 5.97,
      feels_like: 2.03,
      pressure: 1015,
      humidity: 69,
      dew_point: 0.74,
      uvi: 1.73,
      clouds: 10,
      visibility: 10000,
      wind_speed: 6.26,
      wind_deg: 233,
      wind_gust: 6.94,
      weather: [
        { id: 800, main: "Clear", description: "céu limpo", icon: "01d" }
      ],
      pop: 0
    },
    {
      dt: 1633723200,
      temp: 6.1,
      feels_like: 2.28,
      pressure: 1015,
      humidity: 69,
      dew_point: 0.92,
      uvi: 0.72,
      clouds: 21,
      visibility: 10000,
      wind_speed: 6.04,
      wind_deg: 244,
      wind_gust: 6.74,
      weather: [
        { id: 801, main: "Clouds", description: "algumas nuvens", icon: "02d" }
      ],
      pop: 0
    },
    {
      dt: 1633726800,
      temp: 6.23,
      feels_like: 2.47,
      pressure: 1015,
      humidity: 69,
      dew_point: 1.02,
      uvi: 0.19,
      clouds: 47,
      visibility: 10000,
      wind_speed: 5.96,
      wind_deg: 254,
      wind_gust: 6.63,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "nuvens dispersas",
          icon: "03d"
        }
      ],
      pop: 0
    },
    {
      dt: 1633730400,
      temp: 6.33,
      feels_like: 2.61,
      pressure: 1016,
      humidity: 69,
      dew_point: 1.06,
      uvi: 0,
      clouds: 51,
      visibility: 10000,
      wind_speed: 5.92,
      wind_deg: 271,
      wind_gust: 6.55,
      weather: [
        { id: 803, main: "Clouds", description: "nublado", icon: "04n" }
      ],
      pop: 0
    },
    {
      dt: 1633734000,
      temp: 6.48,
      feels_like: 2.48,
      pressure: 1016,
      humidity: 69,
      dew_point: 1.3,
      uvi: 0,
      clouds: 61,
      visibility: 10000,
      wind_speed: 6.82,
      wind_deg: 282,
      wind_gust: 7.57,
      weather: [
        { id: 803, main: "Clouds", description: "nublado", icon: "04n" }
      ],
      pop: 0
    },
    {
      dt: 1633737600,
      temp: 6.57,
      feels_like: 2.22,
      pressure: 1015,
      humidity: 71,
      dew_point: 1.68,
      uvi: 0,
      clouds: 67,
      visibility: 10000,
      wind_speed: 7.97,
      wind_deg: 290,
      wind_gust: 8.79,
      weather: [
        { id: 803, main: "Clouds", description: "nublado", icon: "04n" }
      ],
      pop: 0
    },
    {
      dt: 1633741200,
      temp: 6.7,
      feels_like: 2.02,
      pressure: 1015,
      humidity: 72,
      dew_point: 2.04,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 9.3,
      wind_deg: 293,
      wind_gust: 10.6,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04n" }
      ],
      pop: 0
    },
    {
      dt: 1633744800,
      temp: 6.94,
      feels_like: 2.06,
      pressure: 1014,
      humidity: 72,
      dew_point: 2.25,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 10.43,
      wind_deg: 298,
      wind_gust: 12.69,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04n" }
      ],
      pop: 0
    },
    {
      dt: 1633748400,
      temp: 7.18,
      feels_like: 2.13,
      pressure: 1013,
      humidity: 76,
      dew_point: 3.23,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 11.51,
      wind_deg: 301,
      wind_gust: 14.64,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04n" }
      ],
      pop: 0
    },
    {
      dt: 1633752000,
      temp: 7.42,
      feels_like: 2.37,
      pressure: 1013,
      humidity: 82,
      dew_point: 4.53,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 11.89,
      wind_deg: 299,
      wind_gust: 15.96,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04n" }
      ],
      pop: 0
    },
    {
      dt: 1633755600,
      temp: 7.67,
      feels_like: 2.64,
      pressure: 1012,
      humidity: 85,
      dew_point: 5.23,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 12.25,
      wind_deg: 297,
      wind_gust: 16.01,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04n" }
      ],
      pop: 0
    },
    {
      dt: 1633759200,
      temp: 7.9,
      feels_like: 2.88,
      pressure: 1011,
      humidity: 86,
      dew_point: 5.71,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 12.58,
      wind_deg: 293,
      wind_gust: 16.33,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04n" }
      ],
      pop: 0
    },
    {
      dt: 1633762800,
      temp: 8.1,
      feels_like: 3.17,
      pressure: 1011,
      humidity: 85,
      dew_point: 5.79,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 12.51,
      wind_deg: 290,
      wind_gust: 17.03,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04n" }
      ],
      pop: 0
    },
    {
      dt: 1633766400,
      temp: 8.23,
      feels_like: 3.23,
      pressure: 1011,
      humidity: 86,
      dew_point: 6.04,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 13.12,
      wind_deg: 271,
      wind_gust: 17.06,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04n" }
      ],
      pop: 0
    },
    {
      dt: 1633770000,
      temp: 8.15,
      feels_like: 3.21,
      pressure: 1011,
      humidity: 86,
      dew_point: 5.95,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 12.66,
      wind_deg: 253,
      wind_gust: 15.66,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04d" }
      ],
      pop: 0
    },
    {
      dt: 1633773600,
      temp: 7.69,
      feels_like: 2.78,
      pressure: 1012,
      humidity: 87,
      dew_point: 5.6,
      uvi: 0.44,
      clouds: 100,
      visibility: 10000,
      wind_speed: 11.67,
      wind_deg: 236,
      wind_gust: 14.18,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04d" }
      ],
      pop: 0
    },
    {
      dt: 1633777200,
      temp: 7.5,
      feels_like: 2.72,
      pressure: 1013,
      humidity: 89,
      dew_point: 5.76,
      uvi: 1.27,
      clouds: 100,
      visibility: 10000,
      wind_speed: 10.79,
      wind_deg: 228,
      wind_gust: 13.77,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04d" }
      ],
      pop: 0
    },
    {
      dt: 1633780800,
      temp: 7.42,
      feels_like: 2.57,
      pressure: 1014,
      humidity: 84,
      dew_point: 4.91,
      uvi: 2.6,
      clouds: 98,
      visibility: 10000,
      wind_speed: 10.98,
      wind_deg: 214,
      wind_gust: 13.66,
      weather: [
        { id: 804, main: "Clouds", description: "nublado", icon: "04d" }
      ],
      pop: 0
    },
    {
      dt: 1633784400,
      temp: 7.16,
      feels_like: 2.26,
      pressure: 1014,
      humidity: 72,
      dew_point: 2.5,
      uvi: 3.18,
      clouds: 0,
      visibility: 10000,
      wind_speed: 10.81,
      wind_deg: 207,
      wind_gust: 13.11,
      weather: [
        { id: 800, main: "Clear", description: "céu limpo", icon: "01d" }
      ],
      pop: 0
    },
    {
      dt: 1633788000,
      temp: 7.08,
      feels_like: 2.19,
      pressure: 1015,
      humidity: 69,
      dew_point: 1.86,
      uvi: 4.19,
      clouds: 2,
      visibility: 10000,
      wind_speed: 10.63,
      wind_deg: 206,
      wind_gust: 13.47,
      weather: [
        { id: 800, main: "Clear", description: "céu limpo", icon: "01d" }
      ],
      pop: 0
    },
    {
      dt: 1633791600,
      temp: 7.21,
      feels_like: 2.4,
      pressure: 1016,
      humidity: 67,
      dew_point: 1.41,
      uvi: 4.68,
      clouds: 3,
      visibility: 10000,
      wind_speed: 10.47,
      wind_deg: 209,
      wind_gust: 13.48,
      weather: [
        { id: 800, main: "Clear", description: "céu limpo", icon: "01d" }
      ],
      pop: 0
    },
    {
      dt: 1633795200,
      temp: 7.14,
      feels_like: 2.4,
      pressure: 1017,
      humidity: 68,
      dew_point: 1.7,
      uvi: 5.81,
      clouds: 3,
      visibility: 10000,
      wind_speed: 10.09,
      wind_deg: 210,
      wind_gust: 12.54,
      weather: [
        { id: 800, main: "Clear", description: "céu limpo", icon: "01d" }
      ],
      pop: 0
    },
    {
      dt: 1633798800,
      temp: 7.09,
      feels_like: 2.47,
      pressure: 1017,
      humidity: 71,
      dew_point: 2.2,
      uvi: 4.78,
      clouds: 3,
      visibility: 10000,
      wind_speed: 9.53,
      wind_deg: 218,
      wind_gust: 11.58,
      weather: [
        { id: 800, main: "Clear", description: "céu limpo", icon: "01d" }
      ],
      pop: 0
    }
  ],
  daily: [
    {
      dt: 1633615200,
      sunrise: 1633595378,
      sunset: 1633642203,
      moonrise: 1633598280,
      moonset: 1633648200,
      moon_phase: 0.04,
      temp: {
        day: 5.88,
        min: 4.77,
        max: 7.26,
        night: 6.45,
        eve: 6.31,
        morn: 4.77
      },
      feels_like: { day: 1.76, night: 0.68, eve: 1.09, morn: -0.71 },
      pressure: 1008,
      humidity: 73,
      dew_point: 1.42,
      wind_speed: 13.8,
      wind_deg: 222,
      wind_gust: 15.45,
      weather: [
        { id: 501, main: "Rain", description: "chuva moderada", icon: "10d" }
      ],
      clouds: 98,
      pop: 1,
      rain: 3.22,
      uvi: 3.06
    },
    {
      dt: 1633701600,
      sunrise: 1633681657,
      sunset: 1633728689,
      moonrise: 1633686060,
      moonset: 1633739700,
      moon_phase: 0.08,
      temp: {
        day: 5.67,
        min: 5.61,
        max: 7.01,
        night: 6.94,
        eve: 6.1,
        morn: 6.78
      },
      feels_like: { day: 0.52, night: 2.06, eve: 2.28, morn: 1.41 },
      pressure: 1014,
      humidity: 67,
      dew_point: 0.06,
      wind_speed: 12.95,
      wind_deg: 213,
      wind_gust: 14.4,
      weather: [
        { id: 500, main: "Rain", description: "chuva leve", icon: "10d" }
      ],
      clouds: 52,
      pop: 0.93,
      rain: 0.17,
      uvi: 5.41
    },
    {
      dt: 1633788000,
      sunrise: 1633767936,
      sunset: 1633815177,
      moonrise: 1633774140,
      moonset: 1633831140,
      moon_phase: 0.12,
      temp: {
        day: 7.08,
        min: 6.57,
        max: 8.23,
        night: 6.57,
        eve: 6.99,
        morn: 8.23
      },
      feels_like: { day: 2.19, night: 3.69, eve: 2.43, morn: 3.23 },
      pressure: 1015,
      humidity: 69,
      dew_point: 1.86,
      wind_speed: 13.12,
      wind_deg: 271,
      wind_gust: 17.06,
      weather: [
        { id: 800, main: "Clear", description: "céu limpo", icon: "01d" }
      ],
      clouds: 2,
      pop: 0,
      uvi: 5.81
    },
    {
      dt: 1633874400,
      sunrise: 1633854216,
      sunset: 1633901664,
      moonrise: 1633862640,
      moonset: 0,
      moon_phase: 0.16,
      temp: {
        day: 8.53,
        min: 6.57,
        max: 9.41,
        night: 9.41,
        eve: 9.31,
        morn: 7.23
      },
      feels_like: { day: 3.65, night: 4.8, eve: 4.83, morn: 3.43 },
      pressure: 1017,
      humidity: 87,
      dew_point: 6.48,
      wind_speed: 13.29,
      wind_deg: 308,
      wind_gust: 21.88,
      weather: [
        { id: 800, main: "Clear", description: "céu limpo", icon: "01d" }
      ],
      clouds: 8,
      pop: 0,
      uvi: 6.14
    },
    {
      dt: 1633960800,
      sunrise: 1633940496,
      sunset: 1633988152,
      moonrise: 1633951740,
      moonset: 1633922340,
      moon_phase: 0.19,
      temp: {
        day: 9.09,
        min: 8.85,
        max: 9.26,
        night: 9.08,
        eve: 9.17,
        morn: 8.85
      },
      feels_like: { day: 4.7, night: 4.64, eve: 4.63, morn: 4.43 },
      pressure: 1015,
      humidity: 93,
      dew_point: 8,
      wind_speed: 12.87,
      wind_deg: 300,
      wind_gust: 21.61,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "nuvens dispersas",
          icon: "03d"
        }
      ],
      clouds: 44,
      pop: 0,
      uvi: 2.31
    },
    {
      dt: 1634047200,
      sunrise: 1634026777,
      sunset: 1634074641,
      moonrise: 1634041560,
      moonset: 1634013000,
      moon_phase: 0.23,
      temp: {
        day: 8.26,
        min: 8.26,
        max: 9.26,
        night: 8.27,
        eve: 8.35,
        morn: 9.09
      },
      feels_like: { day: 5.31, night: 5.93, eve: 7.58, morn: 5.05 },
      pressure: 1018,
      humidity: 90,
      dew_point: 6.75,
      wind_speed: 11.01,
      wind_deg: 303,
      wind_gust: 17.19,
      weather: [
        { id: 500, main: "Rain", description: "chuva leve", icon: "10d" }
      ],
      clouds: 100,
      pop: 0.83,
      rain: 0.83,
      uvi: 3
    },
    {
      dt: 1634133600,
      sunrise: 1634113059,
      sunset: 1634161129,
      moonrise: 1634131980,
      moonset: 1634102760,
      moon_phase: 0.25,
      temp: {
        day: 9.67,
        min: 8.7,
        max: 9.82,
        night: 9.57,
        eve: 9.8,
        morn: 9.29
      },
      feels_like: { day: 6.06, night: 5.14, eve: 5.81, morn: 6.3 },
      pressure: 1016,
      humidity: 90,
      dew_point: 8.09,
      wind_speed: 12.59,
      wind_deg: 29,
      wind_gust: 21.09,
      weather: [
        { id: 500, main: "Rain", description: "chuva leve", icon: "10d" }
      ],
      clouds: 100,
      pop: 0.25,
      rain: 0.18,
      uvi: 3
    },
    {
      dt: 1634220000,
      sunrise: 1634199341,
      sunset: 1634247619,
      moonrise: 1634222880,
      moonset: 1634191800,
      moon_phase: 0.3,
      temp: {
        day: 9.73,
        min: 8.07,
        max: 9.96,
        night: 8.07,
        eve: 9.11,
        morn: 9.78
      },
      feels_like: { day: 5.49, night: 3.2, eve: 4.42, morn: 5.38 },
      pressure: 996,
      humidity: 98,
      dew_point: 9.42,
      wind_speed: 15.85,
      wind_deg: 24,
      wind_gust: 24.94,
      weather: [
        { id: 501, main: "Rain", description: "chuva moderada", icon: "10d" }
      ],
      clouds: 100,
      pop: 1,
      rain: 14.26,
      uvi: 3
    }
  ],
  cidade: "São Bento",
  bairro: "Centro"
};

routes.get("/previsao", (req, res) => {
  let { lat, long } = req.query;

  // const prev = controller.buscaDadosPrevisao(lat, long);
  // const loc = controller.buscaNomeCidade(lat, long);

  // Promise.all([prev, loc])
  //   .then((retornos) => {
  //     const resultPrev = retornos[0].data;
  //     resultPrev.cidade = retornos[1].data.address.town;
  //     resultPrev.bairro = retornos[1].data.address.suburb;

  //     res.send(resultPrev);
  //   })
  //   .catch((erro) => {
  //     console.log("❌ Erro: ", erro.message);
  //     res.send("Erro!");
  //   });
  res.send(dummy);
});

module.exports = routes;
