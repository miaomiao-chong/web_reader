
<!--  -->
<template>
  <div class="ebook">
    <div class="read_wrapper">
      <div id="read"></div>
      <div class="mask">
        <div class="left" @click="prev"></div>
        <div class="center"></div>
        <div class="right" @click="next"></div>
      </div>
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
    },
    prev () {
      // Rendition.prev方法
      if (this.renditon) {
        this.renditon.prev()
      }
    },
    next () {
      // Rendition.next方法
      if (this.renditon) {
        this.renditon.next()
      }
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
  .ebook{
    position: relative;
    .read_wrapper{
      .mask {
        position: absolute;
        display: flex;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // background-color: yellow;
        .left {
          flex: 0 0 px2rem(100);
          // background-color: #fff;
          }
        .center{
          flex: 1;
          // background-color: blue;
        }
        .right{
           flex: 0 0 px2rem(100);
          //  background-color: #aaa;
        }
      }
    }
  }
</style>
