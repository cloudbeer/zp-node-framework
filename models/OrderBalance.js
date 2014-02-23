var OrderBalance = {
    createNew: function () {
		var base = require("./Base");
        var orderBalance = base.createNew();
		
		orderBalance.orderID = null;
		orderBalance.amount = 0;
		orderBalance.remark = null;
		
        return orderItem;
    }
};

module.exports = OrderBalance;