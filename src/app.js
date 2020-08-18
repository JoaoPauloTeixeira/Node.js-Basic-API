'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');


const app = express();
const router = express.Router();


mongoose.connect('mongodb+srv://nodejp:83shkv3Su2HYBLCD@nodeapi.0ac5x.azure.mongodb.net/<dbname>?retryWrites=true&w=majority', () => {
    useNewUrlParser: true
    })
    .then(x => {
    console.log('CONEXÃO COM BANCO BEM SUCEDIDA!');
    })
    .catch(error => {
        console.log('Erro: ', error)
    });

//CARREGA MODELS
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

//CARREGAR ROTAS
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

app.use(bodyParser.json()); //Convertendo para JSON
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/customers', orderRoute);

//CONFIGURANDO ROTA
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});
app.use('/', route);


module.exports = app;