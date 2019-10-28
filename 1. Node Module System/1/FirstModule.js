// import node module
const fs = require("fs");
fs.writeFileSync("notes.txt","First node text");
fs.appendFileSync("notes.txt", " extra content");