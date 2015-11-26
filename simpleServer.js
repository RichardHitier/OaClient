var oatools = require( './oaTools.js');
var express = require( 'express');
var bodyParser = require( 'body-parser');
var app = express();

app.use(bodyParser.json());

app.use('/lib', express.static(__dirname+'/lib/'));
app.use('/js', express.static(__dirname+'/js/'));
app.use('/css', express.static(__dirname+'/css/'));
app.use('/', express.static(__dirname+'/'));

var agendadesc={"success":true,"code":200,"data":{"title":"\u00c9v\u00e8nements dans la Haute Vall\u00e9e de l'Aude","uid":"18389556","url":"http:\/\/openagenda.com\/hva-evts","image":"\/images\/","description":"Agenda des \u00e9v\u00e8nements culturels et associatifs dans la haute vall\u00e9e de l'Aude.","updatedAt":"2015-11-20 15:19:15"}};

// Routing
app.get('/', function( req, res){
    res.sendFile(__dirname+'/simpleForm.html');
});

app.post('/api/addevt', function( req, res){
    console.log('got addevt call');
    console.log(req.body);
    res.send();
});

app.get('/api/:method', function( req, res ){
    oatools.oaGetter( req.params.method, function(jsonFromOuterSpace){
        res.json(jsonFromOuterSpace);
    });
});

app.listen(8080);
