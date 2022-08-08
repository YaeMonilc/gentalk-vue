//import $ from 'jquery'

const theme = [
    {
        name: "暗黑",
        theme: "#2c2c2c",
        stress: "#6b6b6b"
    },
    {
        name: "翡翠",
        theme: "#ffffff",
        stress: "#38b48b"
    },
    {
        name: "菖蒲",
        theme: "#ffffff",
        stress: "#cc7eb1"
    },
    {
        name: "桃",
        theme: "#ffffff",
        stress: "#f09199"
    },
    {
        name: "群青",
        theme: "#ffffff",
        stress: "#4c6cb3"
    },
    {
        name: "紫苑",
        theme: "#ffffff",
        stress: "#867ba9"
    },
    {
        name: "半",
        theme: "#ffffff",
        stress: "#a69abd"
    }
]

function toggleTheme(themeId){
    document.documentElement.style.setProperty("--theme", theme[themeId].theme);
    document.documentElement.style.setProperty("--stress", theme[themeId].stress);
}

export default {
    theme,
    toggleTheme
}