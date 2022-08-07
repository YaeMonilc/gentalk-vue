//import $ from 'jquery'
//let Base64 = require('js-base64').Base64

export default {
    name: 'talk',
    data:function(){
        return {
            messages:[
                {
                    "account":"鴵",
                    "text":"<img src='https://iw233.cn/api.php?sort=random'>这图好"
                },
                {
                    "account":"鴵",
                    "text":"还看呢大厦乱"
                },
                {
                    "account":"鴵",
                    "text":"还看呢大厦乱"
                },
                {
                    "account":"鴵",
                    "text":"还看呢大厦乱"
                },
                {
                    "account":"鴵1",
                    "text":"还看呢大厦乱"
                },
                {
                    "account":"鴵2",
                    "text":"还看呢大厦乱"
                },
                {
                    "account":"鴵3",
                    "text":"还看呢大厦乱"
                },
                {
                    "account":"鴵1",
                    "text":"还看呢大厦乱"
                }
            ]
        }
    },
    methods:{
        listShow : function (message,index) {
            if (index === 0)
                return true;
            return !(this.messages[index - 1].account === message.account)
        }
    },
    mounted:function(){
    }
}