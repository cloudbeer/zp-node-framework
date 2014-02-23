var GoodsSKU = {
    createNew: function () {
		var base = require("./Base");
        var goodsSKU = base.createNew();
		goodsSKU.price = 0;
		goodsSKU.color = null;
		goodsSKU.size = null;
		goodsSKU.spec1 = null;
		goodsSKU.spec2 = null;
        return goodsSKU;
    }
};

module.exports = GoodsSKU;