/* 3rd party module */

/** Package Download
 * URL : npmjs.com
 * Install
  - $ npm install [Package Name] (ex : $ npm install readline-sync)
 * Configuration
  - node_modules : 다운받은 Package의 모든 정보
  - package-lock.json : 작업한 버전이 변경되지 않도록 추후 다운받을 수 있게 도와주는 파일
*/

const readline = require('readline-sync');
const name = readline.question("What is your name ? \n");
console.log(name); 