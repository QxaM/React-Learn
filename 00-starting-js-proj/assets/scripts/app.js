import ApiKey, { apiKey } from "./util.js";

console.log(apiKey);
console.log(ApiKey);

let userMessage = "Hello World!";

console.log(userMessage);
console.log(userMessage);

const data = "Hello World!";
//data = "New value"; not possible bc const cannot be reassinged

function greet() {
  console.log("Hello!");
}

greet();
greet();
greet();
greet();
greet();

function greet(userName, message = "Hello!") {
  console.log(userName);
  console.log(message);
}

greet("Max");
greet("Manuel", "Hello, whats up?");

function returnUser(username, message) {
  return "Hi, I am " + username + "." + message;
}

console.log(returnUser("Max", "Hello"));

// Objects and classes
const user = {
  name: "Max",
  age: 34,
  greet() {
    console.log("Hello!");
    console.log(this.name);
  },
};

console.log(user.name);
console.log(user.greet());

const { name: username, age } = user;
console.log(username);
console.log(age);

const extendedUser = {
  isAdmin: true,
  ...user,
};
console.log(extendedUser);

// Arrays
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

const editedHobbies = hobbies.map((item) => item + "!");
console.log(editedHobbies);

const objectHobbies = hobbies.map((item) => ({ text: item }));
console.log(objectHobbies);

const usernameData = ["Max", "Schwarzmuller"];
const [firstName, lastName] = usernameData;
console.log(firstName);
console.log(lastName);

const newHobbies = ["Working"];
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

for (let hobby of hobbies) {
  console.log(hobby);
}

// Function as value
setTimeout(() => console.log("Time out!"), 1000);
