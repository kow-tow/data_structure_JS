### 获取页面中元素的方法
- document.getElementById()
- context.getElementsByTagName(TAGNAME) 把指定容器中子子孙孙辈的所有标签名为TAGNAME的获取到了
- context.getElementsByClassName(CLASSNAME) 把所有样式类名为CLASSNAME的元素得到，在IE6-8下不兼容
- document.getElementsByName() 通过元素的NAME属性值获取一组元素，在IE浏览器下只能获取表单元素
- document.body
- document.documentElement
- context.queryStlector/context.querySeletorAll IE6-8下不兼容，并且通过该方法获取到的元素不存在dom映射
### 描述节点与节点之间关系的属性
在标砖浏览器中会把空格和换行当做文本节点来处理
- childNodes
- children 在IE6-8下获取的结果和标准浏览器获取的结果不一样
- parentNode
- previousSibling 获取上一个哥哥节点，在IE6-8下不兼容
- previousElementSibling 获取上一个哥哥元素节点，在IE6-8下不兼容
- nextSibling/nextElementSibling 获取下一个哥哥节点/哥哥元素节点，在IE6-8下不兼容
- firstChild/firstElementChild 获取第一个子节点/获取第一个子节点元素
- lastChild/lastElementChild 获取最后一个子节点/获取最后一个子节点元素
### 动态操作DOM的方法
- createElement 创建元素
- document.createDocumentFragment() 创建文档碎片
- appendChild
- insertBefore
- cloneNode(true/false)
- replaceChild
- reomveChild
- get/set/removeAttribute
