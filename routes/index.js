var express = require('express');
var router = express.Router();
var logic = require('../public/javascripts/logic.js')
    /* GET home page. */

router.get('/:verse', function(req, res, next) {
    let verse = req.params.verse;
    res.render('index', {
        quote: logic[verse].quote,
        image: logic[verse].image,
        next: `/${logic[verse].next}`
    });
});

module.exports = router;
