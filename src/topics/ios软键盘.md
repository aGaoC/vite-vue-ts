<!--
 * @Description: 
 * @Date: 2021-04-27 15:38:33
 * @LastEditTime: 2021-04-27 15:39:01
 * @FilePath: /vite-vue-ts/src/topics/ios软键盘.md
-->

## iPhone 里面 Safari 上如果一个输入框 fixed 绝对定位在底部，当软键盘弹出的时候会有什么问题，如何解决？（ios下fixed失效问题）

### 原因

**软键盘唤起后，页面的fixed元素将失效（ios默认用户更希望的是元素随着滚动而移动，也就是变成了absolute定位），既然变成了absolute，所以当页面超过一屏而滚动时，失效的fixed元素就会跟随滚动了。**

**不仅限于`type=text`的输入框，凡是软键盘（比如时间日期选择、select选择等等）被唤起，都会遇到同样的问题**

### 解决

1） **既然会变成absolute，索性直接使用absolute**

bottom直接以body作为父元素来进行绝对定位，不过这种方式网上都不推荐，想来更多的问题等待修正，前人经验还是需要借鉴的

2） **不让页面滚动，而是让主体部分自己滚动**

如果fixed的失效，但是页面并没有超过一屏的长度，那无论是absolute还是fixed并没有什么区别。顺着这个思路，完全可以让main直接滚动就行了。将吸底的元素和主体部分作为两个大容器，主体部分设置绝对定位，固定在屏幕中间，超出部分就自行滚动，吸底元素就可以自己玩了。

```html
<body>
  <div class="warper">
    <div class="top"></div>
    <div class="main"></div>
  </div>
  <div class="fix-bottom"></div>
</body>
```
```css
.warper {
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  /* 解决ios滑动不流畅问题 */
  -webkit-overflow-scrolling: touch;
}
.fix-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}
```
这样就能避免上面那个问题了。但是ios下，对于吸底元素而言在屏幕下半部分唤起键盘的时候，会被遮挡住部分东西，对于这种情况，我们只好加个监听事件，当唤起键盘的时候，设置scrollTop值。

```js
scrollContent() {
  this.interval = setInterval(() => {
    this.scrollToEnd();
  }, 500)
},
scrollToEnd() {
  document.body.scrollTop = document.body.scrollHeight;
},
clearScroll() {
  clearInterval(this.interval);
},
```
***微信打开网页键盘弹起后向上滑，导致弹框里的按钮响应区域错位***
和上边问题类似，处理方式也是设置scrollTop

### 问题
**键盘弹起页面上滑，键盘收起页面不会回到原位置，导致弹框（css设置position为fixed会有问题，absolute不会有问题）后按钮响应区域错位。**

### 解决
```js
// 滚动到顶部
window.scrollTo(0, 0);
// 滚动到底部
window.scrollTo(0, document.documentElement.clientHeight);
```
```js
// 解决键盘弹出bug
// 判断是不是ios设备
if(_.isIOS()) {
  window.addEventListener('focusout', function() {
    // 软键盘收起的事件处理
    setTimeout(() => {
      window.scrollTo(0, document.documentElement.clientHeight);
    });
  });
}
```