
var db = require("../mongodb.js");
exports.Account = {
    register: function (req, res) {
        var user = require('../models/User')
        var instance = user.createNew();
        res.mesh('account_register', { entity: instance.toView(), req: req });
    },
    register$post: function (req, res) {
        var user = require('../models/User')
            , tools = require("../share/tools")
            , validator = require('validator');
        var instance = user.createNew();
        instance.bindFrom(req.body);
        var errors = [];

        if (instance.email == null || instance.email == "") {
            errors.push("请输入您的Email。");
        }
        if (instance.password == null || instance.password == "") {
            errors.push("请输入密码。");
        }
        if (instance.nick == null || instance.nick == "") {
            errors.push("请输入昵称。");
        }
        if (!validator.isEmail(instance.email)) {
            errors.push("请输入正确格式的Email。");
        }
        if (errors.length > 0) {
            res.mesh("account_register", { entity: instance.toView(), errors: errors, req: req });
            return;
        }
        var db = require("../mongodb.js");

        db.exists("User", {
            $or: [
                { email: instance.email },
                { nick: instance.nick }
            ]
        }, function (err, existed) {
            if (err) { res.error(err); return; }
            if (existed) {
                errors.push("用户 Email 或昵称不能重复。");
                res.mesh("account_register", { entity: instance.toView(), errors: errors, req: req });
                return;
            }
            var salt = tools.rnd_str(16);
            instance.salt = salt;
            instance.password = tools.make_pwd(instance.password, salt);
            try {
                db.insert("User", instance, function (err, data) {
                    if (err) { res.error(err); return; }
                    if (data) {
                        res.redirect("/account/login");
                    }
                    else {
                        errors.push("数据保存失败。");
                        res.mesh("account_register", { entity: instance.toView(), errors: errors, req: req });
                    }
                });
            } catch (err) {
                res.error(err);
            }
        });
    },
    email_ok: function (req, res) {
        if (req.body.email == null || req.body.email == "") {
            res.json({ res: false });
            return;
        }
        db.exists("User", { email: req.body.email }, function (err, existed) {
            if (err) { res.error(err); return; }
            res.json({ res: !existed });
        });
    },
    nick_ok: function (req, res) {
        res.html(req.query.nick);
        return;
        if (req.body.nick == null || req.body.nick == "") {
            res.json({ res: false });
            return;
        }
        db.exists("User", { nick: req.body.nick }, function (err, existed) {
            if (err) { res.error(err); return; }
            res.json({ res: !existed });
        });
    }



}
