/**
 * 常用工具
 */
var util = require('util');
console.log('<-------------------------util.inherits------------------------->')
//通过util.inherits实现继承，Sub继承了Base的原型
//Sub仅继承原型中定义的函数，构造函数内部创造的属性和函数都没有被继承
//另外，在原型中定义的属性不会被console.log作为对象的属性输出
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function() {
    console.log(this.name);
};

function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//objSub.sayHello(); 
console.log(objSub);

console.log('<--------------------------util.inspect------------------------>')

//util.inspect能将任意对象转换为字符串，通常用于调试和错误输出。
//它最多可以接受 object,[showHidden],[depth],[colors] 四个参数
//object，必传，即要转换的对象。
//showHidden，可选，值为true时会输出更多隐藏信息。
//depth，可选，表示最大递归层数，默认递归2层，null时则不限层数完整遍历对象。
//color，可选，值为true时输出格式将会以ANSI颜色编码，用于显示更漂亮的效果
function Person() {
    this.name = 'byvoid';
    this.toString = function() {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

console.log('<--------------------------util.isArray------------------------>')
//util.isArray用于判断参数是否为数组
util.isArray([]); // true
util.isArray(new Array); // true
util.isArray({}); // false

console.log('<--------------------------util.isRegExp------------------------>')
//util.isRegExp用于判断参数是否为正则表达式
util.isRegExp(/some regexp/); // true
util.isRegExp(new RegExp('another regexp')); // true
util.isRegExp({}); // false

console.log('<--------------------------util.isDate------------------------>')
//util.isDate用于判断参数是否为日期
util.isDate(new Date()); // true
util.isDate(Date()); // false (without 'new' returns a String)
util.isDate({}); // false

console.log('<--------------------------util.isError------------------------>')
//util.isError用于判断参数是否为错误对象
util.isError(new Error()); // true
util.isError(new TypeError()); // true
util.isError({ name: 'Error', message: 'an error occurred' }); // false