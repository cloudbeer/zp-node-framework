var GoodsStyle = {
    createNew: function () {
		var base = require("./Base");
        var goodsStyle = base.createNew();
		goodsStyle.image = null;
		goodsStyle.title =  null;
		
        return goodsStyle;
    }
};
module.exports = GoodsStyle;