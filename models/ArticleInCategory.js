var XModel = {
    createNew: function () {
		var base = require("./Base");
        var entity = base.createNew();				
		
		entity.articleID = null;
		entity.categoryID = null;
		
		
        return entity;
    }
};

module.exports = XModel;