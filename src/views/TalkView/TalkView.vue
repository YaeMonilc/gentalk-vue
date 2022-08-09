<template>
  <div class="talk opacity">
    <div class="talk-MessageList">
      <transition-group name="messageAnime">
        <div :key="index" v-for="(message,index) in messages">
          <div v-if="listShow(message,index)" class="talk-MessageItem">
            <img class="talk-Avatar" src="@/assets/m.jpg">
            <div class="talk-Information">
              <div class="talk-Status">
                <p class="talk-UserName" v-html="message.name">名称</p>
              </div>
              <div class="talk-Message">
                <span class="talk-Content" v-html="message.text">TEST</span>
              </div>
            </div>
          </div>
          <div v-if="!listShow(message,index)" class="talk-MessageItem-Lines">
            <div class="talk-Information-Lines">
              <div class="talk-Message talk-Message-Lines">
                <span class="talk-Content" v-html="message.text">TEST</span>
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
    <div class="talk-SendMessageLayout pan-up">
      <input @input="messageTextInputChange" v-model="sendTextValue" class="talk-MessageTextInput gt-textInput" type="text" placeholder="输入你想发的内容(支持HTML)" />
      <button id="sendMessage" @click="sendMessageClick" class="talk-SendButton gt-button mdui-ripple">👆发送👆</button>
    </div>
    <button id="talk-ScrollHeightButton" @click="scrollToBottom" class="talk-ScrollHeightButton gt-button mdui-ripple">↓</button>
  </div>
</template>

<style scoped>
  @import "@/views/TalkView/TalkView.css";
</style>

<style scoped>
  @import "@/views/TalkView/TalkViewDesktop.css";
</style>

<style scoped>
  @import "@/views/TalkView/TalkViewMobile.css";
</style>

<style scoped>
  @import "@/views/TalkView/MessageHtmlTag.css";
</style>

<script>
import talk from "@/views/TalkView/TalkView";
export default talk;
</script>

