<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')//  获取根元素
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'//  找到根元素后设置fontsize值 为屏幕的十分之一
})
</script>
<style>
</style>
