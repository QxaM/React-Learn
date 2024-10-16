// Primitives

let age: number = 24;
age = 12.5;

//age = "12"; - error

let username: string = "MaxQ";
let isInstructor: boolean = true;

// Complex types - array and object

let hobbies: string[];
hobbies = ["Sporsts", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true,
// }; - error

let people: {
  name: string;
  age: number;
}[];

// Type inference - should be embraced when possible

let course = "React - The Complete Guide";
//course = 12341; - error due to type inference

// Union Types
let courseData: string | number = "React - The Complete Guide";
courseData = 123451;

// Type aliases
type Person = {
  name: string;
  age: number;
};

const person2: Person = {
  name: "Piotr",
  age: 3,
};

// Functions & Types

const add = (a: number, b: number) /*: number*/ => {
  return a + b;
};

const printValue = (value: any) => {
  console.log(value);
};

// Generics

const insertAtBegining = <T>(array: T[], value: T) => {
  return [value, ...array];
};

const demoArray = [1, 2, 3];
const updatedArray = insertAtBegining(demoArray, -1);
console.log(updatedArray);
