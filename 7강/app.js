/* Sync&Async 동기와 비동기 */

// Synchronous(직렬화) VS Asynchronous(병렬화)
// Block       Vs Non-Block
// fs.readFile, fs.readFileSync 차이

const fs = require("fs");
const data = fs.readFileSync("./hello.txt", {encoding: "utf-8"});

console.log(data);

// Async test
let text = " ";
fs.readFile("./hello.txt", {encoding: "utf-8"}, (err, data) => {
  console.log(data + " 2"); 
  
  text = data;
});

console.log(text);