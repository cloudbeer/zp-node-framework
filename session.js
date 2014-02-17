var http = require('http');
require('./cookie');

http.ServerResponse.prototype.enableSession = function (req) {
    var self = this;
    var sessionID = req.getCookie('ZSessionID');
    if (!sessionID)
        self.setCookie('ZippySessionID', 'Z' + generateQuickGuid());

}

function generateQuickGuid() {
    return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
}