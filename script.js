const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
  hamburger.classlist.toggle("active");
  navmenu.classlist.toggle("active");
})

document.querySelector All(".nav-link").ForEach(n=> n.addEventListener("click",() =>{
  hamburger.classlist.remove("active");
  navmenu.classlist.remove("active");
}))