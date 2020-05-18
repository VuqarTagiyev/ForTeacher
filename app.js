
let nav =  document.querySelector("header nav");
let link =  document.querySelectorAll("header nav a");
window.addEventListener('scroll', function(){
   let scroll = this.scrollY;
   if(scroll > 50){
    nav.classList.add('nav-active');
    for(let i = 0;i < link.length;i++) link[i].style.color = "var(--color3)";
   }
   else {
    nav.classList.remove('nav-active');
    for(let i = 0;i < link.length;i++) link[i].style.color = "var(--color2)";
   }


})