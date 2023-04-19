setInterval (currentTime, 1000);


let hr = document.getElementById('hr');
let mn = document.getElementById('mn');
let sc = document.getElementById('sc');

function currentTime() {
const d = new Date();
const ss = d.getSeconds() / 60;
const mm = (ss + d.getMinutes() ) / 60;
const hh = (mm + d.getHours()) / 12;

setRotation(sc, ss);
setRotation(mn, mm);
setRotation(hr, hh);

}


function setRotation ( element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
} /*    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`; */
currentTime();

/*  setting the date, month and year*/
const mon = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const week =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var t = new Date();
let date = t.getDate();
let day = week[t.getDay()];
let month = mon[t.getMonth()];
let year = t.getFullYear();
document.getElementById('todaysDate').innerHTML= day + ", " + date + ' ' + month + ' ' + year;

// digital clock
setInterval(setTime, 1000);

function setTime () {
    let di = new Date();
     let dhr = di.getHours();
     let dmin = di.getMinutes();
     let dsec = di.getSeconds (); 
     let session ='AM';

     if (dhr == 0) {
        dhr = 12;
        session = 'AM'
    }
    if ( dhr > 12) {
        dhr = dhr - 12;
        session = 'PM';
    }
    
    dhr = (dhr < 10) ? '0' + dhr : dhr;
    dmin = (dmin < 10) ? '0' + dmin : dmin;
    dsec = (dsec < 10) ? '0' + dsec : dsec;
    
    let currentDigitalTime = dhr + ':' + dmin + ':' + dsec + ' '+ session;

    
document.getElementById('input').innerHTML= currentDigitalTime;

}
