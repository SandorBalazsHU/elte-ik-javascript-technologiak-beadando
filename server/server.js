var express = require('express');
var http = require('http');
var router = require('./router');
var app = express();
var port = process.env.PORT || 80;
//Node - Express http server
http.createServer(app).listen(port);

//Csak mert olcsó volt!
app.use(express.static('public'));

//Application-level middleware
//Hit by any route
app.use(function (req, res, next) {
    console.log('Middleware:');
    next();
});

//Router-level middleware
app.use(router);

//Endpoint-level middleware
app.use(function (req, res, next) {
    console.log('Endpoint/');
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
    prt: port,
};