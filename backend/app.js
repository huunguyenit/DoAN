var express = require('express');
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
var product = require('./apiController/ProductController');
var morgan = require('morgan')
var http = require('http');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'));

app.use('/product', product)

app.listen(5555, () => {
    console.log("server running at port 5555");
})



