var https = require('https');
var querystring = require('querystring');
var oacfg = require('./oacfg');


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

var request = https.request(options, function (response) {

  var str = '';

  response.on('data', function (chunk) { str += chunk; });

  response.on('end', function () {

    if (response.statusCode == 200) {
      token_json = JSON.parse(str);
    } else {
      token_json = JSON.parse(str);
    }

  });
});

function getTokenJson(){
    request.write(post_data);
    request.end();
    return token_json;
}

exports.getTokenJson = getTokenJson;
