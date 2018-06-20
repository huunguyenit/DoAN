var express = require('express')
var UserService = require('../service/UserService')
var UserRoutes = require('./user.router')
var ProductRoutes = require('./product.router')
var CategoryRoutes = require('./category.router')

let router = express.Router()

router.get('', (request, response) => {
    return  response.render('index', {
                title: 'Management Admin',
                content:"admin/index.ejs",
    }
        )
})

router.get('/requestes', (request, response) => {
    
})

router.use('/users', UserRoutes)
router.use('/products', ProductRoutes)

router.use('/categories', CategoryRoutes)


router.get('/categories', (request, response) => {

})

module.exports = router;
