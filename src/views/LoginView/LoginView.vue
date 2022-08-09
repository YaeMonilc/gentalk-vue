<template>
  <div class="login scale">
    <div class="login-TopBar">
      <span class="login-Title">登录</span>
      <button @click="close" class="login-Close gt-button mdui-ripple">X</button>
    </div>
    <div class="login-Layout">
      <input v-model="account" class="login-Input gt-textInput" type="text" placeholder="账号" />
      <input v-model="password" class="login-Input gt-textInput" type="password" placeholder="密码" />
      <button @click="login" class="login-Button gt-button outline mdui-ripple">登录</button>
    </div>
  </div>
</template>

<style scoped>
  @import "@/views/LoginView/LoginView.css";
</style>

<style scoped>
  @import "@/views/LoginView/LoginViewDesktop.css";
</style>

<style scoped>
  @import "@/views/LoginView/LoginViewMobile.css";
</style>

<script>
  import login from "@/views/LoginView/LoginView";
  export default login;
</script>