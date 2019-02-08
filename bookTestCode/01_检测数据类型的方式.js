// typeof
var num = "aqing";
console.log(typeof 12); // number
console.log(typeof num); // string
console.log(typeof typeof num); // string

// instanceof
var obj = [12, 23];
console.log(obj instanceof Array); // true
console.log(obj instanceof RegExp); // false
console.log(1 instanceof Number); // false

console.log(typeof 1); // number
console.log(typeof new Number(1)); // object
console.log(new Number(1) instanceof Number); // true

var ary = [];
console.log(ary instanceof Array); // true
console.log(ary instanceof Object); // true

function Fn() {

}
Fn.prototype = ary;
f = new Fn();
console.log(f instanceof Array); // true

// constructor
var obj1 = [];
console.log(obj1.constructor === Array); // true
console.log(obj1.constructor === RegExp); // false
var num1 = 1;
console.log(num1.constructor === Number); // true

var reg = /^$/;
console.log(reg.constructor === RegExp); // true
console.log(reg.constructor === Object); // false

// Object.prototype.toString.call()
// toString
console.log((1).toString()); // 1 使用的是Number.prototype.toString方法，就是单纯的转化为字符串
console.log((1).__proto__.__proto__.toString()); // [object Object] 使用__proto__直接查找上级的toString方法，发现Object.prototype.toString不是转化为字符串
console.log(({name: 'Aqing'}).toString()); // [object Object]
console.log(Math.toString()); // [object Math]

var ary1 = [];
console.log(Object.prototype.toString.call(ary1)); // [object Array]
var reg = /^$/;
console.log(Object.prototype.toString.call(reg)); // [object RegExp]
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
console.log(Object.prototype.toString.call(new Date())); // [object Date]