function calculate(){
const day = document.querySelector(".day").value;
const month = document.querySelector(".month").value;
const year = document.querySelector(".year").value;

const yea = document.querySelector(".yea")
const mon = document.querySelector(".mon")
const dy = document.querySelector(".dy")

const date = new Date
const dob = Date(year, month, day)


// year calculation
const y1 = date.getFullYear()
const yearResult = y1-year
yea.innerHTML = yearResult


// month calculation
const m1 = date.getMonth()
const monthresult = month-m1
mon.innerHTML = monthresult

// month calculation
const d1 = date.getDay()
const dayresult = day-d1
dy.innerHTML = dayresult

}