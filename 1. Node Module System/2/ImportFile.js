// how does require function work?
const name = "Zeli";

console.log(name);

// this file cannot refer to any variable in other file without export, even required
// require can run a js file, and exported variable will be assigned
const nike = require("./utils.js")
console.log(nike);