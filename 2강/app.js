// module : library, dependency, package
const add = require('./add'); // 생성한 module을 끌어오기 위해 경로를 기반으로 호출한다.
const mult = require('./mult');

const result = add(1, 2);
const result2 = mult(5, 10);



console.log(result);
console.log(result2);


// module 내 여러 