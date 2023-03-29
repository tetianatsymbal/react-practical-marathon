//Task1

class Movie {
  constructor(name, category, startShow) {
    this.name = name;
    this.category = category;
    this.startShow = startShow;
  }
  watchMovie() {
    return `I watch the movie ${this.name}!`;
  }
}
const movie1 = new Movie("Titanic", "drama", 1997);
const movie2 = new Movie("Troya", "historical", 2004);
// console.log(movie1.watchMovie());
// console.log(movie2.startShow);

//Task 2
class Student {
  constructor(fullName, direction) {
    this._fullName = fullName;
    this._direction = direction;
  }

  static studentBuilder() {
    return new Student("Ihor Kohut", "qc");
  }

  showFullName() {
    return this._fullName;
  }

  nameIncludes(data) {
    return this._fullName.includes(data) ? true : false;
  }
  get direction() {
    return this._direction;
  }
  set direction(directionValue) {
    this._direction = directionValue;
  }
}

const stud1 = new Student("Ivan Petrenko", "web");
const stud2 = new Student("Sergiy Koval", "python");
const stud3 = Student.studentBuilder();

// console.log(stud1.nameIncludes("Ivan"));
// console.log(stud3.nameIncludes("Kohut"));

//Task3
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

class Distributor {
  constructor() {
    this.products = {};
  }

  addProduct(id, name) {
    //add a property to products with name equal to product id and value equal to product name
    this.products = {
      ...this.products,
      [id]: name,
    };
  }

  removeProduct(id) {
    //const removeProp = 'b';
    //const { [removeProp]: remove, ...rest } = data;
    //console.log(remove); // 2
    //remove a property from products with name equal to specified id

    const { [id]: remove, ...rest } = this.products;
    this.products = rest;
    // this.products = this.products.splice(this.products.indexOf([id]), 1);
  }
}

const localDistributor = new Distributor();

class MyProduct {
  constructor(name) {
    generate unique product id; define id and name fields
    this.id = Symbol(name);
    this.name = name;
  }

  distribute(distributor) {
    distributor.addProduct(this.id, this.name);
  }
}

// const product1 = new MyProduct("butter");
// product1.distribute(localDistributor);
// console.log(localDistributor.products);

// new MyProduct("bread").distribute(localDistributor);
// new MyProduct("bread").distribute(localDistributor);
// console.log(localDistributor.products);

// localDistributor.removeProduct(product1.id);
// console.log(localDistributor.products);

//
//
//
//
//


//Task 4
function getMin(arr) {
  return Math.min.apply(Math, arr);
}

//Task 5

const product = function () {
  return [].reduce.call(
    arguments,
    function (res, elem) {
      return res * elem;
    },
    this.product() //-------- how&&&
  );
};

const contextObj = {
  arg1: 10,
  arg2: 2,
  arg3: 3,
  product() {
    return this.arg1 * this.arg2 * this.arg3;
  },
};

const getProduct = function (num1, num2) {
  return product.bind(contextObj, num1, num2)();
};

// console.log(getProduct(4, 5));
// console.log(contextObj.product());

//
//
//
//
//
//

//TASK 6

class Plane {
  constructor(model, fuelSupply, fuelConsumption) {
    this.model = model;
    this.fuelSupply = fuelSupply;
    this.fuelConsumption = fuelConsumption;
  }
  static sortFlightRange(planesArray) {
    const rangeArr = planesArray
      .map((plane) => {
        return { model: plane.model, range: plane.calcFlightRange() };
      })
      .sort((a, b) => a.range - b.range);

    rangeArr.forEach((plane) => {
      console.log(`${plane.model}: ${plane.range}`);
    });
  }
  calcFlightRange() {
    return (this.fuelSupply / this.fuelConsumption) * 100;
  }
}

class TransportPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
    super(model, fuelSupply, fuelConsumption);
    this.cargo = cargo;
    this.addTank = addTank;
  }
  calcFlightRange() {
    return ((this.fuelSupply + this.addTank) / this.fuelConsumption) * 100;
  }
}
class PassengerPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, passengers, refueling) {
    super(model, fuelSupply, fuelConsumption);
    this.passengers = passengers;
    this.refueling = refueling;
  }
  calcFlightRange() {
    return ((this.fuelSupply + this.refueling) / this.fuelConsumption) * 100;
  }
}
class WarPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, missiles, aerodynamicsKoef) {
    super(model, fuelSupply, fuelConsumption);
    this.missiles = missiles;
    this.aerodynamicsKoef = aerodynamicsKoef;
  }
  calcFlightRange() {
    return (
      (this.fuelSupply / this.fuelConsumption) * 100 * this.aerodynamicsKoef
    );
  }
}

// console.log("Unsorted range of planes:");

// const plane1 = new TransportPlane("An-225 Mriya", 105000, 5000, 500, 300000);

// console.log("An-225 Mriya: ", plane1.calcFlightRange());

// const plane2 = new PassengerPlane("Boeing-747", 193000, 2500, 410, 90000);

// console.log("Boeing-747:", plane2.calcFlightRange());

// const plane3 = new WarPlane("F-22 Raptor", 8200, 320, 20, 1.2);

// console.log("F-22 Raptor:", plane3.calcFlightRange());

// console.log("Sorted range of planes:");

// const planesArray = [plane1, plane2, plane3];

// Plane.sortFlightRange(planesArray);

//
//
//
//
//
//

//TASK 7

const pizzaMenu = {
  SIZE_S: { param: "SIZE_S", price: 60, calorie: 300 },
  SIZE_M: { param: "SIZE_M", price: 90, calorie: 450 },
  SIZE_L: { param: "SIZE_L", price: 110, calorie: 600 },
  KIND_MEAT: { param: "KIND_MEAT", price: 55, calorie: 230 },
  KIND_FISH: { param: "KIND_FISH", price: 70, calorie: 150 },
  KIND_CHEESE: { param: "KIND_CHEESE", price: 50, calorie: 200 },
  KIND_VEGETARIAN: { param: "KIND_VEGETARIAN", price: 35, calorie: 50 },
  INGREDIENT_TOMATOES: { param: "INGREDIENT_TOMATOES", price: 15, calorie: 5 },
  INGREDIENT_PEPPER: { param: "INGREDIENT_PEPPER", price: 18, calorie: 5 },
  INGREDIENT_BACON: { param: "INGREDIENT_BACON", price: 25, calorie: 40 },
  INGREDIENT_OLIVES: { param: "INGREDIENT_OLIVES", price: 20, calorie: 0 },
};

class PizzaMaker {
  constructor(size, kind) {
    this.size = size;
    this.kind = kind;
    this.ingredients = [];
  }
  addIngredient(ingredient) {
    if (
      this.ingredients.some((el) => {
        return el.param == ingredient.param;
      })
    ) {
      console.log(`Such an ingredient already exists!`);
    } else {
      this.ingredients.push(ingredient);
      console.log(`${ingredient.param} has been added`);
    }
  }
  deleteIngredient(ingredient) {
    const index = this.ingredients.findIndex(
      (n) => n.param == ingredient.param
    );
    if (index !== -1) {
      this.ingredients.splice(index, 1);
    }
    console.log(`${ingredient.param} has been deleted`);
  }
  getIngredients() {
    return this.ingredients;
  }
  getSize() {
    return this.size.param;
  }
  getKind() {
    return this.kind.param;
  }
  calculatePrice() {
    let ingredientsCal = Array.from(this.ingredients).reduce(
      (sum, i) => sum + i.price,
      0
    );
    let totalSum = this.size.price + this.kind.price + ingredientsCal;
    return totalSum;
  }
  calculateCalories() {
    let ingredientsCal = Array.from(this.ingredients).reduce(
      (cal, i) => cal + i.calorie,
      0
    );
    let totalCal = this.size.calorie + this.kind.calorie + ingredientsCal;
    return totalCal;
  }
}

const pizza = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);

// console.log("Size:", pizza.getSize());

// console.log("Kind:", pizza.getKind());

// console.log("calculatePrice:", pizza.calculatePrice());

// console.log("calculateCalories:", pizza.calculateCalories());

// console.log("getIngredients:", pizza.getIngredients());

// pizza.addIngredient(pizzaMenu.INGREDIENT_TOMATOES);

// pizza.addIngredient(pizzaMenu.INGREDIENT_BACON);
// pizza.addIngredient(pizzaMenu.INGREDIENT_BACON);

// console.log("getIngredients:", pizza.getIngredients());

// pizza.deleteIngredient(pizzaMenu.INGREDIENT_TOMATOES);

// console.log("getIngredients:", pizza.getIngredients());

// console.log("calculatePrice:", pizza.calculatePrice());

// console.log("calculateCalories:", pizza.calculateCalories());

function Employee(fullName, position) {
  this.fullName = fullName;
  this.position = position;
}

Employee.prototype.getPosition = function () {
  return this.position;
};

function IT_specialist(fullName, position, salary) {
  Employee.call(this, fullName, position);

  this.salary = salary;
}

IT_specialist.prototype = Object.create(Employee.prototype);

const empl = new IT_specialist("Oleg", "prog", 900);
console.log(empl.fullName);
console.log(empl.salary);
console.log(empl.getPosition());

// class Employee {
//   constructor(fullName, position) {
//     this.fullName = fullName;
//     this.position = position;
//   }

//   getPosition() {
//     return this.position;
//   }
// }

// class IT_specialist extends Employee {
//   constructor(fullName, position, experience, salary) {
//     super(fullName, position);

//     this.experience = experience;

//     this.salary = salary;
//   }
// }

// const employee = new IT_specialist("oleg", "developer", 12, 2222);
// console.log(employee);
// console.log(employee.getPosition());
