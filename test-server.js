var GCM = require('gcm').GCM;
var sys = require('sys');

var apiKey = '';
var gcm = new GCM(apiKey);

var stdin = process.openStdin();
stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that
    // with toString() and then substring()
    var msg = d.toString().substring(0, d.length-1);
    //console.log("you entered: [" + msg + "]");

    var message = {
        registration_id: [''], // required
        //collapse_key: 'Collapse key',
        time_to_live: '3',
        data: "{'key1':'MomentInvitation'}"
    };

    gcm.send(message, function(err, messageId){
        if (err) {
            console.log("Error: " + err.toString());
        } else {
            console.log("Sent message: ", msg);
        }
    });
});
