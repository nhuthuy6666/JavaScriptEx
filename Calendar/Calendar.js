const day = document.getElementById("day");
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekdays = ["Sunday", "Monday", "TuesDay", "Wednesday", "Thursday", "Friday", "Saturday"];

const allmonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

day.innerHTML = weekdays[today.getDay()];
date.innerHTML = today.getDate();
month.innerHTML = allmonths[today.getMonth()];
year.innerHTML = today.getFullYear();