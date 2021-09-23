let navbar = document.querySelector(".navbar");
const sekce = document.querySelector(".sekce");
const section02 = document.querySelector(".section02");
const section3 = document.querySelector(".section03");
const section4 = document.querySelector(".section04");


let navbarScrollFunc = () =>
{
    const windowsOffset = window.pageYOffset;
    let sekce = document.querySelector(".sekce");

    if(windowsOffset >= (sekce.offsetTop + sekce.offsetHeight) / 2.8){
        navbar.classList.add("transformNav");
        navbar.classList.add("activeNav");
       
       
    }  
    else{
        navbar.classList.remove("transformNav");
        navbar.classList.remove("activeNav");
    }
}

 let containerOfCirclesFunc = () => 
{

    const allItems = document.querySelectorAll(".containerOfCircles div");
    let pageYOffset = window.pageYOffset;
    let pageYHeight = window.innerHeight;

    allItems.forEach((individual, index) => 
    {
        if(pageYHeight + pageYOffset >=  (section02.offsetTop +  individual.offsetTop + individual.offsetHeight) - individual.offsetHeight / 2)
        {
            individual.style.animation = `animationOfAppearing 1000ms ease-in-out forwards ${index /12}s`;
            console.log(individual.offsetTop);
        }
    })
   
}

let section03Fucn = () =>
 {
     const allItems = document.querySelectorAll(".sec3Item");
    

     allItems.forEach((individual, index) => 
     {
        if(window.pageYOffset + window.innerHeight >= section3.offsetTop + individual.offsetTop + individual.offsetHeight - (individual.offsetHeight / 2))
        {
            individual.style.animation = `section5TextAnimation 800ms ease-in-out forwards ${index / 7}s`;
            
        }
     })
     
 }



function scrollImages(){
    const imageItems = document.querySelectorAll(".imageItems");
    const imagePortfolio = document.querySelector(".imagePortfolio");

    console.log(window.pageYOffset + window.innerHeight);

    
    imageItems.forEach((individual, index) => 
     {
         console.log(individual.offsetTop + individual.offsetHeight / 2, individual.parentElement.offsetTop, individual.parentElement.parentElement.offsetTop);
         if(window.innerHeight + window.pageYOffset >=  individual.offsetTop  + individual.parentElement.parentElement.offsetTop + individual.offsetHeight / 2.2 ){
            individual.style.animation = ` section04Items 700ms ease-in-out forwards ${index / 12}s`;  
            console.log(individual.offsetTop  + individual.parentElement.offsetTop + individual.parentElement.parentElement.offsetTop + individual.offsetHeight / 2.2 );
         } 
     })
}

let scrollTextFunc = () => 
{
    const allTextItems = document.querySelectorAll(".textOnScroll");
    const section5Item2 = document.querySelector(".section5Item2");

    allTextItems.forEach((individual, index) => 
    {
        if(window.pageYOffset + window.innerHeight >= individual.offsetTop + individual.offsetHeight - (individual.offsetHeight / 2) ){
            individual.style.animation = `section5TextAnimation 800ms ease-out forwards ${index / 5}s`;
        }
    })
}

let title = () =>{
    const titles = document.querySelectorAll(".title");

    titles.forEach((individual, index) => {

        if(window.pageYOffset + window.innerHeight >=  individual.offsetTop + individual.offsetHeight - (individual.offsetHeight / 2) && individual.offsetTop >  sekce.offsetHeight ){

            individual.style.animation = `animatedFrank 1000ms ease-in-out forwards `;
        }
        else if(window.pageYOffset + window.innerHeight >=  individual.offsetTop + individual.offsetHeight + individual.parentElement.offsetTop - (individual.offsetHeight / 2) && individual.offsetTop + individual.parentElement.offsetTop > sekce.offsetHeight ){
            individual.style.animation = `animatedFrank 1000ms ease-in-out forwards `;
        }
        else if(window.pageYOffset + window.innerHeight >=  individual.offsetTop + individual.offsetHeight + individual.parentElement.offsetTop + individual.parentElement.parentElement.offsetTop  - (individual.offsetHeight / 2) && individual.offsetTop + individual.parentElement.offsetTop +  individual.parentElement.parentElement.offsetTop> sekce.offsetHeight){
            individual.style.animation = `animatedFrank 1000ms ease-in-out forwards `;
        }
       
       
    })
}
let eventSchedulesFunc = () => {

    let allItems = document.querySelectorAll(".animatedFunction");
    let section06 = document.querySelector(".section06");
    
    allItems.forEach(individual => {

        if(window.pageYOffset + window.innerHeight >= section06.offsetTop + 200){
            individual.style.animation = "animatedFrank 1200ms ease-in-out forwards";
        }
    })
   
}

let containerOfItemsSection7Func = () => {

    let allItems  =  document.querySelectorAll(".allAlong");

    allItems.forEach((individual, index) => {

        if(window.pageYOffset + window.innerHeight >=  individual.offsetTop + individual.parentElement.parentElement.parentElement.offsetTop  + individual.offsetHeight / 4.5){
            individual.style.animation = `section07Items 800ms ease-in-out forwards ${index/ 7}s`;

           
        }
    })
}
const section08func = () => {

    const containersection08 = document.querySelector(".containersection08");

    if(window.pageYOffset + window.innerHeight >= containersection08.offsetTop + containersection08.offsetHeight / 2.8){
        containersection08.style.animation = "animationOfAppearing 800ms ease-in-out forwards";
    }
} 
const lastTitleFunc = () => {
    const lastTile = document.querySelector(".anotherDiv");
    const lastTitle = document.querySelector(".lastTitle");
    const flexDivA  = document.querySelector(".flexDivAAnimated");

    if(window.pageYOffset + window.innerHeight >= lastTile.offsetTop + lastTile.parentElement.offsetTop  + lastTile.offsetHeight / 2){
        lastTitle.style.animation = "zeshora 800ms ease-in-out forwards";
        flexDivA.style.animation ="zesdola 800ms ease-in-out forwards";
    }   
}
const dragonFunc = () => {

    let item = document.querySelector(".dragon");
    if(window.innerWidth >= 1130){
        if(window.innerHeight + window.pageYOffset >= item.offsetTop + item.parentElement.offsetTop + item.offsetHeight / 2){
            item.style.animation = "drogon 1200ms ease-out forwards";
        }
    }
    
}
let containerOfScrollFunctions = debounce(function(){
    section03Fucn();
    scrollImages();
    containerOfCirclesFunc();
    navbarScrollFunc();
    scrollTextFunc();
    title();
    eventSchedulesFunc(); 
    containerOfItemsSection7Func();
    section08func();
    lastTitleFunc();
    dragonFunc();
}, 20)


window.addEventListener("scroll", containerOfScrollFunctions);



function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};



const fn = (n) =>  ((n > 1) ? n * fn(n-1) : n);

