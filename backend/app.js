var express = require('express');
const app = express();
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', '../view')
var record = require('./apiController/productController');

app.listen(5555, () => {
    console.log("server running at port 5555");
})

app.get('/', (req, res) => {
    record.loadAll().then((table) => {
        console.log(table);
        res.render("index.ejs", {data: table})
    }).catch(err => console.log('Lỗi: ' + err));
})

