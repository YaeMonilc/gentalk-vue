import $ from "jquery";
let Base64 = require('js-base64').Base64;
import Cookies from 'js-cookie'

export default {
    name: 'login',
    data(){
        return{
            account:"",
            password:""
        }
    },
    mounted:function () {
        if (Cookies.get("token") !== "")
            this.$router.push("/talk")
    },
    methods: {
        close : function () {
            this.$router.back()
        },
        login : function () {
            const _this = this
            const url = (this.$global.head + this.$global.serverUrl + "/login/{account}/{password}")
                .replaceAll("{account}", this.account)
                .replaceAll("{password}", this.password)
            $.get(url,function(data){
                const decodeData = Base64.decode(data)
                if (typeof decodeData == 'string') {
                    try {
                        const json = JSON.parse(decodeData)
                        if(json.event === "Error"){
                            switch (json.message){
                                case "AccountNotExistOrPasswordError":
                                    alert("账号不存在或密码错误")
                                    break
                                default:
                                    alert(decodeData)
                                    break
                            }
                        }
                    } catch(e) {
                        Cookies.set("token", decodeData)
                        _this.$router.push("/talk")
                    }
                }
            });
        }
    }
}