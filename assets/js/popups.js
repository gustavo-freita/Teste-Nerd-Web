var site = document.querySelector ("#site");
var popUp = document.querySelector(".container__sitesMore");

site.addEventListener("click", function(){
    if(popUp.style.display === "flex") {
        popUp.style.display = "none";
    } else {
        popUp.style.display = "flex";
    }
});