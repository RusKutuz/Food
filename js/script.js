document.addEventListener('DOMContentLoaded', () => {

//Tabs___________________________________________

    const tabcontents = document.querySelectorAll('.tabcontent');
    function hideTabs () {
        tabcontents.forEach(tab => {
            tab.classList.add('hide');
        });
    }
   
    hideTabs();
    showTab(0);
    let i;
    function showTab (i) {
        tabcontents.forEach(tab => {
            tab.classList.remove('show');
        });
        tabcontents[i].classList.add('show', 'fade');
    }


    let tabArray = [];
    const tabNames = document.querySelectorAll('.tabheader__item');
   tabNames.forEach(name => {
    tabArray.push(name);
   });

   function removeActive () {
       tabNames.forEach(name => {
           name.classList.remove('tabheader__item_active');
       });
   }
   tabNames.forEach((name, i) => {
       name.addEventListener('click', (event) => {
        // i = tabArray.indexOf(event.target);
        showTab(i);
        removeActive();
        tabNames[i].classList.add('tabheader__item_active');
       });
   });


//Timer___________________________________________

const deadline = '2020-06-30 23:59';
const timerField = document.querySelector('.timer');
let days = document.querySelector('#days');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');

function timeRemained () {
    
    let time = new Date(deadline) - new Date();
    let days = Math.floor(time/1000/60/60/24);
    let hours = Math.floor((time/1000/60/60)%24);
    let minutes = Math.floor((time/1000/60)%60);
    let seconds = Math.floor((time/1000)%60);
    return {
        'time': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    };
}
showTime ();
function showTime () {
    
    let timer = timeRemained();
    if (timer.time >= 0) {
    days.innerHTML = addZero(timer.days);
    hours.innerHTML = addZero(timer.hours);
    minutes.innerHTML = addZero(timer.minutes);
    seconds.innerHTML = addZero(timer.seconds);
        
        
    } else {
        days.innerHTML = '00';
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
        clearInterval(interval);
       
    }
    
    
    
}

function addZero (i) {
    if (i>=0 && i<10) {
        return (`0${i}`);
    } else {
        return (i);
    }
}


let interval = setInterval(showTime, 1000);


//Modal___________________________________________

const modal = document.querySelector('.modal');
const btnConnect = document.querySelectorAll('[data-modal]');

btnConnect.forEach(btn => {
    btn.addEventListener('click', () => {
        showModal();
    });
});

function showModal () {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}



function hideModal () {
    document.body.style.overflow = '';
    modal.classList.remove('show');
    modal.classList.add('hide');
}
modal.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target == modal) {
        hideModal();
    }
     
});

document.addEventListener('keydown', (event) => {
    if (event.code == 'Escape' && modal.classList.contains('show')) {
        hideModal();
    }
});

const close = document.querySelector('[data-close]');
close.addEventListener('click', hideModal);


















});
