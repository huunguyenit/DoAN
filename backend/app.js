var express = require('express');
var app = express()
var bodyParser = require('body-parser')
var product = require('./apiController/ProductController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/product', product)


app.listen(5555, () => {
    console.log("server running at port 5555");
})



