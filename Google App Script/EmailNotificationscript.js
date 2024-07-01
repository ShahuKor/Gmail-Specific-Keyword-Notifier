function checkEmails() {
    var keywords = ["Embassy", "vfs", "VFS", "VISA", "visa", "embassy"]; // Add keywords 
    var query = "is:unread (" + keywords.map(function(keyword) {
        return "subject:" + keyword + " OR body:" + keyword;
    }).join(" OR ") + ")";
    
    var label = GmailApp.getUserLabelByName("Processed");
    if (!label) {
        label = GmailApp.createLabel("Processed");
    }
    
    var threads = GmailApp.search(query);
    for (var i = 0; i < threads.length; i++) {
        var thread = threads[i];
        if (!threadHasLabel(thread, label)) {
            var messages = thread.getMessages();
            for (var j = 0; j < messages.length; j++) {
                var message = messages[j];
                sendNotification(message);
            }
            thread.addLabel(label);
        }
    }
}

function threadHasLabel(thread, label) {
    var labels = thread.getLabels();
    for (var i = 0; i < labels.length; i++) {
        if (labels[i].getName() === label.getName()) {
            return true;
        }
    }
    return false;
}

function sendNotification(message) {
    var userKey = " "; // Add your Pushover User Key
    var apiToken = " "; // Add your Pushover API Token
    var payload = {
        "token": apiToken,
        "user": userKey,
        "message": "You have a new email with one of your keywords:\n\n" +
                   "From: " + message.getFrom() + "\n" +
                   "Subject: " + message.getSubject() + "\n\n" +
                   message.getPlainBody()
    };

    var options = {
        "method": "post",
        "contentType": "application/x-www-form-urlencoded",
        "payload": payload
    };

    UrlFetchApp.fetch("https://api.pushover.net/1/messages.json", options);
}

function createTimeDrivenTrigger() {
    ScriptApp.newTrigger("checkEmails")
             .timeBased()
             .everyMinutes(5)
             .create();
}
