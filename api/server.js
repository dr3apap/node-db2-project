//const eslint = require('./eslintrc.js')
const express = require('express');
const helmet = require('helmet');
const carRouter = require('../router/carRouter');



const server = express();
server.use(express.json());

server.use('/api/cars', carRouter);


server.get('/', (req, res) => {

    res.send('Creating car dealer DB')

});


module.exports = server;
