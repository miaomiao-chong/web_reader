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
<<<<<<< HEAD
  const html = document.querySelector('html')
  // html.style.fontSize = window.innerWidth / 10 + 'px' //  屏幕宽度的1/10
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
=======
  const html = document.querySelector('html')//  获取根元素
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'//  找到根元素后设置fontsize值 为屏幕的十分之一
>>>>>>> 33d2be378c06b226b6e1c233856bcd48f86fb121
})
</script>
<style>
</style>
