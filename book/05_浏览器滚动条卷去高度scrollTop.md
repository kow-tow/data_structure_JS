> 之前学习的JS盒子模型中的client系列，offset系列，scrollWidth/scrollHeight都是只读的属性，只能通过属性获取值，不能通过属性修改元素的样式。
### scrollTop/scrollLeft
滚动条卷去的高度和宽度，这两个属性是唯一可读可写的属性
```javascript
// 假设有个id为box的盒子，并且它盒子内部的内容溢出，overflow设为auto
var box = document.getElementById("box");
box.scrollTop = 0; // 可以直接让内容回到容器顶部
```
我们的scrollTop的值是存在边界值（最大值/最小值），我们设置的值比最小值小或者比最大值大都没有用，起到效果的依然是边界值。
```javascript
box.scrollTop = -1000; // 依然回到顶部
console.log(box.scrollTop); // 输出 0
```
最大值 = 真实高度 - 当前容易一屏幕的高度

### 利用scrollTop回到顶部
```html
<body>
<!--a标签本身是跳转页面的，把跳转的地址写在href属性中，没写的话刷新本页面-->
<!--把href属性写成javascript:;就可以取消默认行文了-->
<a href="javascript:;" id="goLink">GO</a>
</body>
<script>
var golink = document.getElementById("goLink");
golink.onclick = function () {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}
</script>
```