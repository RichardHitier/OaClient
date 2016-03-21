var mydataCallback = function( token ){
    console.log( token);
}
var tokenGetter = require("./tokenGetter");
var tokenJson = tokenGetter.getTokenJson(mydataCallback);
