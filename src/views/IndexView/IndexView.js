import Cookies from "js-cookie";

export default {
    name: 'index',
    mounted:function () {
        if (Cookies.get("token") !== "")
            this.$router.push("/talk")
    },
    methods:{
        login : function () {
            this.$router.push("/login")
        }
    }
}