const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser')
//Rotas
const index = require('./routes/index');
const chartRoute = require('./routes/chartRoute');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', index);
app.use('/chart', chartRoute);
module.exports = app;
