import $ from 'jquery'
import Cookies from "js-cookie";
let Base64 = require('js-base64').Base64

export default {
    name: 'talk',
    data:function(){
        return {
            messages:[
                {
                    "account":"鴵A",
                    "name":"114514",
                    "text":"<img src='https://iw233.cn/api.php?sort=random'>"
                },
                {
                    "account":"鴵B",
                    "name":"114514",
                    "text":"我劝你别抓耗子"
                },
                {
                    "account":"鴵B",
                    "name":"114514",
                    "text":"你看你🐎呢"
                },
            ],
            sendTextValue: "",
            stats: 0
        }
    },
    methods:{
        listShow : function (message,index) {
            if (index === 0)
                return true;
            return !(this.messages[index - 1].account === message.account)
        },
        messageTextInputChange : function () {
            const sendButton = $('#sendMessage');
            if (this.sendTextValue.length > 0){
                sendButton.fadeIn(350)
            }else {
                sendButton.fadeOut(350)
            }
        },
        sendMessageClick : function () {
            this.sendMessage({
                "event": "message",
                "text": Base64.encode(this.sendTextValue)
            })
            this.sendTextValue = ""
            this.scrollToBottom(200)
        },
        sendMessage : function (json) {
            this.$global.ws.send(Base64.encode(JSON.stringify(json)))
        },
        heartbeat : function () {
            if(this.stats === 0){
                this.sendMessage({
                    "event": "heartbeat"
                })
            }
        },
        scrollToBottom : function (time) {
            const list = $(".talk-MessageList").get(0)
            $(".talk-MessageList").animate({
                scrollTop: list.scrollHeight
            }, time);
        },
        scrollToBottomAuto : function (){
            const list = $(".talk-MessageList").get(0)
            const scrollTop = parseInt(list.scrollTop)
            const scrollHeight = parseInt(list.scrollHeight)
            const offsetHeight = parseInt(list.offsetHeight)
            if (((scrollHeight - offsetHeight) - scrollTop) < (26 * 3)){
                this.scrollToBottom(200)
            }
        },
        backLoginView : function(){
            this.$global.ws.close()
            this.$router.push("/")
        }
    },
    mounted:function(){

        const _this = this

        $('#sendMessage').fadeOut()
        $('#talk-ScrollHeightButton').hide()

        $(".talk-MessageList").scroll(function () {
            const list = $(".talk-MessageList").get(0)
            const scrollHeightButton = $("#talk-ScrollHeightButton")
            const scrollTop = parseInt(list.scrollTop)
            const scrollHeight = parseInt(list.scrollHeight)
            const offsetHeight = parseInt(list.offsetHeight)
            if (((scrollHeight - offsetHeight) - scrollTop) > (26 * 6)){
                scrollHeightButton.show(150)
            }else {
                scrollHeightButton.hide(150)
            }
        })

        /* WebSocket */
        this.$global.ws = new WebSocket(this.$global.wsHead + this.$global.serverUrl + "/room/" + Cookies.get("token"))

        this.$global.ws.onconnect = function () {//heartbeat
        }

        setInterval(function () {
            _this.heartbeat()
        },5000)

        this.$global.ws.onmessage = function (message) {
            const serverMessage = Base64.decode(message.data);
            switch (serverMessage){
                case "TokenCheckFailed":
                    _this.stats = 301
                    break
                case "Prohibit":
                    _this.stats = 302
                    break
                case "Times":
                    break
                default:
                    var json = JSON.parse(serverMessage);
                    switch (json.event){
                        case "ServerElsewhereLink":
                            _this.stats = 303
                            break
                        case "HandleMessage":
                            var handleMessage = json
                            //handleMessage.text = Base64.decode(handleMessage.text)
                            _this.messages.push(handleMessage)
                            _this.scrollToBottomAuto()
                    }
                    break
            }
        }
        
        this.$global.ws.onclose = function () {
            switch (_this.stats){
                case 301:
                    alert("Token校验失败")
                    break
                case 302:
                    alert("禁止")
                    break
                case 303:
                    alert("账号在别处登录")
                    break
                default:
                    _this.stats = -1
                    alert("与服务器断开连接")
                    break
            }
            Cookies.set("token","")
            _this.backLoginView()
        }
        
    }
}