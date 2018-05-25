var express = require('express');
var productRepo = require('../response/ProductQData');

var router = express.Router();

router.get('/', (req, res) => {
    productRepo.LoadPage(1).then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/topturnpay', (req, res) => {
    productRepo.TopTurnPay().then((rows) => {
        res.json(rows)
    }).catch((err) => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console');
    })
})

router.get('/toppricenow', (req, res) => {
    productRepo.TopPriceNow().then((rows) => {
        res.json(rows)
    }).catch((err) => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console');
    })
})

router.get('/topendtime', (req, res) => {
    productRepo.TopEndTime().then((rows) => {
        res.json(rows)
    }).catch((err) => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console');
    })
})

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    if (req.params.id) {
        var id = req.params.id;
        productRepo.load(id).then((rows) => {
            res.json(rows);
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.json('error');
        });
    } else {
        res.statusCode = 400;
        res.json('error');
    }
});

router.get('/searchproduct/:name', (req, res) => {
    if( req.params.name) {
        var name = req.params.name
        productRepo.SearchNameProduct(name).then((rows) => {
            res.json(rows);
        }).catch((err) => {
            console.log(err);
            res.statusCode = 500;
            res.json('error')
        })
    }
})

// router.post('/', (req, res) => {
// 	categoryRepo.add(req.body)
// 		.then(insertId => {
// 			var poco = {
// 				CatID: insertId,
// 				CatName: req.body.CatName
// 			};
// 			res.statusCode = 201;
// 			res.json(poco);
// 		})
// 		.catch(err => {
// 			console.log(err);
// 			res.statusCode = 500;
// 			res.end();
// 		});
// });


// router.delete('/:id', (req, res) => {
// 	if (req.params.id) {
// 		var id = req.params.id;

// 		if (isNaN(id)) {
// 			res.statusCode = 400;
// 			res.end();
// 			return;
// 		}

// 		categoryRepo.delete(id).then(affectedRows => {
// 			res.json({
// 				affectedRows: affectedRows
// 			});
// 		}).catch(err => {
// 			console.log(err);
// 			res.statusCode = 500;
// 			res.json('error');
// 		});
// 	} else {
// 		res.statusCode = 400;
// 		res.json('error');
// 	}
// });

module.exports = router;