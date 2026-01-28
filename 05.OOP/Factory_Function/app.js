// create a factory function that generates different types of vehicles. Each vehicle object should have properties like type, brand, model, and year.

// Create a factory function for vehicles

// Create two different vehicles using the factory function

// Test the vehicles
// { type: 'Motorcycle', brand: 'Honda', model: 'CBR500R', year: 2019 }

function createVehicle(type, brand, model, year) {
  return { type, brand, model, year };
}

const vehicle1 = createVehicle("Car", "Toyota", "Camry", 2020);
const vehicle2 = createVehicle("Motorcycle", "Honda", "idk", 2019);
console.log(vehicle1);
