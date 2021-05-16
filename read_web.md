技巧

# 2

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

# 3

## 3.1 epubjs的核心工作原理

实例化一个book对象 book对象对电子书解析 
		通过renderTo方法生成rendition对象 rendition对象负责电子书的渲染 通过renditon可以得到theme对象
			theme负责电子书的样式和主题 比如设置字号 设置主题这些功能
		location负责电子书的定位 用来实现拖动进度条时快速定位的功能
		navigation也是由book对象生成的 用来展示目录并提供目录所在的路径

## 3.2 电子书解析

现在来实现电子书的解析和渲染

src目录下创建个文件  vue组件 Ebook.vue
技巧 ：然后可以新建一个模板代码
https://www.jianshu.com/p/b0a96e61c811

 

```json
{
  "Print to console": {
    "prefix": "vue",  
    "body": [
      "<!-- $1 -->",
      "<template>",
      "<div></div>",
      "</template>",
      "",
      "<script>",
      "export default {",
      "data() {",
      "return {",
      "",
      "}",
      "},",
      "//生命周期 - 创建完成（访问当前this实例）",
      "created() {",
      "",
      "},",
      "//生命周期 - 挂载完成（访问DOM元素）",
      "mounted() {",
      "",
      "}",
      "}",
      "</script>",
      "<style lang='scss' scoped>",
      "@import 'assets/style/global';",
      "</style>"
    ],
    "description": "Log output to console"
  }
}
```

接下来到router文件夹下配置一下路由
导入我们的Ebook组件

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210516093929549.png)

然后在routes下面再建一个对象

path为/ebook   component为刚刚导入的Ebook组件    然后将根路径做一些调整 重定向到/ebook路径下

这时候在ebook.vue里面随便写点东西

可以发现能正确运行了

接着在Epub.vue里导入epubjs
把电子书放在static路径下  

```js
import Epub from 'epubjs'
const DOWMLOAD_URL = '/static/aaa.epub'
```

之后建一个方法 showEpub 
mounted钩子函数中调用showEpub

showEpub中 
	生成Ebook对象
	生成Rendition对象
	通过Rendition对象的display方法渲染电子书

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210516101538276.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW96aGF6aGF6aGF6aGE=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210516101955395.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW96aGF6aGF6aGF6aGE=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210516102103109.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW96aGF6aGF6aGF6aGE=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210516102210585.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW96aGF6aGF6aGF6aGE=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021051610310097.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW96aGF6aGF6aGF6aGE=,size_16,color_FFFFFF,t_70)

接着生成rendition对象  他是通过Book对象的renderTo方法生成的 
方法需要两个参数一个是dom 生成的电子书会挂载到id上
第二个是option   设置width height都为屏幕宽高

我们挂载到read上![在这里插入图片描述](https://img-blog.csdnimg.cn/20210516104943791.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210516110426503.png)

如何消除报错
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210516110530487.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW96aGF6aGF6aGF6aGE=,size_16,color_FFFFFF,t_70)

技巧：想一劳永逸的话需要修改eslint的配置文件

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210516110914792.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW96aGF6aGF6aGF6aGE=,size_16,color_FFFFFF,t_70)

```vue
<!--  -->
<template>
  <div class="ebook">
    <div class="read_wrapper">
      <div id="read"></div>
    </div>
  </div>
</template>

<script>
import Epub from 'epubjs'
const DOWMLOAD_URL = '/static/duzhe.epub'
export default {
  data () {
    return {}
  },
  methods: {
    // 电子书的解析和渲染
    showEpub () {
      this.book = new Epub(DOWMLOAD_URL)
      console.log(this.book.renderTo())
      global.ePub = Epub
      this.renditon = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight
      })
      this.renditon.display()
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {},
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {
    this.showEpub()
  }
}
</script>
<style lang='scss' scoped>
@import "assets/style/global";
</style>

```

## 3.3 翻页功能

做点击功能可以在div上层使用绝对定位做一个浮层

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210516173746927.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW96aGF6aGF6aGF6aGE=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210516173523136.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW96aGF6aGF6aGF6aGE=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210516174824775.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW96aGF6aGF6aGF6aGE=,size_16,color_FFFFFF,t_70)