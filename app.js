const express = require('express');
const sequelize= require('./connect')
const routes = require('./Routers/index');
const cors = require('cors');//cross origin resourse sharing--middleware
const bodyParser = require('body-parser');
require('dotenv').config();

const port = process.env.PORT;
const host =process.env.HOST;
const app=express();

//pass the port, host to index-- / means all the request are routing to the routes

app.use(cors());
app.options('*',cors());

//app.use(bodyParser.json());
app.use(express.json());
sequelize.sync();


app.use('/', routes);
app.listen(port, host,() =>{
    console.log(`Server is Running at ${host}:${port}`)
}); 
