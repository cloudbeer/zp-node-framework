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
		goods.saleType = 1; //�������ͣ�һ���ֱ�ӹ������г�ֻ��Ԥ��
		goods.categoryID = null;
		
		//��Ʒ��ʽ����ɫ����ʽ��
		var styles = [];
		goods.styles = styles;
		
		//��Ʒ�ߴ�
		var sizes = [];
		goods.sizes = sizes;
		
		//��Ʒ����1
		var props1 = [];
		goods.props1 = props1;
		//��Ʒ����2
		var props2 = [];
		goods.props2 = props2;
		//��Ʒ����3
		var props3 = [];
		goods.props3 = props3;		
		
        return goods;
    }
};

module.exports = Goods;