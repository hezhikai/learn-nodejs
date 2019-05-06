var app = express();

// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function(req, res, next) {
    console.log('Time:', Date.now());
    next();
});

// 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它
app.use('/user/:id', function(req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

// 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求
app.get('/user/:id', function(req, res, next) {
    res.send('USER');
});

//错误处理中间件和其他中间件定义类似，只是要使用 4 个参数
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});