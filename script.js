const dateClock = setInterval(function dateTime() {
    const today = new Date();
    let date = today.getDate();
    // let day = weekdays[today.getDay()];
    // let month = monthNames[today.getMonth()];
  

  }, 1000);
  
          setInterval(()=>{
            const time = document.querySelector(".time");
          let date = new Date();
          let hours = date.getHours()
          let minutes = date.getMinutes()
          let seconds = date.getSeconds()
          let milliseconds = date.getMilliseconds();
          let day_night = 'AM';
          if (hours > 12){
              day_night = 'PM'
              hours = hours - 12;
          }
          if (minutes < 10){
              minutes = '0' + minutes;
          }
          if (hours < 10){
              hours = '0' + hours;
          }
          if (seconds < 10){
              seconds = '0' + seconds;
          }
          if (milliseconds < 10){
              seconds = '0' + milliseconds;
          }
         
          time.textContent = 'Current UTC Time:' + hours + ':' + minutes + ':' + seconds +':'+ milliseconds + ' ' + day_night;
          })
  
  
const dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];

 const today = new Date();
 const currentDay = dayOfWeek[today.getUTCDay()];
 document.querySelector('[data-testid="currentDayOfTheWeek"').textContent = currentDay;