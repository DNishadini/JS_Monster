//Example 01
/*let password = 8;
if (password === 8) {
  console.log("Welcome");
} else if (password <= 8) {
  console.log("Password is too short");
} else if (password >= 8) {
  console.log("Password is too long");
} else {
  console.log("Invalid password");
}*/

//Example 02
/*let fruit = "Banana";
switch (fruit) {
  case "Banana":
    console.log("Banana is good!");
    break;
  case "Orange":
    console.log("I am not a fan of oranges.");
    break;
  case "Apple":
    console.log("How you like them apples?");
    break;
  default:
    console.log("I have never heard of that fruit");
}*/

//Example 03
/*for (let i = 0; i < 1000; i++) {
  console.log(" I'm Dinushika.The number is " + i);
}*/

//Example 04
/*let i = 10;
while (i <= 100) {
  console.log("Dinushika", i);
  i++;
}*/

//Example 05
/*let i = 20;
do {
  console.log("Dinushika", i);
  i++;
} while (i <= 400);*/

//Example 06
/*const favSinger = ["Adele", "Taylor Swift", "Ed sheeran"];
console.log(favSinger[0]);

const favNumbers = [7, 3, 9, 27];
console.log(favNumbers);
const mixedArray = ["string", ["otherarray"], 123, true];
console.log(mixedArray[0]);
console.log(mixedArray[1][0]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);*/

//Example 07
/*const car = { type: "Fiat", model: "500", color: "white" };
console.log(typeof car);
console.log(car.type);
car.type = "Toyota";
car.wheels = 4;
console.log(car);*/

//Example 08
/*function myFunction(num1, num2) {
  return num1 * num2;
}

let res = myFunction(4, 3);
console.log(res);*/

//Example 09
function showCallFunc(fn) {
  const value = 10;
  fn(value);
}

showCallFunc(function (val) {
  console.log(val);
});
