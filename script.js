//cuurent of the day of the week
let dayRef = document.getElementById("currentDayOfTheWeek");
let DaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ];
let dateToday = new Date();
let currentDayOfTheWeek = dateToday.getDay();
dayRef.innerHTML = `${DaysOfWeek[currentDayOfTheWeek]}`;


//UTC time in milliseconds
let currentUTCTimeSet = document.querySelector("#currentUTCTime")
  const currentUTCTime = () => {
    let clock = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', millisecond: 'numeric', hour12: true })

    currentUTCTimeSet.innerHTML = clock
  }
  setInterval(currentUTCTime, 1000)