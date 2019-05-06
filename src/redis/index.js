let redis = require('redis');
let port = 6379,
    host = '',
    opts = {};
let client = redis.createClient({port, host, opts});
// let client = redis.createClient();
client.on('ready', function(err) {
    console.log('ready');
});
client.on('connect', function() {
    //设置单个key和value，回调函数可选
    client.set('author', 'Wilson', function(err, res) {
        console.log('<----------get和set------------->');
        console.log('set-res:', res);
    });
    //expire:设置过期时间（秒）
    client.expire('author', 60 * 60);
    //得到key得到value，回调函数可选
    client.get('author', function(err, res) {
        console.log('get-res:', res);
    });
    //del:用于删除已存在的键
    client.del('author', (err, res) => {
        console.log('del-res:', res);
    });
    client.get('author', function(err, res) {
        console.log('get-res:', res);
    });

    //redis.print：简便的回调函数，测试时显示返回值
    //hmset可以设置多值，相当于数组的push
    //hmset可以直接传入object，或者传入key,value的形式（从第二个参数到回调函数为止）
    client.hmset('short', { 'js': 'javascript', 'C#': 'C Sharp' }, function(err, res) {
        console.log('<----------多值get和set------------->');
    });
    client.hmset('short', 'SQL', 'Structured Query Language', 'HTML', 'HyperText Mark-up Language', redis.print);
    //获取值，此时不能用get
    client.hgetall("short", function(err, res) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        console.dir(res);
    });

    //sadd:集合操作，向集合key中添加N个元素，已存在元素的将忽略
    var key = 'skills';
    client.sadd(key, 'C#', 'java', function(err, res) {
        console.log('<----------sadd和multi------------->');
        console.log(res);
    });
    client.sadd(key, 'nodejs', redis.print);
    client.sadd(key, "MySQL", redis.print);
    //multi:标记一个事务的开始（打包），把要执行的命令存放在队列中，等待执行
    client.multi()
        //sismember:元素value是否存在于集合key中，存在返回1，不存在返回0
        .sismember(key, 'C#', function(err, res) {
            console.log('sismember', res);
        })
        //smembers:返回集合key中的所有成员，不存在的集合也不会报错，会当作空集返回
        .smembers(key, function(err, res) {
            console.log('smembers', res);
        })
        //exec:执行事务内所有命令
        .exec(function(err, replies) {
            console.dir(replies);
            //quit:接收到所有响应后关闭
            client.quit();
        });
});