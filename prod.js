var config = require('./config.prod');

var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('*', function(req, res){
    res.sendFile('/index.html', {root: __dirname});
});

app.listen(config.port, function(){
    console.log('Listening at ' + config.url + ' :'+ config.port);
});