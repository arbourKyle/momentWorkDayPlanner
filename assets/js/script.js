
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



//Compares current time to id number for each text field
$(".time-div").each(function () {
  var timeDiv = $(this).attr("id").split("-")[1];
  
  if (thisHour == timeDiv) {
    $(this).addClass("present");
  }
  else if (thisHour < timeDiv) {
    $(this).removeClass("present");
    $(this).addClass("future");
  }
  else if (thisHour > timeDiv) {
    $(this).removeClass("future");
    $(this).addClass("past");
  }
});


//Setting local storage on click
$(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".time-block").val();
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time, value);
});

//Reset button
$("#reset").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });