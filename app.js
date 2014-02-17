var zippy = require('./zippy');
require('./viewengine');


zippy.config.port = 3000 || zippy.config.port;


zippy.routes["/test"] = function (req, res) {
    res.html("我是路由映射过来的。");
}




zippy.start();
