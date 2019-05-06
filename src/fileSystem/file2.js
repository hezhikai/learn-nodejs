var fs = require("fs");
console.log('<---------------关闭文件--------------------->');
var buf = new Buffer.alloc(1024);
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
        if (err) {
            console.log(err);
        }
        // 仅输出读取的字节
        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }
        // 关闭文件
        fs.close(fd, function(err) {
            if (err) {
                console.log(err);
            }
            console.log("文件关闭成功");
        });
    });
});

setTimeout(() => {
    console.log('<---------------截取文件--------------------->');
    var buf = new Buffer.alloc(1024);
    fs.open('input.txt', 'r+', function(err, fd) {
        if (err) {
            return console.error(err);
        }
        console.log("文件打开成功！");
        // 截取文件
        fs.ftruncate(fd, 10, function(err) {
            if (err) {
                console.log(err);
            }
            console.log("文件截取成功。");
            fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
                if (err) {
                    console.log(err);
                }
                // 仅输出读取的字节
                if (bytes > 0) {
                    console.log(buf.slice(0, bytes).toString());
                }
                // 关闭文件
                fs.close(fd, function(err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log("文件关闭成功！");
                });
            });
        });
    });
}, 2000);

setTimeout(() => {
    console.log('<---------------删除文件--------------------->');
    console.log("准备删除文件！");
    fs.unlink('input2.txt', function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("文件删除成功！");
    });
}, 4000);

setTimeout(() => {
    console.log('<---------------创建目录--------------------->');
    console.log("创建目录 test/");
    fs.mkdir("test/", function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("目录创建成功。");
    });
}, 6000);

setTimeout(() => {
    console.log('<---------------读取目录--------------------->');
    console.log("查看 test 目录");
    fs.readdir("test/", function(err, files) {
        if (err) {
            return console.error(err);
        }
        files.forEach(function(file) {
            console.log(file);
        });
    });
}, 8000);

setTimeout(() => {
    console.log('<---------------删除目录--------------------->');
    console.log("准备删除目录 test2");
    fs.rmdir("test2/test22/", function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("读取 test2 目录");
        fs.readdir("test2/", function(err, files) {
            if (err) {
                return console.error(err);
            }
            files.forEach(function(file) {
                console.log(file);
            });
        });
    });
}, 10000);