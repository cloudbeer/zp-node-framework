require('../viewengine');

exports.Issue = {
    index: function (req, res) {
        res.mesh('issue_index', { req: req });
    },
    publish: function (req, res) {
        res.mesh('issue_publish', { req: req });
    }
}