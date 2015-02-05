var GCM = require('gcm').GCM;
var sys = require('sys');

var apiKey = 'AIzaSyDIx41hFSA1Cd_M78HvBA8jmFKo5uSMFuE';
var gcm = new GCM(apiKey);

var stdin = process.openStdin();
stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that
    // with toString() and then substring()
    var msg = d.toString().substring(0, d.length-1);
    //console.log("you entered: [" + msg + "]");

    var message = {
        registration_id: 'APA91bG1hv1n7WXJGOT-veJ4_d-1w33F3gIDxmbdLwrOKe4MUIF-mdpABjN7Y7iqAUl4kea_MnKx098LaZiUW0R1Yg0GgtOj4vuylp9Qb4xVN4j51G7SdENxZZbmDcFNqxYCoFKVzbuPtELeAXE7NNw2D9Dpw8ZFQsjsKjABlZExUeSko5192N0', // required
        //collapse_key: 'Collapse key',
        'time_to_live': '3',
        'data': msg
    };

    gcm.send(message, function(err, messageId){
        if (err) {
            console.log("Error: " + err.toString());
        } else {
            console.log("Sent message: ", msg);
        }
    });
});