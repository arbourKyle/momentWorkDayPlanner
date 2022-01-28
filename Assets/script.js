var calendarArr = $(["#9", "#10", "#11", "#12", "#13", "#14", "#15", "#16", "#17"]);
var greyedOut = [9, 10, 11, 12, 13, 14, 15, 16, 17]
// var selected = [];
var now = moment();
let smallest = Math.min.apply(null, greyedOut);
let largest = Math.max.apply(null, greyedOut);
console.log(smallest);
console.log(largest);


//This sets a fixed time of 9am
var start = moment().startOf('date').add(9, 'hours');
console.log(start);


//Header displaying todays date
$("#currentDay").text(now.format("ddd, MMMM Do"));


let whatTime;
switch (moment()) {
  case 0:
    whatTime > start;
    break;
  case 1:
    whatTime == moment();
    break;
  case 2:
    whatTime < largest;
    break;
    console.log(whatTime);
}




function myArrayMin(greyedOut) {
if(now > start) {
}
else {
  return
}
}















// for (let i=0; i<greyedOut.length; i++){
//   if(now > start){
//     selected.push[i];
//   }else{
//     $("#" + check).css("background-color", "grey");
//   }
// }
// for (let char in charCount){
//   if (charCount[char]==1){
//       return char;
//   }
// }
// return resultChar;