//var GCM = require('gcm').GCM;
var gcm = require('push-notify').gcm({
  apiKey: '',
  retries: 1
});
var sys = require('sys');

//var apiKey = 'AIzaSyCw84iHBkAh1p3wuc8nSncNdXxAmAl4saE';
//var gcm = new GCM(apiKey);

var stdin = process.openStdin();
stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that
    // with toString() and then substring()
    var msg = d.toString().substring(0, d.length-1);
    //console.log("you entered: [" + msg + "]");

    var message = {
        registrationId: [''],
        collapseKey: 'test',
        delayWhileIdle: true,
        timeToLive: 3,
        data: {
            type: "MomentInvitation",
            value: msg
        }
    };

    gcm.send(message);

    /*gcm.send(message, function(err, messageId){
        if (err) {
            console.log("Error: " + err.toString());
        } else {
            console.log("Sent message: ", msg);
        }
    });*/


    gcm.on('transmitted', function (result, message, registrationId) {
        console.log(' pushNotification sent ' + ' message ' + message + ' result ' + result);
    });
    gcm.on('transmissionError', function (error, message, registrationId) {
        console.log(' pushNotification sending Failed ' + ' message ' + message + ' error ' + error);
    });
});
