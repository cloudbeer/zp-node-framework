var EventEmitter = require('events').EventEmitter;
var reqEvent = new EventEmitter();

var req = {
    on: function (ev, cb) {
        reqEvent.on(ev, cb);
    },
    run: function () {
        if ("fire Error") {
            reqEvent.emit('error'); //出错了
        }

        reqEvent.emit('ex'); //前任
        console.log('我是正房');
        reqEvent.emit('done'); //小三
    }
}


req.on('error', function () {
    console.log('唉呀，出错了！');
});
req.on('ex', function () {
    setTimeout(function () {
        console.log('我是前任，但我在剧本中出现晚于正房 1 秒钟。');
    }, 1000);
});
req.on('done', function () {
    setTimeout(function () {
        console.log('我是小三，但我在剧本中出现晚于正房 2 秒钟。');
    }, 2000);
});


//启动
//req.run();


var res = function (a) {    
    return function(b) {
        return function (c) {
            return a * b * c;
        }
    }
} (1)(2)(5);

console.log(res);



//var exdate = new Date();
//console.log(exdate.getMinutes());

//console.log(exdate);
//exdate.setMinutes(exdate.getMinutes() + 30);
//console.log(exdate);