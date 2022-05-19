/* File System */

// 1. File write  *) file 생성때문에 주석처리함
//const fs = require("fs"); // nodejs에 등록되어있는 Core module
//fs.writeFileSync("./hello.txt", "Hello Youtubers"); // key(제목) : value(파일안에 담길 내용)

// 2. File read
const fs2 = require("fs"); // File System 객체

const data = fs2.readFileSync("./hello.txt"); // 인코딩값을 않넣으면 버퍼로 불러오게됨
console.log(data);

const data2 = fs2.readFileSync("./hello.txt",{encoding : "utf-8"}); // 인코딩값을 넣어 문자형태로 출력이 가능해짐
console.log(data2);


// 3. File Update *) file 수정 때문에 주석처리함
// const fs3 = require("fs");
// fs3.appendFileSync("./hello.txt", "\nWelcome!"); // 파일명, 수정내용

// 4. File Select
const fs4 = require("fs");

const list = fs4.readdirSync("."); // 해당 디렉토리 안에 있는 모든 파일 조회(다수기 때문에 list포멧으로 받아짐)
console.log(list);


