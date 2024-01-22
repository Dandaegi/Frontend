// 비교연산자

/*
    비교연산자는 좌항과 우항의 비교 연산자로 비교한 다음 그 결과를 boolean으로 반환한다.
    if문이나, for문과 같은 제어문의 조건식에서 주로 사용한다.
*/

/*
    동등/일치 비교 연산자
    동등 비교 연산자와 일치 비교 연산자는 비교하는 엄격성의 정도가 다르다.
    동등 비교(==,!=) 연산자는 먼저 암묵적으로 타입을 변환시킨 다음 같은 값인지 비교한다.
    일치 비교(===,!==) 연산자는 타입과 값이 모두 일치하는지 비교한다.
*/

console.log(`1 == '1' : ${1 == '1'}`);
console.log(`1 == true : ${1 == true}`);

console.log(`1 === '1' : ${1 === '1'}`);
console.log(`1 === true : ${1 === true}`);

console.log(`null == undefined : ${null == undefined}`);
console.log(`null === undefined : ${null === undefined}`);

console.log(`NaN == NaN : ${NaN == NaN}`);
console.log(`NaN === NaN : ${NaN === NaN}`);
//NaN은 유일하게 자기 자신과 일치하지 않는다.






