// Create an array with 5 numbers.
//     Ask the user for the length of the array you want to print.
//     Alert the user of the array from 0 to their input.

var numbers = [1,2,3,4,5];
var ask = parseInt(prompt("enter the length of the array you want to print"));
var x=0;
 do
 {
     alert(numbers[x]);
     x++
 }
 while (x<ask);