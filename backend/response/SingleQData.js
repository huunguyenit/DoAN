var data = require('../fn/mysql-db');

exports.AddAuctionProduct = function (body) {
    var sql = `INSERT into user_auction (id_product, email_user, price) value ('${body.id_product}', '${body.username}', '${body.price}')`

    return data.insert(sql)
}

exports.UpdateProductAfterAuction = function(body) {
    var sql = `update product set PricePay = '${body.pricePay}' where Id = '${body.id}'`

    return data.update(sql)
} 
