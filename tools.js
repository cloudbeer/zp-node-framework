function upload(file) {
    var fs = require('fs');
    // 获得文件的临时路径
    var tmp_path = file.path;
    // 指定文件上传后的目录 - 示例为"images"目录。 
    var target_path = './upload/images/' + file.name;
    // 移动文件
    fs.rename(tmp_path, target_path, function (err) {
        if (err) throw err;
        // 删除临时文件夹文件, 
        fs.unlink(tmp_path, function () {
            if (err) throw err;
            //res.send('File uploaded to: ' + target_path + ' - ' + req.files.thumbnail.size + ' bytes');
        });
    });

}