

const containerOfCircles = document.querySelector(".containerOfCircles");
let firstSlideSipka = document.querySelector(".firstSlide");
let secondSlideSipka = document.querySelector(".secondSlide");
let thirdSlideSipka = document.querySelector(".thirdSlide");
const sliders = document.querySelectorAll(".sliders");
const mainFirstSlider = document.querySelector(".mainFirstSlider");
const mainSecondSlider = document.querySelector(".mainSecondSlider");
const mainThirdSlider = document.querySelector(".mainThirdSlider");
const item1 = document.querySelector(".lmaoi1");
const buttonImportant = document.querySelector(".button");
const html = document.querySelector("html");
const section04 = document.querySelector(".section04");
const divWithImage = document.querySelector(".divWithImage");
const locket = document.querySelector(".locket");
const imagePortfolio = document.querySelector(".imagePortfolio");
const section5Item1 = document.querySelector(".section5Item1");
const datesDiv = document.querySelector(".datesDiv");
let value;
let number = 0;

let slideAuto = true;
let slide;
const interval = 5000;



let timedSlideShow = () => 
{
  const current = document.querySelector(".current");
  const slideshowActive = document.querySelector(".slideActive");
  slideshowActive.classList.remove("slideActive");
  current.classList.remove("current");

  if(current.nextElementSibling)
  {
    current.nextElementSibling.classList.add("current");
    slideshowActive.nextElementSibling.classList.add("slideActive");
  }
  else
  {
    sliders[0].classList.add("current");
    firstSlideSipka.classList.add("slideActive");
  }
}
const setIntervalo = setInterval(timedSlideShow, 6000);


let functionOfItemAnimation = (e) => {
  if (e.target.classList.contains("item")) {

      if(e.target.querySelector("i").style.animation){
        e.target.querySelector("i").style.animation =  "";
      }
      else{
        e.target.querySelector("i").style.animation =  "animaceProItemy 1000ms ease forwards ";
      }
  }
};
containerOfCircles.addEventListener("mouseover", functionOfItemAnimation);



const mapped = document.querySelectorAll(".mapped");
let open = (e) => 
{
  if(e.target.getAttribute("data-id")){
    mapped[e.target.getAttribute("data-id")].classList.add("displayGrid");
    html.style.overflowY = "hidden";
  }
  
}
imagePortfolio.addEventListener("click", open);


let close = (e) => {

  if(e.target.getAttribute("data-id")){
    console.log(e.target);
   e.target.parentElement.parentElement.classList.remove("displayGrid");
    html.style.overflowY = "";
  }
  else if(e.target.parentElement.getAttribute("data-id")){
    console.log(e.target);
    e.target.parentElement.parentElement.parentElement.classList.remove("displayGrid");
  }
} 

locket.addEventListener("click", close);


datesDiv.addEventListener("click", function(e){
  const neededClass = document.querySelector(".classOfOpacityAZindex");
  const holders = document.querySelectorAll(".holders");
  const activatedDivDay = document.querySelector(".activatedDivDay");

  let i;
  
  if(e.target.className.includes("allOfThemDivs")){
    activatedDivDay.classList.remove("activatedDivDay");
    e.target.classList.add("activatedDivDay");
    neededClass.classList.remove("classOfOpacityAZindex");
    for(i = 0; i < holders.length; i++){
      holders[e.target.getAttribute("data-idle")].classList.add("classOfOpacityAZindex");

    }
  }
  else if(!e.target.className.includes("allOfThemDivs") && e.target.parentElement.className.includes("allOfThemDivs")){
    activatedDivDay.classList.remove("activatedDivDay");
    e.target.parentElement.classList.add("activatedDivDay");
    neededClass.classList.remove("classOfOpacityAZindex");
    for(i = 0; i < holders.length; i++){
      holders[e.target.parentElement.getAttribute("data-idle")].classList.add("classOfOpacityAZindex");

    }
  }
})

function reverseString(input)
{ 
    return console.log(input.split("").reverse().join(""));
}

reverseString("dřevo");

const shape = {
  radius: 10,
  dimeter(){
    return this.radius * 2;
  },
  perimeter: () =>{
    return this.radius * 2;
  }
}
console.log(shape.dimeter(), shape.perimeter());