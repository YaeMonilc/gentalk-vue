<template>
  <div class="login scale">
    <div class="topBar">
      <span class="title">登录</span>
      <button @click="close" class="close gt-button">X</button>
    </div>
    <div class="layout">
      <input v-model="account" class="input gt-textInput" type="text" placeholder="账号" />
      <input v-model="password" class="input gt-textInput" type="password" placeholder="密码" />
      <input @click="login" class="button gt-button" type="button" value="登录">
    </div>
  </div>
</template>

<style scoped>
  @import "@/views/LoginView/LoginView.css";
</style>

<style scoped>
  @import "@/views/LoginView/LoginViewMobile.css";
</style>

<script>
  import login from "@/views/LoginView/LoginView";
  export default login;
</script>