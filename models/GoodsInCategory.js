var GoodsInCategory = {
    createNew: function () {
		var base = require("./Base");
        var entity = base.createNew();				
		
		entity.articleID = null;
		entity.goodsID = null;
		
        return entity;
    }
};

module.exports = GoodsInCategory;