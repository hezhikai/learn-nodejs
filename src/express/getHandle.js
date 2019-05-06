var express = require('express');
var app = express();
const path = require('path');
//将参数解析为绝对路径
const resolve = file => path.resolve(__dirname, file);
app.use(express.static('public'));

app.get('/index.html', function(req, res) {
    // res.sendFile(__dirname + "/" + "index.html");
    res.sendFile(resolve("../../index.html"));
})

app.get('/process_get', function(req, res) {
    // 输出 JSON 格式
    var response = {
        "first_name": req.query.first_name,
        "last_name": req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})