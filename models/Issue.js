var Issue = {
    createNew: function () {
        var base = require("./Base");
        var entity = base.createNew();
        entity.title = null;
        entity.content = null;
        entity.cover = null;
        entity.limit = 20;
        entity.flag = null;

        return entity;
    }
};

module.exports = Issue;