var http = require('http');
http.ServerResponse.prototype.header = function () {
    this.setHeader('X-Powered-By', 'zippy framework @ cloudbeer');
}
http.ServerResponse.prototype.html = function (html, status) {
    this.header();
    status = status | 200;
    this.writeHead(status, { 'Content-Type': 'text/html' });
    this.end(html);
}
http.ServerResponse.prototype.json = function (jObj, status) {
    this.header();
    status = status | 200;
    this.writeHead(status, { 'Content-Type': 'application/json' });
    this.end(JSON.stringify(jObj));
}

http.ServerResponse.prototype.er404 = function (msg) {
    this.html(msg, 404);
}
http.ServerResponse.prototype.er500 = function (msg) {
    this.html(msg, 500);
}

//模拟 SiteMesh 的方法。我从来就记不住正则表达式，借用了 cheerio （like jquery），还有vash (like razor)
http.ServerResponse.prototype.mesh = function (page, model, layout) {
    var path = require('path');
    var fs = require('fs');
    var self = this;

    //TODO: 这里的应写成配置放到外面
    var view_path = '/views', ext = '.html';

    if (!page) {
        self.er500('必须指定页面。');
        return;
    }
    if (!layout) {
        //默认模版定义在这里 '/views/layout/main.html'
        layout = 'layout/main';
    }
    var pageFile = path.join(__dirname, view_path, page + ext);
    var layoutFile = path.join(__dirname, view_path, layout + ext);
    if (!fs.existsSync(pageFile)) {
        self.er500('找不到页面文件 ' + pageFile); return;
    }
    if (!fs.existsSync(layoutFile)) {
        self.er500('找不到模版文件 ' + layoutFile); return;
    }

    fs.readFile(pageFile, { encoding: 'utf8' }, function (err1, pageData) {
        if (err1) { self.er500(err1); return; }
        var cheerio = require('cheerio');

        fs.readFile(layoutFile, { encoding: 'utf8' }, function (err2, layoutData) {
            if (err2) { self.er500(err2); return; }
            var $p = cheerio.load(pageData);
            var $l = cheerio.load(layoutData);

            $l('title').html($p('title').html());
            var layoutMesh = $l('mesh');
            var lLen = layoutMesh.length;
            for (var a = 0; a < lLen; a++) {
                var ele = layoutMesh[a];
                var eleID = ele.attribs.id;
                var pEle = $p('#' + eleID);
                if (pEle.length == 1) {
                    $l('#' + eleID).replaceWith(pEle.html());
                }
                else {
                    $l('#' + eleID).remove();
                }
            }

            var tplHtml = $l.html();
            var vash = require('vash');
            var tpl = vash.compile(tplHtml);
            self.html(tpl(model));
        });
    });
}