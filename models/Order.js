var Order = {
    createNew: function () {
		var base = require("./Base");
        var order = base.createNew();
		
		order.userID = null;
		order.sumOrder = 0;
		order.shipFee = 0;
		order.total = 0;
		order.shouldFee = 0;
		order.paidFee = 0;
		
		order.areaID = 0;
		order.address = null;
		order.zipCode = null;
		order.linkPerson = null;
		order.mobile = null;
		order.tel = null;
		order.leaveMsg = null;
		
		order.items = []; //这个里装入 OrderItem 实例
		
        return order;
    }
};

module.exports = Order;