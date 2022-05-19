/* JSON 읽고 쓰기 */

// Javascript Object Notation
const fs = require("fs"); // file system module

// const data = fs.readFileSync("./vocab.json", {encoding: "UTF-8"});
// console.log(data);
// console.log(typeof data); // JSON 파일을 읽어왔을때 log를 찍으면 마치 배열처럼 보이나 배열이 아닌 String 값이다

// console.log(JSON.parse(data)); // JSON파일의 객채를 사용하기 위하여 형변환을 통해 object화 시킨다
// console.log(typeof JSON.parse(data)); // JSON object로 형태가 변해있다

// let arr = JSON.parse(data); // 배열로 받아드릴 수 있도록 형변환
// console.log(arr[2]);
// console.log(typeof arr[2]); // string으로 전체내용을 읽었었지만 JSON object > Array변환 > Array객체 출력을 통해 number타입으로 변환하였다.


/**  JSON 객체 
 * JSON은 [key] : [value]의 형태를 갖는다.
 * JSON 배열은 "[value1, value2, value3]"로 둘러쌓아 표현한다.
 * JSON 데이터는 "{value}"로 둘러쌓아 표현한다.
 * JSON 파일은 javascript object이긴 하나 string으로 설정되어있어서 key값을 항상 string으로 넣는다.
*/

// 코드를 통한 JSON 파일 생성


// Object 파일 생성
const ob = {
    name: "SeungJae",
    age: 35,
    description: "Im lazy...."
};

// fs.writeFileSync("test.json", JSON.stringify(ob)); // 한줄로 출력됨
/* 
 * JSON.stringify([obj], "['[json object name]']"), [number]) 
  - obj를 JSON String화 시키는데 json object name을 명시한 애들만 살려놓고 number만큼 띄워서 보기좋게 만들거야
*/
fs.writeFileSync("test3.json", JSON.stringify(ob, ['name', 'age'], 3)); // 정리함 