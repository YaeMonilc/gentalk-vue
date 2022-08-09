import $ from 'jquery'
//let Base64 = require('js-base64').Base64

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
            sendTextValue: ""
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
                "account": "User(localhost)",
                "name": "User(localhost)",
                "text": this.sendTextValue
            })
            this.sendTextValue = ""
        },
        sendMessage : function (json) {
            this.messages.push(json)
            this.scrollToBottom(200)
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
        }
    },
    mounted:function(){
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
    }
}