require('../viewengine');

exports.Issue = {
    index: function (req, res) {
        res.mesh('issue_index', { req: req });
    }
}