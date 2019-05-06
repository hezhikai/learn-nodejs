/*module.exports = function() {
  // ...
}*/
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
    this.world = function() {
        console.log('Hello World');
    };
    return this;
};
module.exports = Hello;

/*exports.world = function() {
  console.log('Hello World');
}*/