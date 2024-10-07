let burgerBtn = document.querySelector(".burger-menu-btn");
let burgerMenu = document.querySelector(".burger-menu");

let isBurgerOpen = false;

burgerBtn.onclick = function() {
    // OPEN MENU
    if(!isBurgerOpen) {
        burgerMenu.style.display = "block";
        burgerBtn.style.width = "30px";
        burgerBtn.style.height = "30px";
        burgerBtn.style.backgroundPosition = " center left 50px, center";
        isBurgerOpen = true;
    }
    // CLOSE MENU
    else if(isBurgerOpen) {
        burgerMenu.style.display = "none";
        burgerBtn.style.width = "40px";
        burgerBtn.style.height = "40px";
        burgerBtn.style.backgroundPosition = " center, center left 50px";
        isBurgerOpen = false;
    }
}