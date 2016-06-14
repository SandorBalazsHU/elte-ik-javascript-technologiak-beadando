//Oldalak
var error404 = require('../app/renders/sys/404');

//Változók
var express = require('express');
var http = require('http');
var router = require('./router');
var app = express();
var port = process.env.PORT || 80;

//Node - Express http server
http.createServer(app).listen(port);

//EJS - template system
app.set('views', './app/templates');
app.set('view engine', 'ejs');

//Csak mert olcsó volt!
app.use(express.static('public'));

//Application-level middleware
/*/Hit by any route
app.use(function (req, res, next) {
    next();
});*/

//Router-level middleware
app.use(router);

//Endpoint-level middleware
app.use(function (req, res) {
    error404.render(res)
});

//Error handler
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Server side error!');
});

module.exports = {
    express: express,
    http: http,
    router: router,
    app: app,
    prt: port
};