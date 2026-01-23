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
/*function showCallFunc(fn) {
  const value = 10;
  fn(value);
}

showCallFunc(function (val) {
  console.log(val);
});
*/

//Example 10
/*const text = `The quick
brown fox
jumps over
the lazy dog.`;
console.log(text);

const firstName = "Dinushika";
const lastName = "Senarathne";
console.log(`${firstName} ${lastName}`);*/

/*setTimeout(() => {
  console.log("Hello");
  setTimeout(() => {
    console.log("Hey");
    setTimeout(() => {
      console.log("Namaste");
      setTimeout(() => {
        console.log("Hi");
        setTimeout(() => {
          console.log("Bonjour");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);*/

//Example 11(Enhanced Object Literals)
/*var a = 1;
var b = 2;
var c = 3;

var obj = {
  a: a,
  b: b,
  c: c,
};
console.log(obj);

const a = 1;
const b = 2;
const c = 3;

var obj = {
  a,
  b,
  c,
};
console.log(obj);*/

//Example 12 (Enhanced Object Literals)

/*var lib = {
  sum: function (x, y) {
    return x + y;
  },
  mult: function (x, y) {
    return x * y;
  },
};
console.log(lib.sum(2, 3));
console.log(lib.mult(2, 3));

const lib = {
  sum: (x, y) => x + y,

  mult: (x, y) => x * y,
};
console.log(lib.sum(2, 3));
console.log(lib.mult(2, 3));*/

//Example 13 (Enhanced Object Literals)
/*function getPersion(name, age, height) {
  return {
    name: name,
    age: age,
    height: height,
  };
}
console.log(getPersion("Dinushika", 22, 5.7));

function getPersion(name, age, height) {
  return {
    name,
    age,
    height,
  };
}
console.log(getPersion("Dinushika", 22, 5.7));*/

//Example 14 (Default Parameters)
/*function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5));
console.log(multiply(5, 2));*/

//Example 15
/*let arr1 = [1, 2, 3];
let arr2 = [4, 5];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const user={name:"Dinushika",age:22};
const userClone={...user,address:"Sri Lanka"};
console.log(userClone);*/

//Example 16 (Rest Parameters )

/*function variadic(...args) {
  console.log(args);
}

variadic("Hello", 1, true, [1, 2, 3]);*/

//Example 17 (Array Destructuring)
/*const colors = ["red", "green", "blue", "yellow", "orange"];
const [color1, color2, color3] = colors;
console.log(color1);
console.log(color2);
console.log(color3);
*/

//Example 18 (Object Destructuring)
/*const person = {
  name: "Dinushika",
  age: 22,
  country: "Sri Lanka",
  gender: "Female",
};

const { name, age, country } = person;
console.log(name);
console.log(age);
console.log(country);*/

//Example 19
/*const person = {
  name: "Dinushika",
  age: 22,
  country: "Sri Lanka",
  gender: "Female",
};

const {
  name: personName,
  age: personAge,
  country: personCountry,
  gender: personGender,
} = person;
console.log(personName);
console.log(personAge);
console.log(personCountry);
console.log(personGender);*/

//Ternary Operator
/*const age = 25;
const isAdult = age >= 18 ? "Yes, is an adult" : "No, is not an adult";
console.log(isAdult);*/

//Example 20
/*const haveMoney = true;
const canBuy = haveMoney ? "Can buy the item" : "Cannot buy the item";
console.log(canBuy);*/

//Example 21(for...in loop)

/*const object = { a: 1, b: 2, c: 3 };
for (key in object) {
  console.log(key, object[key]);
  console.log(`${key}: ${object[key]}`);
}*/

//Example 22(for...of loop)
/*const array1 = ["a", "b", "c"];
for (let letter of array1) {
  console.log(letter);
}*/

//Example 23 (forEach method)
/*let array = [1, 2, 3, 4, 5];
let sum = 0;

function adder(num) {
  sum += num;
}

array.forEach(adder);
console.log(sum);*/

/*const numbers = [65, 44, 12, 4];

function myFunction(num) {
  return num * 10;
}

let newArray = numbers.map(myFunction);

console.log(newArray);*/

//Example 24 (Filter method)
/*const ages = [32, 33, 16, 40];

const res = ages.filter((a) => a >= 18);
console.log(res);*/

//Example 25
/*const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

function checkLength(word) {
  return word.length > 6;
}
const longWords = words.filter(checkLength);
console.log(longWords);*/

//Example 26 (find method)

/*const ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age > 18;
}

const res = ages.find(checkAdult);
console.log(res);*/

//Example 27
/*let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iphone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

let product;
for (let i = 0; i < products.length; i++) {
  if (products[i].category === "Books") {
    product = products[i];
    break;
  }
}
console.log(product);

//Using find method
const prod = products.find((p) => p.category === "Books");
console.log(prod);
*/

//Example 28 (Refactor->use every and some hepler methods)

/*let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iphone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

let allProductsAreBooks = true;
let someProductsAreBooks = false;

for (let i = 0; i < products.length; i++) {
  if (products[i].category !== "Books") {
    allProductsAreBooks = false;
  } else {
    someProductsAreBooks = true;
  }
}
console.log(allProductsAreBooks);
console.log(someProductsAreBooks);

//Refactor using every and some helper methods
const allBooks = products.every((p) => p.category === "Books");
console.log(allBooks);

const someBooks = products.some((p) => p.category === "Books");
console.log(someBooks);*/

//Example 29 (reduce method)
/*const numbers = [1, 2, 3, 4, 5];

function calculateProduct(arr) {
  return (product = arr.reduce((p, c) => p * c, 1));
}
const res = calculateProduct(numbers);
console.log(res);
*/

//Example 30 (Map data structure)

/*const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

const ext = map.get("a");
console.log(ext);
console.log(map.size);
map.delete("b");
console.log(map.size);*/

//Example 31 (Set data structure)
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("a");
console.log(letters); //duplicate values are ignored
