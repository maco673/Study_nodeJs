/* Core module */
/* node.js를 맨처음 받을때 같이 오는 특별한 다운로드 없이 모듈을 사용할 수 있는 라이브러리같은 존재 */

// 콘솔창에 입력된 데이터로 만들어보는 module
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name", (answer) => {
    console.log("Hellow" + answer);
    rl.close();
});g

/* 
require("readline") : 콘솔창에 입력한 내용을 읽는 input 모듈
input : 콘솔창에서 읽을 수 있도록 돕는 module 객체
output : 콘솔창에 내뱉을 수 있도록 돕는 module 객체
*/