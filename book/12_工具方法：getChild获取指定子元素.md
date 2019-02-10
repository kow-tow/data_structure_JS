> 操作dom的方法里有一个叫children的方法，可以获取所有的子元素，但该方法不兼容IE6-8浏览器，我们也有了新的需求，我们不仅能获取子元素，也能获取指定的子元素，并且兼容IE浏览器
### 基本思想
- 首先获取所有的子节点，使用childNodes方法获取
- 在所有的子节点中把元素节点过滤出来（nodeType === 1）
```javascript
/**
 * 获取元素的指定子元素
 * @param curELe:被操作元素
 * @returns {Array}:该元素的子元素数组
 */
function getChild(curELe) {
    let ary = [];
    if (/MSIE([678])/i.test(navigator.userAgent)) { // 判断一下浏览器，在IE浏览器下才做兼容处理
        let nodeList = curELe.childNodes; // 获取当前元素的childNodes
        for (let i = 0, len = nodeList.length; i < len; i++) {
            let curNode = nodeList[i];
            if (curNode.nodeType === 1) { // 是元素节点
                ary[ary.length] = curNode;
            }
        }
    } else {
        ary = Array.prototype.slice.call(curELe.children); // 把children方法获取的类数组转为数组
    }
    return ary;
}
```
- 指定元素作为第二个参数，我们在获取子元素数组后，进行一次比对筛选，然后返回筛选后的数组。
```javascript
/**
 * 获取元素的子元素，若被指定标签，获取指定子元素
 * @param curELe:被操作元素
 * @param tagName:期望获取的子元素名（标签名）
 * @returns {Array}:该元素的子元素数组
 */
 function getChild(curELe, tagName) {
    let ary = [];
    if (/MSIE([678])/i.test(navigator.userAgent)) { // 判断一下浏览器，在IE浏览器下才做兼容处理
        let nodeList = curELe.childNodes; // 获取当前元素的childNodes
        for (let i = 0, len = nodeList.length; i < len; i++) {
            let curNode = nodeList[i];
            if (curNode.nodeType === 1) { // 是元素节点
                ary[ary.length] = curNode;
            }
        }
    } else { // 标准浏览器中使用children即可，但获取的是一个元素集合（类数组）
        ary = Array.prototype.slice.call(curELe.children); // 把children方法获取的类数组转为数组
    }
    // 进行二次筛选
    if (typeof tagName === "string") {
        let newAry = [];
        for (let k = 0, len = ary.length; k < len; k++) {
            let curEleNode = ary[k];
            console.log(curEleNode);
            if (curEleNode.nodeName.toLowerCase() === tagName.toLowerCase()) { // 是指定标签
                newAry.push(ary[k]);
            }
        }
        return newAry;
    }
    return ary;
}
```