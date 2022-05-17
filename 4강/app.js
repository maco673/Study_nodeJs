// module 생성

// add.js
const add = require('./add'); // add == add.js
const result = add(1, 2);
console.log(result);

// mult.js
const mult = require('./mult');
const result2 = mult(70, 100);
console.log(result2);

// stat.js
const stat = require('./stat');
console.log(stat.pi);
console.log(stat.avg([1,2,3,4,5]));

const stat2 = require('./stat');
console.log(stat2.pi2);
console.log(stat2.avg2([4,5,6,7,8,9]));
