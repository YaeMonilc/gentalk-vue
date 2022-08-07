import $ from "jquery";
let Base64 = require('js-base64').Base64;

export default {
    name: 'login',
    data(){
        return{
            account:"",
            password:""
        }
    },
    mounted:function () {
    },
    methods: {
        close : function () {
            this.$router.back()
        },
        login : function () {
            const _this = this
            var url = (this.$global.head + this.$global.serverUrl + "/login/{account}/{password}")
                .replaceAll("{account}", this.account)
                .replaceAll("{password}", this.password)
            $.get(url,function(data){
                var decodeData = Base64.decode(data)
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
                        _this.$global.token = decodeData
                        _this.$router.push("/talk")
                    }
                }
            });
        }
    }
}