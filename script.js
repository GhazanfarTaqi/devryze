// Toggle Mobile Navbar
function toggleMenu(){
    const navbarLinks = document.getElementById("navigationSection");
    const navbar = document.getElementById("navbar");
    if (navbarLinks.style.display === "flex") {
        navbarLinks.style.display = "none";
        navbar.style.height = "5rem";
      } else {
        navbarLinks.style.display = "flex";
        navbar.style.height = "15rem";
      }
}
// const navbarLinks = document.getElementById("navigationSection");
// const menubuttonStatus = document.getElementById("menuButton");
// if(menubuttonStatus.style.display === "none"){
//     navbarLinks.style.display = "flex";
// }


gsap.from("#navbar",{ 
    opacity: 0, 
    duration: 1.2 
})
