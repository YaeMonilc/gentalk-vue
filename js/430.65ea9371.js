"use strict";(self["webpackChunkgentalk_vue"]=self["webpackChunkgentalk_vue"]||[]).push([[430],{1430:function(t,s,e){e.r(s),e.d(s,{default:function(){return k}});var a=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"talk opacity"},[s("div",{staticClass:"talk-MessageList"},[s("transition-group",{attrs:{name:"messageAnime"}},t._l(t.messages,(function(a,n){return s("div",{key:n},[t.listShow(a,n)?s("div",{staticClass:"talk-MessageItem"},[s("img",{staticClass:"talk-Avatar",attrs:{src:e(9746)}}),s("div",{staticClass:"talk-Information"},[s("div",{staticClass:"talk-Status"},[s("p",{staticClass:"talk-UserName",domProps:{innerHTML:t._s(a.name)}},[t._v("名称")])]),s("div",{staticClass:"talk-Message"},[s("span",{staticClass:"talk-Content",domProps:{innerHTML:t._s(a.text)}},[t._v("TEST")])])])]):t._e(),t.listShow(a,n)?t._e():s("div",{staticClass:"talk-MessageItem-Lines"},[s("div",{staticClass:"talk-Information-Lines"},[s("div",{staticClass:"talk-Message talk-Message-Lines"},[s("span",{staticClass:"talk-Content",domProps:{innerHTML:t._s(a.text)}},[t._v("TEST")])])])])])})),0)],1),s("div",{staticClass:"talk-SendMessageLayout pan-up"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.sendTextValue,expression:"sendTextValue"}],staticClass:"talk-MessageTextInput gt-textInput",attrs:{type:"text",placeholder:"输入你想发的内容(支持HTML)"},domProps:{value:t.sendTextValue},on:{input:[function(s){s.target.composing||(t.sendTextValue=s.target.value)},t.messageTextInputChange]}}),s("button",{staticClass:"talk-SendButton gt-button mdui-ripple",attrs:{id:"sendMessage"},on:{click:t.sendMessageClick}},[t._v("👆发送👆")])]),s("button",{staticClass:"talk-ScrollHeightButton gt-button mdui-ripple",attrs:{id:"talk-ScrollHeightButton"},on:{click:t.scrollToBottom}},[t._v("↓")])])},n=[],o=e(7387),l=e.n(o),i=e(680);let c=e(7702).Base64;var r={name:"talk",data:function(){return{messages:[{account:"鴵A",name:"114514",text:"<img src='https://iw233.cn/api.php?sort=random'>"},{account:"鴵B",name:"114514",text:"我劝你别抓耗子"},{account:"鴵B",name:"114514",text:"你看你🐎呢"}],sendTextValue:"",stats:0}},methods:{listShow:function(t,s){return 0===s||!(this.messages[s-1].account===t.account)},messageTextInputChange:function(){const t=l()("#sendMessage");this.sendTextValue.length>0?t.fadeIn(350):t.fadeOut(350)},sendMessageClick:function(){this.sendMessage({event:"message",text:c.encode(this.sendTextValue)}),this.sendTextValue="",this.scrollToBottom(200)},sendMessage:function(t){this.$global.ws.send(c.encode(JSON.stringify(t)))},heartbeat:function(){0===this.stats&&this.sendMessage({event:"heartbeat"})},scrollToBottom:function(t){const s=l()(".talk-MessageList").get(0);l()(".talk-MessageList").animate({scrollTop:s.scrollHeight},t)},scrollToBottomAuto:function(){const t=l()(".talk-MessageList").get(0),s=parseInt(t.scrollTop),e=parseInt(t.scrollHeight),a=parseInt(t.offsetHeight);e-a-s<78&&this.scrollToBottom(200)},backLoginView:function(){this.$global.ws.close(),this.$router.push("/")}},mounted:function(){const t=this;l()("#sendMessage").fadeOut(),l()("#talk-ScrollHeightButton").hide(),l()(".talk-MessageList").scroll((function(){const t=l()(".talk-MessageList").get(0),s=l()("#talk-ScrollHeightButton"),e=parseInt(t.scrollTop),a=parseInt(t.scrollHeight),n=parseInt(t.offsetHeight);a-n-e>156?s.show(150):s.hide(150)})),this.$global.ws=new WebSocket(this.$global.wsHead+this.$global.serverUrl+"/room/"+i.Z.get("token")),this.$global.ws.onconnect=function(){},setInterval((function(){t.heartbeat()}),5e3),this.$global.ws.onmessage=function(s){const e=c.decode(s.data);switch(e){case"TokenCheckFailed":t.stats=301;break;case"Prohibit":t.stats=302;break;case"Times":break;default:var a=JSON.parse(e);switch(a.event){case"ServerElsewhereLink":t.stats=303;break;case"HandleMessage":var n=a;t.messages.push(n),t.scrollToBottomAuto()}break}},this.$global.ws.onclose=function(){switch(t.stats){case 301:alert("Token校验失败");break;case 302:alert("禁止");break;case 303:alert("账号在别处登录");break;default:t.stats=-1,alert("与服务器断开连接");break}i.Z.set("token",""),t.backLoginView()}}},u=r,g=u,d=e(1001),h=(0,d.Z)(g,a,n,!1,null,"d70caf68",null),k=h.exports},9746:function(t,s,e){t.exports=e.p+"img/m.720223bc.jpg"}}]);
//# sourceMappingURL=430.65ea9371.js.map