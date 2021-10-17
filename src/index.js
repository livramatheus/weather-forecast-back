const express = require("express");
const cors = require("cors");
const app = express();
const routePrevisao = require("./routes/previsao");

app.use(cors());
app.use(routePrevisao);

app.listen(process.env.PORT);
