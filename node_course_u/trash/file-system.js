const path = require("path");
const fs = require("fs");
const { resolve } = require("path");
const { rejects } = require("assert");
const { text } = require("express");

// fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
// });

// console.log("all fine!");

// fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
// });

const aboutMe = {
  name: "ds",
  age: 21,
};

// fs.writeFile(path.resolve(__dirname, "dir.csv"), aboutMe.name, (err) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
// });

// fs.appendFile(
//   path.resolve(__dirname, "dir.csv"),
//   String(aboutMe.age),
//   (err) => {
//     if (err) {
//       console.log(err.message);
//       return;
//     }
//   }
// );

const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    });
  });
};

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    });
  });
};

const readFileAsync = async (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        return reject(err.message);
      }
      resolve(data);
    });
  });
};

const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) => {
    fs.rm(path, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    });
  });
};

// writeFileAsync(path.resolve(__dirname, "text.txt"), "some text")
//   .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "1234444"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "123555555"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "123666666"))
//   .then(() => readFileAsync(path.resolve(__dirname, "text.txt")))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// removeFileAsync(path.resolve(__dirname, "text.txt")).then(
//   console.log("file removed")
// );
