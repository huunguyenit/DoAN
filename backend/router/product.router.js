var express = require('express')
var ProductService = require('../service/ProductService')

let router = express.Router()

router.get('', (request, response) => {
    return ProductService.list()
        .then(params => {
            console.log('params',params);
            return response.render('index', {
                title: 'Management products',
                content: params.template,
                products: params.products
            })
        })
        .catch(err => {
            return response.status(400).send(err)
        })
})
router.get('/delete/:id/:status', (request, response) => {
    return ProductService.edit({id:request.params.id, status: request.params.status})
        .then(params => {
            console.log('params',params);
            return   ProductService.list()
            .then(params => {
                console.log('params',params);
                return response.render('index', {
                    title: 'Management products',
                    content: params.template,
                    products: params.products
                })
            })
            .catch(err => {
                return response.status(400).send(err)
            })
        })
        .catch(err => {
            return response.status(400).send(err)
        })
})
module.exports = router;
