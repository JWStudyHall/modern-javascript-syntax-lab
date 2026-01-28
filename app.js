// const { use } = require("react");

// ! Exercise 1:
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const numsTimesTwo = nums.map((num) => {
  return num * 2;
});
console.log(numsTimesTwo);

//all itteration need a callback funstion except forEach
// ! Exercise 2:

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];

const [firstIngredient, secondIngredient] = pizzaToppings;

console.log(firstIngredient);
console.log(secondIngredient);

// ! Exercise 3:

const car = {
  make: "Audi",
  model: "Q5",
};

const { make, model } = car;

console.log(make);
console.log(model);

// ! Exercise 4:

const morePizzaToppings = ["Cheese", "Sauce"];

const uncontroversialPizzaToppings = [...morePizzaToppings];

console.log(uncontroversialPizzaToppings);

// ! Exercise 5:
const anotherCar = {
  make: "Toyota",
  model: "RAV4",
};

const myCar = { ...anotherCar };

myCar.make = "Mazda";
myCar.model = "3";

console.log("another", anotherCar);
console.log("my", myCar);

// ! Exercise 6:

const propertyName = "username";

const userProfile = {
  [propertyName]: "Mike",
};
console.log(userProfile);

// ! Exercise 8:
// a. Create a function with two parameters, `noun` and `adjective`.
//
// b. Give `noun` a default value of "cat" and `adjective` a default value of
//    "orange".
//
// c. The function should log a sentence 'The cat is orange.' by default, but
//    should substitute the appropriate parameters when it is supplied with
//    arguments.
//
function aSentence(noun = "cat", adjective = "orange") {
  return `The ${noun} is ${adjective}`;
}
console.log(aSentence("banana", "yellow"));
// ! Exercise 9:
// a. Convert the following `if...else` statement into a ternary:
//
//    if (pizza === 'tasty') {
//      console.log('yum');
//    } else {
//      console.log('yuck');
//    }
//
// Starting code (don't modify this):

const pizza = "tasty";
let review = pizza === "tasty" ? "Yes" : "No";

console.log(review);

// ! Exercise 10:
// ! 10.1: Set language
// a. Construct a single line of code that assigns a default value using the
//    logical OR operator. This line should match the logic of the following
//    statement:
//
//    "lang is equal to localLangConfig or the default value of English."
//
// b. Create a variable called `lang`.
//
// c. Assign `lang` the value of localLangConfig or 'en' as a default if
//    `localLangConfig is falsy.
//
// d. Log the value of `lang` to the console.
//
// Your code here (localLangConfig is provided to get you started):

// Simulated language configuration (change this variable to test)

const localLangConfig = "es"; // Change to 'es', 'fr', etc., or leave it `null`.
const lang = localLangConfig || "en";

console.log(lang);

// ! 10.2: Set website theme


const savedUserTheme = "dark"; // Change to 'dark', etc., or leave it `null`.
const theme = savedUserTheme || "light";

console.log(theme);
// ! Exercise 11:


const adventurer = {
  name: "Alice",
};
let cat = adventurer.cat?.age;

console.log(cat);
