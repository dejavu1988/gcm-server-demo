var GCM = require('gcm').GCM;
var sys = require('sys');

var apiKey = 'AIzaSyCw84iHBkAh1p3wuc8nSncNdXxAmAl4saE';
var gcm = new GCM(apiKey);

var stdin = process.openStdin();
stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that
    // with toString() and then substring()
    var msg = d.toString().substring(0, d.length-1);
    //console.log("you entered: [" + msg + "]");

    var message = {
        registration_id: ['APA91bEyYOagW7pmdBW45AXaqj42LWkV9NlX4cMqWnDsSH4hWjM8uic0SsCFpPvMC-ZuKIBdlS0dT3hze6fYGCX2li9vJTU20odLhN83FB85Wyax-WRAH78FQu0GjJOs3s1O0Q2KT-d1RrdGqnZxKDlkGM4zxvqf6w'], // required
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
