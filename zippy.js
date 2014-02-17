var connect = require('connect')
  , http = require('http')
  , routine = require('./routine');;

var app = connect();


var zippy = module.exports = {
    config: {
        port: 8025
    },
    routes: {},
    controllers: {},
    start: function () {

        console.log('自动加载controlles...');
        zippy.loadControllers();

        app.use(function (req, res) {
            var rUrl = req.url;
            if (rUrl != '/favicon.ico') {
                console.log(req.method + ' ' + rUrl);
                var pathArr = require("url").parse(rUrl);
                var pathname = pathArr.pathname.toLowerCase();
                var isRouted = routine.route(pathname, zippy.routes, zippy.controllers, req, res);
                if (!isRouted) {
                    res.writeHead(404);
                    res.end();
                }
            }
        });

        http.createServer(app).listen(zippy.config.port);
        console.log('服务器启动了，端口：' + zippy.config.port);
    },
    loadControllers: function () {
        require("fs").readdirSync("./controllers").forEach(function (file) {
            var controller = require("./controllers/" + file);
            var fName = require('path').basename(file, '.js');
            zippy.controllers[fName.toLowerCase()] = controller[fName];
        });
    }
};


//这里用于监视控制器的改变，生产环境请勿使用。
require("fs").watch("./controllers", function (ev, fn) {
    try {
        var filename = require('path').resolve('./controllers/' + fn);
        delete require.cache[filename];
        zippy.loadControllers();
    } catch (err) {
    }
});



/*
require('./session');

var zippy = {
    config: {
        port: 8025
    },
    routes: {},
    controllers: {},
    start: function () {
        var http = require('http');
        var routine = require('./routine');

        console.log('自动加载controlles...');
        zippy.loadControllers();

        http.createServer(function (req, res) {
            res.enableSession(req);
            var rUrl = req.url;
            if (rUrl != '/favicon.ico') {
                console.log(".................");
                console.log(req.method + ' ' + rUrl);
                var pathArr = require("url").parse(rUrl);
                var pathname = pathArr.pathname.toLowerCase();
                var isRouted = routine.route(pathname, zippy.routes, zippy.controllers, req, res);
                if (!isRouted) {
                    res.writeHead(404);
                    res.end();
                }
            }

        }).listen(zippy.config.port);
        console.log('服务器启动了，端口：' + zippy.config.port);
    },
    loadControllers: function () {
        require("fs").readdirSync("./controllers").forEach(function (file) {
            var controller = require("./controllers/" + file);
            var fName = require('path').basename(file, '.js');
            zippy.controllers[fName.toLowerCase()] = controller[fName];
        });
    }
};

//test.................
//var x = {y: function () {
//}};
//for (var k in global) { console.log(k); }
//console.log(x.type);
//console.log('/');
//..........................


module.exports = zippy;

*/