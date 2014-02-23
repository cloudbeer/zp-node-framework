var OrderItem = {
    createNew: function () {
		var base = require("./Base");
        var orderItem = base.createNew();
		
		orderItem.goodsID = null;
		orderItem.goosTitle = null;
		orderItem.price = 0;
		orderItem.count = 0;		
		
        return orderItem;
    }
};

module.exports = OrderItem;