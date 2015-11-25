/**
 * OaTools commandline tester
 *
 * run with no arg for help.
 */

var oatools=require('./oaTools');

function help( message ){
    console.log(message);
    console.log('simpleClient Usage:\n'
            +'simpleClient <method> ["fake"]\n'
            +'where option is one of\n');
    for(var method in oatools.methods ){
        console.log('  '+method);
    }
    console.log('');
    console.log('"fake" option allows to show inner json'
            +' without actually reqesting');
}

function runme(){
    if ( process.argv.length < 3 ){
        help("missing arg");
        return;
    }
    var method = process.argv[2];
    if ( ! oatools.methods.hasOwnProperty(method) ){
        help("wrong arg "+method);
        return;
    }
    if( 'fake' === process.argv[3] )
        oatools.oaGetterFake( method );
    else
        oatools.oaGetter(method);
}

runme();
