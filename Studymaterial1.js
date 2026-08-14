/* THEME-TOGGLER */

const theme=document.getElementById('theme-toggle');
const savedtheme=localStorage.getItem('theme');
if(savedtheme === "dark"){
    document.body.dataset.theme="dark";
}
theme.addEventListener("click",function(){
    if(document.body.dataset.theme === "dark"){
        document.body.removeAttribute("data-theme");
        localStorage.setItem("theme","light");
    }
    else{
        document.body.dataset.theme="dark";
        localStorage.setItem("theme","dark");
    }
});