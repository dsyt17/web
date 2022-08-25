"use strict";

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
