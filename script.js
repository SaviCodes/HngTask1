const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]


const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("demo").innerHTML = day;


function addZero(x,n) {
    while (x.toString().length < n) {
        x = "0" + x;
    }
    return x;
}

function updateClock() {
const t = new Date();
let h = addZero(t.getHours(),2);
let m = addZero(t.getMinutes(),2);
let s = addZero(t.getSeconds(),2);
let ms = addZero(t.getMilliseconds(),3);

let time = h + ":" + m + ":" + s + ":" + ms;
document.getElementById("dd").innerHTML = time;

setTimeout (updateClock,1);
}

updateClock();