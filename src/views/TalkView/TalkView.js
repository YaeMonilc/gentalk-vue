//import $ from 'jquery'
//let Base64 = require('js-base64').Base64

export default {
    name: 'talk',
    data:function(){
        return {
            messages:[
                {
                    "account":"鴵A",
                    "name":"114514",
                    "text":"<img src='https://iw233.cn/api.php?sort=random'>这图好"
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