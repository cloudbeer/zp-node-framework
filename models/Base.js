var Base = {
    createNew: function () {
        var base = {};
		base.status = 1;
		base.type = 1;
		base.createDate = new Date();
		base.updateDate = null;
		base.creator = null;
		base.updater = null;
		
		//将req的body绑定到实体
		base.bindFrom = function(body){
			for (var en in base){
				if (body[en] != undefined)
					base[en] = body[en];
			}		
		}

        //将实体格式化（拷贝）成能在View里呈现的
        base.toView = function(){
            var rtn = {};
            for (var en in base){
                if (base[en] == null)
                    rtn[en] = "";
                else
                    rtn[en] = base[en];

            }
            return rtn;

        }
		
        return base;
    }
};

module.exports = Base;