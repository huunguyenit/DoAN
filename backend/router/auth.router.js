var express = require('express')
var AuthService = require('../service/AuthService')

let router = express.Router()

router.get('', (request, response) => {
    response.send('welcome to auth module')
})

router.get('/signin', (request, response) => {
    let params = request.params
    let query = request.query

    AuthService
        .signin(query)
        .then(result => {
            if (!result) {
                let error = new Error('Wrong username or password.')
                return Promise.reject(error)
            }

            const responseData = AuthService.authResponse(result)
            response.status(200).send(responseData)
        })
        .catch(err => {
            response.status(400).send(err.message)
        })
})

router.get('/signup', (request, response) => {
    let inputs = request.query

    AuthService
        .signup(inputs)
        .then(result => {
            const responseData = AuthService.authResponse(result)
            response.status(200).send(responseData)
        })
        .catch(err => {
            response.status(400).send(err.message)
        })
})

module.exports = router;
