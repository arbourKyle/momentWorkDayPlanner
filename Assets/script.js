var greyedOut = [9, 10, 11, 12, 13, 14, 15, 16, 17, 19]

var selected = [];
var now = moment();
console.log(now);
let smallest = Math.min.apply(null, greyedOut);
let largest = Math.max.apply(null, greyedOut);
console.log(smallest);
console.log(largest);


//This sets a fixed time of 9am
var start = moment().startOf('date').add(9, 'hours');
console.log(start);

//Header displaying todays date
$("#currentDay").text(now.format("ddd, MMMM Do"));

//Highlighting past input cells
//if 10 > 9
if(10 > start) {
  $("#9").css("background-color", "grey");
}

//if 11 > 9
else if(11 > start) {
  $("#10").css("background-color", "grey");
}

//if 12 > 9
else if(12 > start) {
  $("#11").css("background-color", "grey");
}

//if 13 > 9
else if(13 > start) {
  $("#12").css("background-color", "grey");
}

//if 14 > 9
else if(14 > start) {
  $("#13").css("background-color", "grey");
}

//if 15 > 9
else if(15 > start) {
  $("#14").css("background-color", "grey");
}

//if 16 > 9
else if(16 > start) {
  $("#15").css("background-color", "grey");
}


else {
  $(".form-control").css("background-color", "grey");
}

//8 cases
//Highlighting current cell

if(greyedOut.includes(now)){
  [i].css("background-color", "red");
  selected.push[i];
}

console.log(selected);























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