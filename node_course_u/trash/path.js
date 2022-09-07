// import { path, dirname } from "path";
const path = require("path");

// console.log(path.join(__dirname, "first", "second"));

const siteURL = "https://localhost:8080/users?id=228";

const url = new URL(siteURL);

console.log(url);
