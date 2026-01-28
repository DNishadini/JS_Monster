// 1. Create a person constructor which has parameters of (name, age, gender)
// 2. Access parameter values to the call object.
// 3. Create a method name (info), which will just print the info.
// 4. Create a few instances
// 5. Access each property

// constructor function
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.info = function () {
    console.log(`My name is ${this.name} and I'm ${this.age} years old`);
  };
}

// creating objects
const p1 = new Person("Janitha", 22, "male");
const p2 = new Person("Dinu", 22, "female");

// accessing properties

console.log(p1.name);
console.log(p2.name);
p1.info();

// *************** EXERCISE 2
// In this exercise, you will create a constructor function called Car that represents a car with specific properties such as make, model, year, and color. Additionally, you will define two methods, start and stop, to simulate starting and stopping the car.

// -> Define the Car constructor function that takes four parameters: make, model, year, and color.
// -> Inside the constructor, use this to assign the parameters to the corresponding properties of the object being created.
// -> Define a method called start as a property of the object. The start method should return a string message like "Starting the Toyota Camry..." where "Toyota" is the make and "Camry" is the model of the car.
// -> Define another method called stop as a property of the object. The stop method should return a string message like "Stopping the Honda CR-V." where "Honda" is the make and "CR-V" is the model of the car.
// -> Create two car instances (car1 and car2) using the Car constructor with different properties.
// -> Test the methods by calling car1.start() and car2.stop(). Observe the output and make sure the messages display the correct make and model of the cars.

function Car(make, model, car, year) {
  this.make = make;
  this.model = model;
  this.car = car;
  this.year = year;
  this.start = function () {
    return `Starting the ${this.make} ${this.mode}`;
  };
  this.stop = function () {
    return `Stopping the ${this.make} ${this.mode}`;
  };
}

const car1 = new Car("Toyota", "Camry", 2020, "Silver");
const car2 = new Car("Honda", "CR-v", 2019, "Blue");
console.log(car1.start());
console.log(car1.stop());
