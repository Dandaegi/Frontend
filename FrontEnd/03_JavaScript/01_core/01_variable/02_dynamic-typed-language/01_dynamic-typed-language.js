//typeof 연산자 : 변수에 할당된 값의 데이터 타입을 반환함

var test;
console.log(typeof test);

test = 1;
console.log(typeof test);

test = 'js';
console.log(typeof test);

test = true;
console.log(typeof test);

test = null;
console.log(typeof test);

test = Symbol();
console.log(typeof test);

test = {};  //객체
console.log(typeof test); //object

test = [];  //배열
console.log(typeof test); //object

test = function(){}; //함수
console.log(typeof test); //function



n



