var fs = require('fs');
var moment = require("moment");
var MailParser = require("mailparser").MailParser;
var mailparser = new MailParser();

//
// test with 
//
//  node mailtools.js data/fa.eml
//  for f in  data/*; do node mailtools.js $f; done


function nextDay(dateString){
    moment.locale('fr');

    var daymoment = moment(dateString, "dddd");
    var todaymoment = moment();


    var dayNum = parseInt( daymoment.format('E'));
    var todayNum = parseInt( todaymoment.format('E'));


    var difference = ((dayNum - todayNum)+7)%7;
    //Lucien's way doesnt work properly
    //var difference = Math.abs(Math.abs(dayNum - todayNum)-7);


    var nextDay = todaymoment.add(difference, 'days');

    return nextDay;
}

var mySplitter=/ce|à|au|:/;

mailparser.on("end", function(mail_object){
    var thesubject=mail_object.subject;
    var match=thesubject.split(mySplitter);
    var strDate = nextDay(match[1].trim()).format("DD/MM/YYYY");
    var newStruct={
        date: strDate,
        location: match[2].trim(),
        title: match[3].trim()
    };
    console.log( newStruct);
});

function parseFile(filename){
    if (fs.existsSync(filename)) {
        fs.createReadStream(filename).pipe(mailparser);
    }else{
        console.log(filename+" doesent exist");
    }
}

function runme(){
    if ( process.argv.length < 3 ){
        console.log("missing arg: filename");
        return;
    }
    parseFile( process.argv[2] );

}

// run test if not imported
if (!module.parent){
    runme()
}

