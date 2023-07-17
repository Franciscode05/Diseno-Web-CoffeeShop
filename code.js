let btnmenu = document.querySelector("#icon-menu");

let hmn = document.querySelector(".header-cont nav");








btnmenu.addEventListener("click", function(){
    hmn.classList.toggle("hiddenx");
    btnmenu.classList.toggle("fa-times")
    
});



