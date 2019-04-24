var express = require('express');
var _ = require('lodash');
var http = require('http');
var pug = require("pug");

var app = express();
var server = http.Server(app);

const template = pug.compileFile('./template.pug');

//Config
var PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    console.log(req.query);
    var params = {
        mapwizeUrl: 'https://maps.mapwize.io/#/b/devnetcreate2019/' + _.replace(req.query.node_mac, /:/g, '_') + '?apiKey=a48dc4fedfaef141c112e6d906b5e328'        
    }
    console.log(params);
    res.send(template(params));
});

server.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});
