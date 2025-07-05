// mobile menu 

let menuicon = document.querySelector(".menuicon")
let menuitems = document.querySelector(".hdr-mobile-menuitems nav")
let closemenu = document.querySelector(".mobile-nav-close i")

menuicon.addEventListener("click",()=>{
    menuitems.classList.add("show-mobile-nav")
})

closemenu.addEventListener("click",()=>{
    menuitems.classList.remove("show-mobile-nav")
})




// login page 

let yourLib = document.querySelector(".your-lib")
let libOption = document.querySelector(".lib-option")

yourLib.addEventListener("click",()=>{
    libOption.classList.toggle("lib-option-show")
})



// mobile - premium 

let premium_notify = document.querySelector("#get-premium-mob-notify");
let premium_notify_cross = document.querySelector(".close-premium-notify");

premium_notify_cross.addEventListener("click", () => {
    premium_notify.classList.add("hide-get-premium-mob-notify");
});
