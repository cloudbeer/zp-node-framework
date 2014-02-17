require('../viewengine');
exports.Home = {
    index: function (req, res) {
        res.mesh('home_index', { req: req, list: 'i am a list' });
    },
    index1: function (req, res) {
        res.json({site:1});
    }
}