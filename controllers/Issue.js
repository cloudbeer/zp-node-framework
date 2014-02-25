require('../viewengine');

var db = require("../mongodb");
var issue = require("../models/Issue");

function getUploadFileName(oriFileName, cb) {
    var fs = require('fs');
    var path = require('path');
    var target_root = './upload/';
    var rel_path = target_root;
    if (!fs.existsSync(target_root)) fs.mkdirSync(target_root);

    var now = new Date();
    var dateDir = now.getFullYear().toString() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
    rel_path += dateDir + "/";
    var target_dir = path.join(target_root, dateDir);
    if (!fs.existsSync(target_dir)) fs.mkdirSync(target_dir);
    var ext = path.extname(oriFileName);
    var fileName = now.getTime().toString() + ext;
    rel_path += fileName;
    fileName = path.join(target_dir, fileName);
    if (cb)
        cb(fileName, rel_path);
    //return fileName;
}

exports.Issue = {
    index: function (req, res) {
        res.mesh('issue_index', { req: req });
    },
    publish: function (req, res) {
        var entity = issue.createNew();
        res.mesh('issue_publish', { req: req, entity: entity.toView() });
    },
    publish$post: function (req, res) {
        var instance = issue.createNew();
        instance.bindFrom(req.body);
        var cover = req.files["cover"];
        getUploadFileName(cover.name, function (tar_path, relName) {
            var fs = require('fs');
            var tmp_path = cover.path;
            var is = fs.createReadStream(tmp_path);
            var os = fs.createWriteStream(tar_path);
            is.pipe(os);
            is.on('end', function () {
                fs.unlinkSync(tmp_path);
            });
            instance.cover = relName;
            console.dir(instance);
            //return;
            db.insert("User", instance, function (err, data) {
                if (err) res.error(err); return;
                if (data) {
                    res.html("成功");
                }
                else {
                    res.html("失败");
                }
            });

        });


        //res.html('ok');
        //return;
        ////console.log(cover);
        ////console.log(instance);

        //console.log(instance);

    }
}