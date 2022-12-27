console.log("hello")

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
  
setInterval(setDate, 1000);

setDate();


// Dark mode


// Dark mode
// document.getElementById('dark-mode-btn').addEventListener('click', function() {
//     // Toggle the 'dark-mode' class on the body element
//     document.body.classList.toggle('dark-mode');
  
//     // Toggle the 'dark-mode' class on the .container element
//     document.querySelector('.hour-hand').classList.toggle('dark-mode');
//     document.querySelector('.hand').classList.toggle('dark-mode');
//     document.querySelector('.second-hand').classList.toggle('dark-mode');
//     document.querySelector('.min-hand').classList.toggle('dark-mode');
//     document.querySelector('.inner-clock-face').classList.toggle('dark-mode');
//     document.querySelector('.outer-clock-face').classList.toggle('dark-mode');
//     document.querySelectorAll('.marking').forEach(function(marking) {
//       marking.classList.toggle('dark-mode');
//     });
//     document.querySelector('.dark-mode-btn').classList.toggle('dark-mode');
//   });
  

document.getElementById('dark-mode-btn').addEventListener('click', function() {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');
    
    // Toggle the 'dark-mode' class on the .container element
    document.querySelector('.hour-hand').classList.toggle('dark-mode');
    document.querySelector('.hand').classList.toggle('dark-mode');
    document.querySelector('.second-hand').classList.toggle('dark-mode');
    document.querySelector('.min-hand').classList.toggle('dark-mode');
    document.querySelector('.inner-clock-face').classList.toggle('dark-mode');
    document.querySelector('.outer-clock-face').classList.toggle('dark-mode');
    document.querySelectorAll('.marking').forEach(el => el.classList.toggle('dark-mode'));
    document.querySelector('.dark-mode-btn').classList.toggle('dark-mode');
  });
  
  
  