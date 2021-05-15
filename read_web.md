## 2.2

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210514070011157.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW96aGF6aGF6aGF6aGE=,size_16,color_FFFFFF,t_70)

## 2.3 viewport配置

viewport用来设置用户在手机上的可视区域
width=device-width :指定viewport宽度为设备宽度，initial-scale=1.0∶指定默认缩放比例为1:1
通过maximum-scale和minimum-scale限定屏幕缩放比例为1:1通过user-scalable限制用户对屏幕进行缩放

```html
    <meta name="viewport" content="width=device-width,initial-scale=1.0,
      maximum-scale=1.0,  mininum-scale=1.0, user-scaleable=no"
    >
```

## 2.4 rem配置

rem是css3新增的一个相对长度单位
rem的值相当于根元素font-size值的倍数
2rem =根元素font-size * 2

具体可以看小明老师的rem课程

DOMContentLoaded事件动态设置根元素font-size
html.style.fontSize = window.innerWidth / 10 + 'px'    我们用屏幕的十分之一作为默认值 这样有个好处 可以根据屏幕宽度的变化 rem的值也会动态变化

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021051421150938.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW96aGF6aGF6aGF6aGE=,size_16,color_FFFFFF,t_70)

增加个DOMContentLoaded事件  在事件中传入一个回调函数

```js
document.addEventListener('DOMContentLoaded',()=>{
  const html= document.querySelector('html')        //获取根元素
  html.style.fontSize=window.innerWidth/10+'px'           //找到根元素后设置fontsize值 为屏幕的十分之一
  
})
```

这时候改变页面宽度 刷新一下字体大小会发生变化

有个问题就是屏幕宽度太宽的时候 字体大小会很大 所以要给字体大小设上限

```js
document.addEventListener("DOMContentLoaded", () => {
  const html = document.querySelector("html"); //获取根元素
  let fontSize = window.innerWidth / 10;
  fontSize = fontSize > 50 ? 50 : fontSize;
  html.style.fontSize = fontSize + "px"; //找到根元素后设置fontsize值 为屏幕的十分之一
});
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210514212846241.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW96aGF6aGF6aGF6aGE=,size_16,color_FFFFFF,t_70)

 可以发现怎么都不会超过50px

## 2.5 reset+global

reset.scss的目的是为了消除不同浏览器默认样式的不一致性
global.scss规定了整个站点的公共样式、公共方法和公共参数等
实现px2rem方法，将px转化为rem

[https://meyerweb.com/eric/tools/](https://meyerweb.com/eric/tools/)

[https://meyerweb.com/eric/tools/css/reset/index.html](https://meyerweb.com/eric/tools/css/reset/index.html)

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021051421523977.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW96aGF6aGF6aGF6aGE=,size_16,color_FFFFFF,t_70)

对根元素和body元素的宽高和默认字体进行设置

```scss
//reset.scss
//对根元素和body元素的宽高和默认字体进行设置
html ,body{
  width: 100% ;  //指定占满全屏
  height: 100%;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
```

```scss
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
//对根元素和body元素的宽高和默认字体进行设置
html ,body{
  width: 100% ;  //指定占满全屏
  height: 100%;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
```

引入的时候遇到了和这位同学一样的问题

https://www.imooc.com/qadetail/330783



```scss
//global.scss
@import './resest.scss';    //这里改了一下才不报错了

//1rem=fontSize  px
//1px=（1/fontSize） rem

//1fontSize默认=37.5
$fontSize:37.5;
@function px2rem($px){
  @return ($px/$fontSize)+rem
}

@mixin center(){
  display: flex;
  align-items: center;
  justify-content: center;
}
```

这个地方坑了我好久 依赖重装了好几次才不报错了

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210514230411438.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW96aGF6aGF6aGF6aGE=,size_16,color_FFFFFF,t_70)





## 2.2

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210514070011157.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW96aGF6aGF6aGF6aGE=,size_16,color_FFFFFF,t_70)

## 2.3 viewport配置

viewport用来设置用户在手机上的可视区域
width=device-width :指定viewport宽度为设备宽度，initial-scale=1.0∶指定默认缩放比例为1:1  --操作容易误触导致屏幕放大缩小

如何解决这个问题？通过maximum-scale和minimum-scale限定屏幕缩放比例为1:1通过user-scalable限制用户对屏幕进行缩放

打开index.html

```html
 <meta name="viewport" content="width=device-width,initial-scale=1.0,
      maximum-scale=1.0,mininum-scale=1.0,user-scalable=no
    ">
```

## 2.4 rem配置

rem是css3新增的一个相对长度单位
rem的值相当于根元素font-size值的倍数1rem =根元素font-size
2rem =根元素font-size * 2

如果想深入了解的话可以看这个https://www.imooc.com/video/16490

DOMContentLoaded事件动态设置根元素font-size
html.style.fontSize = window.innerWidth / 10 + 'px'（dom加载完毕）   随着屏幕宽度的变化rem的值也变化

打开app.vue 将默认样式删除  

增加DOMContentLoaded事件  在事件中传入一个回调函数

有个问题就是当屏幕宽度过大的时候 字体会非常大  所以要为fontsize设置上限

```js
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  // html.style.fontSize = window.innerWidth / 10 + 'px' //  屏幕宽度的1/10
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
```

## 2.5 reset和global

reset.scss的目的是为了消除不同浏览器默认样式的不一致性
global.scss规定了整个站点的公共样式、公共方法和公共参数等
实现px2rem方法，将px转化为rem

reset.scss https://meyerweb.com/eric/tools/css/reset/index.html
然后再补充一下

```scss
html,body{
  width: 100%;
  height: 100%;// 指定占满全屏
  font-family:Arial, Helvetica, sans-serif;
}
```

 global.scss里面引入reset.scss

```scss
@import './reset.scss';

$fontSize : 37.5;
@function px2rem($px) {
  @return ($px/$fontSize) + rem;
}
//后面会复用的样式
@mixin center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

