var data = require('../apiController/fn/mysql-db');

exports.LoadPage = function(page){
    var offset = (page-1)*8;
    var sql = `select * from product order by TimeUp DESC limit ${offset},8`;

    return data.load(sql);
}

exports.TopTurnPay = function(){
    var sql = `select * from product ORDER BY TurnPay DESC LIMIT 0,5`;

    return data.load(sql);
}

exports.TopPriceNow = function(){
    var sql = `select * from product order by PriceNow DESC LIMIT 0,5`;

    return data.load(sql);
}

exports.TopEndTime = function(){
    var sql = `SELECT * from product ORDER BY TimeDown LIMIT 0,5`

    return data.load(sql);
}

exports.SearchNameProduct = function(name){
    var sql = `select * from product where ProductName like ${name}`;

    return data.load(sql);
}

exports.AutoAdd10Minutes = function() {
    var sql = `UPDATE product SET TimeDown = DATE_ADD(NOW(),INTERVAL 10 MINUTE), AutoUpdate = b'0' WHERE AutoUpdate = b'1' and TimeDown <= DATE_ADD(NOW(),INTERVAL 5 MINUTE)`;

    return data.update(sql);
} 

exports.AutoAuction = function(Id){
    var sql = `UPDATE product set PriceNow = PriceNow + Cost WHERE Id = '${Id}'`;

    return data.update(sql);
}

exports.AddProduct = function(pd){
    var sql = `insert into product(Id, ProductName, PriceNow, PricePay, TimeUp, TimeDown, Cost, Status, TurnPay, Detail, AutoUpdate) VALUES ('${pd.Id}','${pd.ProductName}' ,'${pd.PriceNow}','${pd.PricePay}','${pd.TimeUp}','${pd.TimeDown}','${pd.Cost}',b'${pd.Status}','${pd.TurnPay}',n'${pd.Detail}', b'${pd.AutoUpdate}') `;

    return data.insert(sql);
}