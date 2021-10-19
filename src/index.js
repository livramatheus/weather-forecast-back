const express = require("express");
const cors = require("cors");
const app = express();
const routeForecast = require("./routes/forecast");

app.use(cors());
app.use(routeForecast);

app.listen(process.env.PORT);
