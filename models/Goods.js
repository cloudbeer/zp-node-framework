var Goods = {
    createNew: function () {
		var base = require("./Base");
        var goods = base.createNew();
        goods.title = null;
		goods.specification = null;
		goods.content = null;
		goods.brief = null;
		goods.avatar = null;
		
		goods.seoTitle = null;
		goods.seoDescription = null;
		goods.seoUrl = null;
		
        goods.price = 0;
        goods.priceList = 0;
        goods.price1 = 0;
        goods.price2 = 0;
        goods.price3 = 0;
		
		goods.stock = 0;
		goods.hot = 0;
		goods.saleType = 1; //销售类型，一般的直接购买，自行车只能预定
		goods.categoryID = null;
		
		//商品样式，颜色，款式等
		var styles = [];
		goods.styles = styles;
		
		//商品尺寸
		var sizes = [];
		goods.sizes = sizes;
		
		//商品属性1
		var props1 = [];
		goods.props1 = props1;
		//商品属性2
		var props2 = [];
		goods.props2 = props2;
		//商品属性3
		var props3 = [];
		goods.props3 = props3;		
		
        return goods;
    }
};

module.exports = Goods;