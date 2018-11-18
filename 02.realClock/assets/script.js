const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

function setTime(){
    const now = new Date();
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const secondDegree = ((seconds / 60) * 360) + 90;
    const minuteDegree = ((minutes / 60 ) * 360) + 90;
    const hourDegree = ((hours / 12 ) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

}

 // create dots
    let gap = 0;
 for(let i = 1; i <= 12; i++){
    gap  = gap + 30;
     console.log(gap)
     
    const dots = document.createElement('span')
    dots.className = 'dot'
    dots.style.transform = `rotate(${gap}deg)`;
    document.querySelector('.clockCircle').appendChild(dots);
 }

setInterval(setTime, 1000);