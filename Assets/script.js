
//This is now
let now = moment();
console.log(now);

//This formats now into a number that can be compared
let thisHour = moment().format("HH");

//This is an hour ago
let lessByHour = moment().subtract(1, 'hour');
console.log(lessByHour);

//This sets a fixed time of 9am
var start = moment().startOf('date').add(9, 'hours');
console.log(start);

//Header displaying todays date
$("#currentDay").text(now.format("ddd, MMMM Do"));



