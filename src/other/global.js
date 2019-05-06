/**
 * 全局变量
 */
//__filename 表示当前执行脚本的绝对路径。
//如果在模块中，返回的值是模块文件的路径。 
console.log(__filename);
//__dirname 表示当前执行脚本所在的目录。
console.log(__dirname);
//process用于描述当前Node.js 进程状态的对象
process.on('exit', function(code) {
    // 以下代码永远不会执行
    setTimeout(function() {
        console.log("该代码不会执行");
    }, 0);
    console.log('退出码为:', code);
});
//process属性
setTimeout(() => {
    console.log("<------------------------------------------------->")
    //输出到终端
    process.stdout.write("Hello World!" + "\n");
    //命令行执行脚本时的各个参数，第一个总是node，第二个是脚本文件名，其余是脚本文件的参数
    process.argv.forEach(function(val, index, array) {
        console.log(index + ': ' + val);
    });
    //执行当前脚本的 Node 二进制文件的绝对路径
    console.log(process.execPath);
    //运行程序所在的平台系统 'darwin', 'freebsd', 'linux', 'sunos' 或 'win32'
    console.log(process.platform);
}, 2000);
//process方法
setTimeout(() => {
    console.log("<-------------------------------------------------->")
    // 输出当前目录
    console.log('当前目录: ' + process.cwd());
    // 输出当前版本
    console.log('当前版本: ' + process.version);
    // 输出内存使用情况
    console.log(process.memoryUsage());
}, 4000);