exports.route = function (pathname, routes, controllers, req, res) {
    var routeFun = routes[pathname];
    if (typeof routeFun === 'function') {
        routeFun(req, res);
        return true;
    }

    //模拟 asp.net MVC  的模式路由
    var controller = 'home';
    var action = 'index';
    var pathnames = pathname.split('/');
    if (pathnames.length >= 2) {
        controller = pathnames[1] || controller;
        action = pathnames[2] || action;
    }

    var controllerObj = controllers[controller];
    if (controllerObj) {
        var actFun = controllerObj[action];
        if (typeof actFun === 'function') {
            actFun(req, res);
            return true;
        }
    }

    //此部分用于输出静态文件，正式服务器，请使用nginx或者apache来搞
    var fs = require('fs');
    var path = require('path');
    if (pathname == "/") pathname = "/index.html";  //default    docment
    var realPath = '.' + pathname;
    if (fs.existsSync(realPath)) {
        var mime = require('./mime').types;
        var ext = path.extname(pathname);
        ext = ext ? ext.slice(1) : 'unknown';
        var contentType = mime[ext] || "text/plain";

        fs.readFile(realPath, 'binary', function (err, data) {
            res.writeHead(200, { 'Content-Type': contentType });
            res.write(data, "binary");
            res.end();
        });
        return true;
    }
    //-----------------------------------------------------------

    return false;
}
