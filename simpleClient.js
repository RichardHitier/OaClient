var https=require('https');

var host='api.openagenda.com';
var myKey='44ce07402c4c21ca26071733f9c80077';
var agendaSlug='hva-evts';
var agendaUid='hva-evts';
var agendaUid='18389556';
var eventUid='293467';


function oaGetter( getOptions, endCallback){
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

oaGetter(
        { host: host, path: '/v1/agendas/uid/'+agendaSlug+'?key='+myKey },
        function(str){ console.log('uid: '+JSON.parse(str).data.uid); }
);

oaGetter(
        { host: host, path: '/v1/agendas/'+agendaUid+'?key='+myKey },
        function(str){ console.log(JSON.parse(str).data);}
);

oaGetter(
        { host: host, path: '/v1/agendas/'+agendaUid+'/events?key='+myKey },
        function(str){ console.log(JSON.parse(str).data);}
);

oaGetter(
        { host: host, path: '/v1/events/'+eventUid+'?key='+myKey },
        function(str){ console.log(JSON.parse(str).data);}
);
