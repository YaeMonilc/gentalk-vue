<template>
  <div class="talk opacity">
    <div class="messageList">
      <transition-group name="messageAnime">
        <div :key="index" v-for="(message,index) in messages">
          <div v-if="listShow(message,index)" class="messageItem">
            <img class="avatar" src="@/assets/m.jpg">
            <div class="information">
              <div class="status">
                <p class="userName" v-html="message.name">名称</p>
                <span v-if="false" class="main outline">鸑</span>
              </div>
              <div class="message">
                <span class="content" v-html="message.text">TEST</span>
              </div>
            </div>
          </div>
          <div v-if="!listShow(message,index)" class="messageItem messageItem-lines">
            <div class="information">
              <div class="message message-lines">
                <span class="content" v-html="message.text">TEST</span>
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
    <div class="sendMessageLayout pan-up">
      <input @input="messageTextInputChange" v-model="sendTextValue" class="messageTextInput gt-textInput" type="text" placeholder="输入你想发的内容(支持HTML)" />
      <button id="sendMessage" @click="sendMessageClick" class="sendButton gt-button mdui-ripple">👆发送👆</button>
    </div>
    <button @click="scrollToBottom" class="gt-button scrollHeightButton mdui-ripple">↓</button>
  </div>
</template>

<style scoped>
@import "@/views/TalkView/TalkView.css";
</style>

<style scoped>
@import "@/views/TalkView/MessageHtmlTag.css";
</style>

<style scoped>
@import "@/views/TalkView/TalkViewMobile.css";
</style>

<script>
import talk from "@/views/TalkView/TalkView";
export default talk;
</script>

