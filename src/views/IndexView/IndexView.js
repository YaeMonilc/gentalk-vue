import Cookies from "js-cookie";

export default {
    name: 'index',
    mounted:function () {
        const _this = this
        this.$mdui.prompt("输入服务器地址", "请求",
            function (value) {
            _this.$global.serverUrl = value
        }, function () {

        })
        if (Cookies.get("token") !== "")
            this.$router.push("/talk")
    },
    methods:{
        login : function () {
            this.$router.push("/login")
        }
    }
}