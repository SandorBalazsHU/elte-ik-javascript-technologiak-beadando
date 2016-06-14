var express = require('express');
var router = express.Router();
var example = require('../app/renders/example');

    //Router-level middleware
    //Hit on every route starting with '/*'
    router.get('/users', function (req, res, next) {
        console.log('/users');
        //meg lehetne úgy csinálni, hogy /funkció
        //és arra reagálna a szerver!
        next();
    });

    //Endpoint-apple
    router.get('/apple', function (req, res) {
        console.log('/apple');
        example.render(res);
    });

    //Endpoint-map
    router.route('/map')
    .get (function (req, res) {
        console.log('/map-get');
        example.render(res);
    })
    .post(function (req, res) {
        console.log('/map-post');
        example.render(res);
    })
    .put (function (req, res) {
        console.log('/map-put');
        example.render(res);
    });

    module.exports = router;