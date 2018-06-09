var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
var morgan = require('morgan')
var mailer = require('express-mailer')
var http = require('http');
require('dotenv').config()


var AuthRouter = require('./router/auth.router')
var AdminRouter = require('./router/admin.router')

var product = require('./apiController/ProductController')
var user = require('./apiController/UserController')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))

// add settings for app.
app.set('view engine', 'ejs')

// setting for mailer.
mailer.extend(app, {
    from: process.env.EMAIL_FROM,
    host: process.env.MAIL_HOST, // hostname
    secureConnection: process.env.EMAIL_SECURE, // use SSL
    port: process.env.EMAIL_PORT, // port for secure SMTP
    transportMethod: process.env.EMAIL_TRANSPORT_METHOD, // default is SMTP. Accepts anything that nodemailer accepts
    auth: {
        user: process.env.EMAIL_AUTH_USERNAME,
        pass: process.env.EMAIL_AUTH_PASSWORD
    }
});

// load auth's router.
app.use('/auth', AuthRouter)

// admin routes.
app.use('/admin', AdminRouter)

// load product's router.
app.use('/product', product)
app.use('/user', user)

app.listen(5555, () => {
    console.log("server running at port 5555")
})
