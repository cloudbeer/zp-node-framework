var User = {
    createNew: function () {
		var base = require("./Base");
        var user = base.createNew();
        user.mobile = null;
        user.email = null;
        user.nick = null;
        user.salt = null;
        user.password = null;	
		user.tel = null;
        return user;
    }
};

module.exports = User;