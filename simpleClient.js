var https=require('https');

var host='api.openagenda.com';
var myKey='44ce07402c4c21ca26071733f9c80077';
var agendaSlug='hva-evts';
var agendaUid='hva-evts';
var agendaUid='18389556';
var eventUid='293467';


}
function oaGetter(method){
    getOptions=methods[method].options;
    endCallback=methods[method].callback;
    var req=https.get( getOptions, function(res){
        var str='';
        if( res.statusCode != 200){
            console.log('STATUS: ' + res.statusCode);
            return;
        }
        //console.log('HEADERS: ' + JSON.stringify(res.headers, null, 3));
        if( res.headers['content-type'].indexOf('application/json') < 0){
            console.log('Not JSON: ' + res.headers['content-type']);
            return;
        }
        res.on('data', function(chunk){
            str+=chunk;
        });
        res.on('end', function(){
            endCallback(str);
        });
    });



    req.on('error', function(e){
        console.log('ERROR: '+e.message);
    });
}

var methods={
    agendauid: {
        options: { host: host, path: '/v1/agendas/uid/'+agendaSlug+'?key='+myKey },
        callback: function(str){ console.log('uid: '+JSON.parse(str).data.uid); }
    },
    agendadesc: {
        options: { host: host, path: '/v1/agendas/'+agendaUid+'?key='+myKey },
        callback: function(str){ console.log(JSON.parse(str).data);}
    },
    agendaevts: {
        options: { host: host, path: '/v1/agendas/'+agendaUid+'/events?key='+myKey },
        callback: function(str){ console.log(JSON.parse(str).data);}
    },
    eventdesc: {
        options: { host: host, path: '/v1/events/'+eventUid+'?key='+myKey },
        callback: function(str){ console.log(JSON.parse(str).data);}
    }
}

function help( message ){
    console.log(message);
    console.log("simpleClient Usage:\n"
            +"simpleClient <option>\n"
            +"where option is one of\n");
    for(var method in methods ){
        console.log(method);
    }
}

function runme(){
    if ( process.argv.length < 3 ){
        help("missing arg");
        return;
    }
    var method = process.argv[2];
    if ( ! methods.hasOwnProperty(method) ){
        help("wrong arg "+method);
        return;
    }
    oaGetter( methods[method].options, methods[method].callback);
}

runme();
