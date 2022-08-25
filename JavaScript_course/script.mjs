// "use strict";

const objA = {
  name: "igor",
  sName: "DS",
};

const copyA = Object.assign({}, objA);
const copyA2 = { ...objA };
const copyA3 = JSON.parse(JSON.stringify(objA));

copyA.age = 21;
objA.edu = "SGU";

// console.log(objA, copyA);

delete objA.edu;

// console.log(objA, copyA);

const posts = 21;
const assigned = 25;

const objEqual = {
  posts,
  assigned,
  myGreeting() {
    return "hello hello hello";
  },
};

// console.log(objEqual, objEqual.myGreeting());

const jsonString = JSON.stringify(objEqual);

// console.log(jsonString);

function printMyName() {
  a = true;
  console.log(a);
}

// setTimeout(printMyName, 2000);

// printMyName();

// console.log(1 === 2);

const button = {
  width: 500,
  height: 100,
};

const buttonUpgrade = {
  ...button,
  color: "black",
};

// console.log(buttonUpgrade);

function multByFactor(val, multiplier = 1) {
  return val * multiplier;
}

const mbfArrpw = (val, multiplier = 1) => {
  return val * multiplier;
};

// console.log(mbfArrpw(3, 5));

// console.log((multiplier = 3) => {
//   return 4 * multiplier;
// });

const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt,
});

const firstPost = {
  id: 1,
  author: "Ds",
};

// console.table(newPost(firstPost));

const newPostYawniy = (post, addedAt = Date()) => {
  return {
    ...post,
    addedAt,
  };
};

// console.table(newPostYawniy(firstPost));

const fnWithError = () => {
  throw new Error("some error");
};

// fnWithError();
// console.log("continue...");

try {
  // fnWithError();
} catch (error) {
  console.log(`ошибочка ${error.message}`);
}
// console.log("continue...");

const myArray = [12, 21, 32];
// console.table(myArray);
const myArray2 = myArray.map((el) => el);
const [elem1, elem2] = myArray2;
// console.log(elem1, elem2);

// console.table(myArray2);

myArray.forEach((el, index) => (myArray[index] = myArray[index] + 228));
// console.table(myArray);

// for (const key in myArray) {
//   console.table(myArray[key]);
// }

const userProfile = {
  name: "Igor",
  age: 21,
  edu: "SGU",
};

const { name, age } = userProfile;
const { edu } = userProfile;
// console.log(name, age, edu);

const userAgeInfo = ({ name, age }) => {
  return `User ${name} is ${age} y.o!`;
};

// console.log(userAgeInfo(userProfile));

const sumPositiveNumbers = (a, b) => {
  if (typeof a != "number" || typeof b != "number") {
    return "One of the argument is not a number";
  }
  if (a <= 0 || b <= 0) {
    return "One of the argument is not a positive number";
  }
  return a + b;
};

// console.log(sumPositiveNumbers("5", 1));

// name === "Igor" ? console.log("it is DS!") : console.log("who is it...");

// for (const key in userProfile) {
//   console.log(`${key}: ${userProfile[key]}`);
// }

// Object.keys(userProfile).forEach((key) => {
//   console.log(`${key}: ${userProfile[key]}`);
// });

// Object.values(userProfile).forEach((key) => {
//   console.log(`${key}: ${key}`);
// });

// for (const elem of "string") {
//   console.log(elem);
// }

export { sumPositiveNumbers, userAgeInfo, userProfile };
