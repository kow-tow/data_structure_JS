### 获取元素的某一个具体的样式属性值
- `元素.style.属性名`
    - 需要我们把元素的样式都写在行内样式上才可以（对写在单独的样式表中的样式不管用）。
    - 这种方式在真实项目中不常用，因为不能为了获取值而把所有的样式写在行内上，无法实现css与html的分离。
- 使用`window.getComputedStyle`这个方法获取所有经过所有浏览器计算过的样式。
    - 所有经过浏览器计算过的样式：只要当前的元素标签可以在页面中呈现出来，那么它的所有的样式都是经过浏览器计算过的（渲染过的），哪怕有些样式没有写，我们也可以获取到。
    - 这是个方法，具有两个参数。`window.getComputedStyle(当前要操作的元素，当前元素的伪类[一般我们不用伪类写null])`
    - 执行方法获取的结果是`CSSStyleDeclaration`这个类的一个实例：包含了当前元素的所有样式属性和值。
    - 方法虽然好用但是在IE6-8下不兼容：因为`window`下没有`getComputedStyle`这个属性，执行该方法会报错。
- 在IE6-8下，我们可以使用`currentStyle`来获取所有经过浏览器计算过的样式，该方法不兼容谷歌浏览器。

### 实现getCss的方案
- 方案1：使用try-catch来处理兼容，前提：必须保证try中的代码在低版本浏览器中执行的时候不兼容报错，这样的话我们才可以用catch捕获异常信息，进行其他的处理。不管当前是什么浏览器，都需要先把try中的代码执行一遍，如果当前是IE7，`window.getComputedStyle`，但是也要先把这行代码执行一遍，报错了再把`curEle.currentStyle`执行一遍，消耗性能。（该方案只有不得已的情况下才使用它）
```javascript
/**
 * 获取当前元素所有经过浏览器计算过的样式中的[attr]对应的值
 * @param curEle：[object]当前要操作的元素对象
 * @param attr：[string]我们要获取的样式属性名称
 */
function getCss(curEle, attr) {
    var val = null;
    try {
        val = window.getComputedStyle(curEle, null)[attr];
    } catch (e) {
        val = curEle.currentStyle[attr];
    }
    return val;
}
```
- 方案2：判断当前浏览器是否存在这个属性或者方法，存在就兼容，不存在就不兼容
```javascript
/**
 * 获取当前元素所有经过浏览器计算过的样式中的[attr]对应的值
 * @param curEle：[object]当前要操作的元素对象
 * @param attr：[string]我们要获取的样式属性名称
 */
function getCss(curEle, attr) {
    var val = null;
    if ("getComputedStyle" in window) { // window下有该属性，说明兼容
        val = window.getComputedStyle(curEle, null)[attr];
    } else {
        val = curEle.currentStyle[attr];
    }
    return val;
}
```
- 方案3：通过检测浏览器版本和类型来处理兼容，我们知道IE6-8不兼容，我们可以直接判断它版本
```javascript
/**
 * 获取当前元素所有经过浏览器计算过的样式中的[attr]对应的值
 * @param curEle：[object]当前要操作的元素对象
 * @param attr：[string]我们要获取的样式属性名称
 */
function getCss(curEle, attr) {
    var val = null;
    if (/MSIE([678])/.test(window.navigator.userAgent)) {
        val = curEle.currentStyle[attr];
    } else {
        val = window.getComputedStyle(curEle, null)[attr];
    }
    return val;
}
```
> 标准浏览器和IE浏览器获取的结果还是不一样的：对于部分样式属性，不同浏览器获取的结果不一样，主要是由于getComputedStyle和currentStyle在某些方面不一样。因此在写CSS的时候第一步初始化默认样式，避免浏览器之间的差异。不仅如此，而且写的默认样式对于JS以后获取到的结果也统一也是有帮助的。

### getCSS方法升级
> 我们仍然需要对这个方法深入，进行一个升级，获取属性值首先不能带上单位
- 升级1：去掉属性值的“单位”，但是要考虑到某些属性值比如float，本身就不是数值也没有单位。
```javascript
// 第一次升级：把属性值的“单位”去掉
// 我们发现，内容都是"数字单位"或者"数字"格式的可以用parseFloat去掉单位，因此我们使用正则
function getCss(curEle, attr) {
    var val = null;
    var reg = null;
    if ("getComputedStyle" in window) { // window下有该属性，说明兼容
        val = window.getComputedStyle(curEle, null)[attr];
    } else {
        val = curEle.currentStyle[attr];
    }
    reg = /^(-?\d+(\.\d+)?)(px|pt|rem|em)?$/;
    return reg.test(val) ? parseFloat(val) : val;
}
```
- 升级2：有些样式属性在不同浏览器中是不兼容的，例如opacity在IE6-8下不兼容
```javascript
 // 关于透明度的处理
function getCss(curEle, attr) {
    var val = null;
    var reg = null;
    if ("getComputedStyle" in window) { // window下有该属性，说明兼容
        val = window.getComputedStyle(curEle, null)[attr];
    } else {
        if (attr === 'opacity') {
            val = curEle.currentStyle['filter']; // 假如得到"alpha(opacity=10)"把获取到的结果进行剖析
            // 获取里面的数字，让数字除以100才和标准的浏览器保持了一致
            reg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/i;
            val = reg.test(val) ? reg.exec(val)[1] / 100 : 1;
        } else {
            val = curEle.currentStyle[attr];
        }
    }
    reg = /^(-?\d+(\.\d+)?)(px|pt|rem|em)?$/;
    return reg.test(val) ? parseFloat(val) : val;
}
```
