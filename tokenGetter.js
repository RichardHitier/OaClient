// uses callback from lib caller to be applied to data from http request
//
function getTokenJson(dataCallback){
    var https = require('https');
    var querystring = require('querystring');
    var oacfg = require('./oacfg.js');


    var secretKey=oacfg.oakeys.secretKey;

    var token_json={};


    var post_data = querystring.stringify({
      'grant-type' : 'authorization_code',
      'code': secretKey
    });

    var options = {
      host: 'api.openagenda.com',
      path: '/v1/requestAccessToken',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': post_data.length
      }
    };

    var requestCallback = function (response) {

      var str = '';

      response.on('data', function (chunk) { str += chunk; });

      response.on('end', function () {

        if (response.statusCode == 200) {
            console.log("deux cent");
          token_json = JSON.parse(str);
        } else {
            console.log(response.statusCode);
          token_json = JSON.parse(str);
        }
        dataCallback(token_json);

      });
    };

    var request = https.request(options, requestCallback);
    request.write(post_data);
    request.end();
}

exports.getTokenJson = getTokenJson;

// TODO:  insert test code here
//      - are we called from cli
//      - or imported from another script ?
