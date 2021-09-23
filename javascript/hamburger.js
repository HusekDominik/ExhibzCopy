const ul = document.querySelector(".mainUl");
const hamburger = document.querySelector(".hamburger");
const loader = document.querySelector(".loader");
const firstLine = document.querySelector(".firstLine");
const secondLine = document.querySelector(".secondLine");
const thirdLine = document.querySelector(".thirdLine");
const mainLi = document.querySelectorAll(".mainLi");

let hamburgerFunc = () =>
{
    ul.classList.toggle("activeUlTransition");
    ul.classList.toggle("fixed");
    console.log("lol");

    mainLi.forEach((individual, index) => 
    {
        if(individual.style.animation){
            individual.style.animation = ``;
        }
        else{
            individual.style.animation = `navbarItems 200ms ease forwards ${index / 4 + 0.2}s `;
        }
        
    })

}
let closeStartHamburger = () => {
    hamburger.classList.toggle("activated");
}
hamburger.addEventListener("click", function(){
    hamburgerFunc();
    closeStartHamburger();
})  

let functionLoader = () => 
{
    setTimeout(() => 
    {
        loader.style.transform  = "translateX(100%)";
    }, 3000)
}
window.addEventListener("load", functionLoader);

const obj = {"0" : 1, 0 : 2, 1: 4}

const result = obj["1"] + obj[0];

console.log(obj);





