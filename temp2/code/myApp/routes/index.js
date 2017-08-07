// var express = require('express');
// var router = express.Router();
router = require('./food');

/* GET home page. */
router.get('/', (request, response, next) => {
    response.render('index', {title: 'My tutorial videos'});
});

module.exports = router;
