zp-node-framework
===================

开发进行中

这个项目是使用 nodejs 做的 web framework。
目前包含以下功能：

#URL 路由

规则如下：

* 如果在路由表里配置了路由，则按照路由的规则进行。

使用方法：

```nodejs
    zippy.routes["/test"] = function (req, res) {
        res.html("我是路由映射过来的。");
    }
```

* 然后寻找 controllers 目录下的文件，进行类似 asp.net MVC 方式的路由。如：
/home/index 就会被映射到 /controllers/Home.js 中的 index 方法（忽略了大小写）。

使用方法：

```nodejs
    require('../viewengine');
    exports.Home = {
        index: function (req, res) {
            res.mesh('home_index', { req: req, list: 'i am a list' }, 'layout/main');
        },
        index1: function (req, res) {
            res.json({site:1});
        }
    }
```

* 如果以上两个规则没有，就直接寻找相应路径的静态文件。（这个在正式环境下应该由 webserver 完成）。



#模版引擎

* SiteMesh 的方式，主要是借用了 cheerio 库，对 layout 和页面进行合并。

使用方法：

在模版里

```html
<mesh id='content' />
```


在页面里

```html
<div id='content'>
```

* 使用了 vash 模版引擎，主要是觉得 Razor 模版很不错。 **好吧，我承认我是该死的 asp.NET 程序员，我用 vs 写 js**

* 明白了个中道理，使用其他模版引擎也是易如反掌好么，唉 express 居然不支持 jshtml。


#其他功能特点

    * 做了一个 controllers 目录的监控，可以在改动 controllers 的时候不重启。

    * 偷懒了，直接用 connect 来支撑了。


#计划中
    
   * 优化：模版和页面的 cache









*********************************
Notice: this.project.isNotAccomplished();

请注意：这个还在开发中，仅作为参考，不要贸然使用在项目中，出问题了，作者概不负责。
*********************************


