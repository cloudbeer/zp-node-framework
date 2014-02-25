var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://127.0.0.1:27017/test';
var EventEmitter = require('events').EventEmitter;
var dbEvent = new EventEmitter();

var mongodb = {
    on: function (ev, cb) {
        dbEvent.on(ev, cb);
    },
    insert: function (T, entity, cb) {
        if (!T) throw new Error("必须指定表格【collection】名称。");
        MongoClient.connect(mongoUrl, function (err, db) {
            //if (err) { dbEvent.emit('error', err); return; }
            if (err) { cb(err); return;}
            var collection = db.collection(T);
            collection.insert(entity, function (err, docs) {
                if (err) { cb(err); return; }
                db.close();
                if (cb) {
                    if (docs) cb(null, true); else cb(null, false);
                }
            });
        });
    },

    exists: function (T, criteria, cb) {
        if (!T) throw new Error("必须指定表格【collection】名称。");
        MongoClient.connect(mongoUrl, function (err, db) {
            if (err) { cb(err); return; }
            var collection = db.collection(T);
            collection.findOne(criteria, function (err, docs) {
                if (err) { cb(err); return; }
                db.close();
                if (cb) {
                    if (docs) cb(null, true); else cb(null, false);
                }
            });

        });
    },
    take: function (T, criteria, order, cb) {
        if (!T) throw new Error("必须指定表格【collection】名称。");
        MongoClient.connect(mongoUrl, function (err, db) {
            if (err) { cb(err); return; }
            var collection = db.collection(T);
            collection.find(criteria, function (err, docs) {
                if (err) { cb(err); return; }
                //console.dir(docs);
                db.close();
                if (cb)
                    cb(null, docs);
            });
        });
    },
    findOne: function (T, criteria, cb) {
        if (!T) throw new Error("必须指定表格【collection】名称。");
        MongoClient.connect(mongoUrl, function (err, db) {
            if (err) { cb(err); return; }
            var collection = db.collection(T);
            collection.findOne(criteria, function (err, doc) {
                if (err) { cb(err); return; }
                db.close();
                if (cb)
                    cb(null, doc);
            });
        });
    }
};

module.exports = mongodb;