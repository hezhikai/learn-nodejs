// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功。');

    // 触发 data_received 事件 
    eventEmitter.emit('data_received');
}
// 绑定 connection1 事件处理程序
eventEmitter.on('connection1', connectHandler);
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function() {
    console.log('数据接收成功。');
});
//重复接收，依次执行
eventEmitter.on('data_received', function() {
    console.log('数据接收成功。2');
});
// 触发 connection1 事件 
eventEmitter.emit('connection1');
console.log("程序执行完毕。");
console.log("<------------------------------------------------>")
setTimeout(() => {
    // 监听器 #1
    var listener1 = function listener1() {
        console.log('监听器 listener1 执行。');
    }
    // 监听器 #2
    var listener2 = function listener2() {
        console.log('监听器 listener2 执行。');
    }
    // 绑定 connection 事件，处理函数为 listener1 
    eventEmitter.addListener('connection', listener1);
    // 绑定 connection 事件，处理函数为 listener2
    eventEmitter.on('connection', listener2);
    var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
    console.log(eventListeners + " 个监听器监听连接事件。");
    // 处理 connection 事件 
    eventEmitter.emit('connection');
    // 移除监绑定的 listener1 函数
    eventEmitter.removeListener('connection', listener1);
    console.log("listener1 不再受监听。");
    // 触发连接事件
    eventEmitter.emit('connection');
    eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
    console.log(eventListeners + " 个监听器监听连接事件。");
    console.log("程序执行完毕。");
}, 2000)