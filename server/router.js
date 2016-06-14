var express = require('express');
var router = express.Router();

    //Router-level middleware
    //Hit on every route starting with '/*'
    router.get('/users', function (req, res, next) {
        console.log('/users');
        //meg lehetne úgy csinálni, hogy /funkció
        //és arra reagálna a szerver!
        next();
    });

    router.get('/apple', function (req, res, next) {
        console.log('/apple');
        next();
    });

    router.route('/map')
    .get (function (req, res, next) {
        console.log('/map-get');
        next();
    })
    .post(function (req, res, next) {
        console.log('/map-post');
        next();
    })
    .put (function (req, res, next) {
        console.log('/map-put');
        next();
    });

    module.exports = router;