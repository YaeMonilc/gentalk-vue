<template>
  <div class="index scale">
    <div class="layout">
      <p class="indexTitle">Gentalk</p>
      <button @click="login" class="gt-button mdui-ripple">登录</button>
    </div>
  </div>
</template>

<style scoped>
  @import "@/views/IndexView/IndexView.css";
</style>

<style scoped>
@import "@/views/IndexView/IndexViewMobile.css";
</style>

<script>
  import index from "@/views/IndexView/IndexView";
  export default index;
</script>


