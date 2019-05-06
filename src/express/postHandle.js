var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const path = require('path');
//将参数解析为绝对路径
const resolve = file => path.resolve(__dirname, file);

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/index.html', function(req, res) {
    res.sendFile(resolve("../../index.html"));
})

app.post('/process_post', urlencodedParser, function(req, res) {
    // 输出 JSON 格式
    var response = {
        "first_name": req.body.first_name1,
        "last_name": req.body.last_name1
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})