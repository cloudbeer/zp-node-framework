exports.rnd_str = function (len) {
    var a = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890-_+=~!@#$%^&*()<>?,.";
    var rtn = "";
    for (var i = 0; i < len; i++) {
        var index = (Math.random() * (a.length - 1)).toFixed(0);
        rtn += a[index];
    }
    return rtn;
}

exports.make_pwd = function (ori, salt) {
    var crypto = require('crypto')
        , shasum = crypto.createHash('sha1');
    shasum.update(ori + salt);
    return shasum.digest('hex');
}

exports.check_login = function (req, res) {
    var xuser = req.session.user;
    if (xuser == null) {
        res.redirect('/account/login?backto=' + encodeURI(req.url));
        return false;
    }
}

/*
 exports.bind_data = function(body, entity){
 for (var en in entity){
 if (body[en] != undefined)
 entity[en] = body[en];
 }
 }
 */

//module.exports = tools;
