var express = require('express');
var router = express.Router();
var game = require('../app/renders/game');

    //Router-level middleware

    //Endpoint-/
    router.route('/')
    .get (function (req, res) {
        game.render(res);
    })
    .post(function (req, res) {
        game.render(res);
    })
    .put (function (req, res) {
        game.render(res);
    });

    //Endpoint-index
    router.route('/index*')
    .get (function (req, res) {
        game.render(res);
    })
    .post(function (req, res) {
        game.render(res);
    })
    .put (function (req, res) {
        game.render(res);
    });

    //Endpoint-index
    router.route('/game*')
    .get (function (req, res) {
        game.render(res);
    })
    .post(function (req, res) {
        game.render(res);
    })
    .put (function (req, res) {
        game.render(res);
    });

    module.exports = router;