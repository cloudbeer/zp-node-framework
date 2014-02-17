exports.Account = {
    index: function (req, res) {
        //console.log("我是account的index");
        res.end('我是account的index1');
    },
    home: function (req, res) {
        console.log(req.getCookie("ssid"));
        res.end('我是account的home');
    },
    home2: function(req, res){
        res.end('我是account的home');
    },
    home4: function(req, res){
        res.end('我是account的home 222,      看我不用重启哦');
    },
    home6: function(req, res){
        res.end('6 看我不用重启哦');
    }

}
