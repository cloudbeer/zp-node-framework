var ArticleCategory = {
    createNew: function () {
		var base = require("./Base");
        var entity = base.createNew();				
		
		entity.title = null;
		entity.parentID = null;
		
        return entity;
    }
};

module.exports = ArticleCategory;