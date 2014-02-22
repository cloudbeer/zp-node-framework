var zippy = require('./zippy');
require('./viewengine');

zippy.devWatch(); //开发模式下，改变 controllers 不重启服务。
zippy.config.port = 3000 || zippy.config.port;


zippy.routes["/test"] = function (req, res) {
    res.html("我是路由映射过来的。");
}




zippy.start();
