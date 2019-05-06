var fs = require("fs");
console.log('<---------------读取文件--------------------->');
// 异步读取
fs.readFile('input.txt', function(err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
});
// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());
console.log("程序执行完毕。");

setTimeout(() => {
    console.log('<---------------打开文件--------------------->');
    // 异步打开文件
    console.log("准备打开文件！");
    fs.open('input.txt', 'r+', function(err, fd) {
        if (err) {
            return console.error(err);
        }
        console.log(fd);
        console.log("文件打开成功！");
    });
}, 2000);

setTimeout(() => {
    console.log('<---------------获取文件信息--------------------->');
    fs.stat('input.txt', function(err, stats) {
        console.log(stats);
        console.log(stats.isFile()); //true
    })
}, 4000);

setTimeout(() => {
    console.log('<---------------写入文件--------------------->');
    fs.writeFile('input.txt', '我是通过fs.writeFile写入文件的内容', function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");
        console.log("---我是分割线---")
        console.log("读取写入的数据！");
        fs.readFile('input.txt', function(err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("异步读取文件数据: " + data.toString());
        });
    });
}, 6000);

setTimeout(() => {
    console.log('<---------------读取文件--------------------->');
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
            console.log(bytes + "  字节被读取");

            // 仅输出读取的字节
            if (bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
            }
        });
    });
}, 8000);