<template>
  <div class="login scale">
    <div class="topBar">
      <span class="loginTitle">登录</span>
      <button @click="close" class="close gt-button mdui-ripple">X</button>
    </div>
    <div class="loginLayout">
      <input v-model="account" class="gt-textInput loginInput" type="text" placeholder="账号" />
      <input v-model="password" class="gt-textInput loginInput" type="password" placeholder="密码" />
      <button @click="login" class="gt-button outline loginButton mdui-ripple">登录</button>
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