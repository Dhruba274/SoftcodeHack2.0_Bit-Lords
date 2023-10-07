const menuContent = document.getElementById("nav-all");
const btn = document.getElementById("btn");
const navbar = document.getElementById("nav-bar");

// array.forEach(e => {
//     e.addEventListener("click",()=>{
//         var menu = e.getAttribute("data-category");
//         this.fetchnews(menu);
//     })
// });

// array.forEach(e => {
//     e.addEventListener("click",()=>{
//         var menu = e.getAttribute("data-category");
//         fetchNews(menu)
//     })
// });

function open(){
    menuContent.style.top = "0";
    menuContent.style.right = "1rem";
    menuContent.style.visibility = "visible";
}

function close(){
    menuContent.style.top = "-10rem";
    menuContent.style.right = "1rem";
}
