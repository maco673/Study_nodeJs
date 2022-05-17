const pi = 3.14;
const avg = (arr) => {
    let sum = 0;

    if(arr.length === 0){
        return 0;
    }

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;

};

module.exports = {
/*
 * 여러 값을 모듈화하여 보내는 방법
    - pi:pi; // key : 변수
    - key와 전송하려는 변수가 동일하다면 같은 이름을 사용해도 무관하다
 */
    pi,  // pi:pi
    avg // avg:avg;
};

module.exports.pi2 = pi;
module.exports.avg2 = avg;