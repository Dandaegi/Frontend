// 산술 연산자( +. -, *, / )의 피연산자는 모두 숫자여야만 한다.
// 숫자가 아니면 강제로 바꿔버린다.

console.log(10 - "5"); //문자열 5를 강제로 숫자로 바꾼다.
console.log(10 * '5');
console.log(10 % 'js'); //피연산자를 숫자로 바꿀 수 없어 연산 불가능(에러아님)

console.log(10 > '5');

// 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입으로 암묵적으로 타입 변환
console.log(+'');  //''빈 문자열을 0이라고 생각 함
console.log(+'1');
console.log(+'js');
console.log(+true); //true는 암묵적으로 1임
console.log(+false);









