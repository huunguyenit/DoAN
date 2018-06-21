var mysql = require('../fn/mysql-db')

exports.list = () => {
    const query = 'SELECT * FROM `product` WHERE `Status` = 0'
    const products = mysql.load(query)
    return products
        .then(result => {
            const params = {
                template: 'product/index.ejs',
                products: result
            }
            return Promise.resolve(params)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}
exports.edit = (params) => {
    const query = 'UPDATE `product` SET `Status`=' + params.status + ' WHERE `Id` = "' + params.id + '"'
    const products = mysql.update(query)
    return products
        .then(result => {
            const params = {
                template: 'product/index.ejs',
                products: result[0]
            }
            return Promise.resolve(params)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}