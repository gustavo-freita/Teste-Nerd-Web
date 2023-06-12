document.addEventListener('DOMContentLoaded', () => {
    for(let btn of document.querySelectorAll('[data-target]')) {
        btn.addEventListener('click', (e) => {
            if(document.querySelector(btn.dataset.target).dataset.state == 'false') {
                document.querySelector(btn.dataset.target).dataset.state = 'true';
                if( btn.querySelector('.fa-caret-down')) {
                    btn.querySelector('.fa-caret-down').classList.add('fa-caret-up');
                    btn.querySelector('.fa-caret-down').classList.remove('fa-caret-down');
                }
            } else {
                document.querySelector(btn.dataset.target).dataset.state = 'false';
                if( btn.querySelector('.fa-caret-up')) {
                    btn.querySelector('.fa-caret-up').classList.add('fa-caret-down');
                    btn.querySelector('.fa-caret-up').classList.remove('fa-caret-up');
                }
            }
        });
    }
});


const hamburguer = document.querySelector (".hamburguer")
const navBarMenu = document.querySelector (".navBar__responsive")

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navBarMenu.classList.toggle('active');
})

var site = document.querySelector ("#down");
var popUp = document.querySelector(".popUp__mobile");

site.addEventListener("click", function(){
    if(popUp.style.display === "flex") {
        popUp.style.display = "none";
    } else {
        popUp.style.display = "flex";
    }
});