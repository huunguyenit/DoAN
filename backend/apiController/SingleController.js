var express = require('express');
var singleRepo = require('../response/SingleQData');

var router = express.Router();

router.post('/auctionPrice', (req, res) => {
    singleRepo.AddAuctionProduct(req.body).then((userAuction) => {
        res.json(userAuction);
    }).catch((err) => {
        console.log(err)
    })
})

router.put('/updatePriceNow', (req, res) => {
    singleRepo.UpdateProductAfterAuction(req.body).then((auctionPrice) => {
        res.json(auctionPrice)
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;
