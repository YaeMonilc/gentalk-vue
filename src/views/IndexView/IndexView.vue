<template>
  <div class="index scale">
    <div class="layout">
      <p class="title">Gentalk</p>
      <input @click="login" class="gt-button" type="button" value="登录" />
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


