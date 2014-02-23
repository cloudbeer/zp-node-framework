var GoodsCategory = {
    createNew: function () {
		var base = require("./Base");
        var goodsCategory = base.createNew();
		
		goodsCategory.title = null;
		goodsCategory.parentID = null;		
		goodsCategory.sort = 0;
		
        return goodsCategory;
    }
};

module.exports = GoodsCategory;