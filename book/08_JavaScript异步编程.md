### JavaScript中两种编程思想
JS是单线程的，仿佛是一根筋，做着当前的事情，没有完成之前，绝对不会做下一步事情。
- 同步：
只有上一件事情完成后，才会处理下一件事情。上一件事情未完成就继续完成上一件事情。（JS中大部分都是同步编程）
- 异步：
规划要做一件事，但是不是当前立马去执行这件事情，需要等一定的时间，这样的话，我们不会去等它执行，而是继续执行下面的操作，只有当下面的事情都处理完成了，才会返回头处理之前的事情。如果下面的事情没有处理完成，不管之前的事情有没有到时间，都踏踏实实的等着。

### JavaScript中异步编程的四种情况：
- 定时器都是异步编程
- 所有的事件绑定都是异步编程的
- Ajax读取数据的时候一般都设置为异步编程
- 回调函数也是异步编程的
```javascript
var n = 0;
window.setTimeout(function(){
    n++;
    console.log(n);
},0);
console.log(n);
// 先输出0，再输出1
```
```javascript
var n = 0;
window.setTimeout(function(){
    n++;
    console.log(n);
}, 0);
console.log(n);
while(1) {
    n++;
}
console.log(n);
// 输出0后再无输出，因为while是死循环
```
> 如果后面的同步代码未执行完成，不管定时器有没有到时间都是不会执行定时器的。这是JS单线程机制导致的。

```javascript
var n = 0;
window.setTimeout(function(){
    n+=2;
    console.log(n);
}, 100);

window.setTimeout(function(){
    n+=5;
    console.log(n);
}, 10);
console.log(n);
for (var i = 0; i < 1000000; i++) {

}
console.log(n);
// 先输出0，再输出0，再输出5，再输出7
```