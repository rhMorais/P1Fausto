var	http	=	require('http'); 
var express = require('./config/express');
//require('./config/database.js')('mongodb://localhost/P1Fausto');
var db = require('./config/database');
db('mongodb://localhost/p1fausto');
var app = express();

http.createServer(app).listen(app.get('port'), app.get('ip'),
function(){ 
    console.log('Express Server escutando na porta ' + 
        app.get('port'));
});