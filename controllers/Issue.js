require('../viewengine');

var issue = require("../models/Issue");
exports.Issue = {
    index: function (req, res) {
        res.mesh('issue_index', { req: req });
    },
    publish: function (req, res) {
        var entity = issue.createNew();
        res.mesh('issue_publish', { req: req, entity: entity.toView() });
    }
}