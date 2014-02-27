var zippy = require('./zippy');
require('./viewengine');

zippy.devWatch(); //开发模式下，改变 controllers 不重启服务。
zippy.config.port = 3000 || zippy.config.port;


zippy.routes["/register"] = require("./controllers/Account.js").register;




zippy.start();
