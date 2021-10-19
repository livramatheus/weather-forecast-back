var express = require("express");
var routes = express();
var controller = require("../controllers/previsao");

routes.get("/forecast", (req, res) => {
  let { lat, long } = req.query;

  const prev = controller.buscaDadosPrevisao(lat, long);
  const loc = controller.buscaNomeCidade(lat, long);

  Promise.all([prev, loc])
    .then((retornos) => {
      const resultPrev = retornos[0].data;
      resultPrev.cidade = retornos[1].data.address.town;
      resultPrev.bairro = retornos[1].data.address.suburb;

      res.send(resultPrev);
    })
    .catch((erro) => {
      console.log("❌ Erro: ", erro.message);
      res.send("Erro!");
    });
});

module.exports = routes;
