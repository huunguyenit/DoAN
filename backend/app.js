var app = require('./apiController/productController');

app.loadAll().then(records => {
    for (var value of records) {
        console.log(value.CatName);
    }
}).catch(err => console.log('Lỗi: ' + err));