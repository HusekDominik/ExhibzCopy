 let launchDate = new Date('dec 8, 2023 00:00:00').getTime();
       
 const daySpan = document.querySelector(".days");
 const hourSpan = document.querySelector(".hours");
 const minuteSpan = document.querySelector(".minutes");
 const secondSpan = document.querySelector(".seconds");
 console.log(launchDate);


let intvl = setInterval(() => {
    const now = new Date().getTime(); // milisekundy;

    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
    const seconds = ((distance % (1000 * 60) / 1000)).toFixed(0);

    daySpan.innerHTML = days;
    hourSpan.innerHTML = hours;
    minuteSpan.innerHTML = minutes;
    secondSpan.innerHTML = seconds;
 }, 1000);


 console.log(new Date().getTime());

 