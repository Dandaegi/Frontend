// 화살표 함수

// js 신버전에서 도입된 신기술 function 키워드 대신에 화살표를 이용해
// 훨씬 간략한 방법으로 함수를 선언할 수 있다.

var message;

// 기존 함수 정의 방법
message = function(){
    return "hello";
}
// 둘다 같음
function message2(){
    return "hello";
}
console.log(message());

//화살표 함수 정의 벙법
message = () => {
    return "Arrow Funcition";
}
console.log(message());

//함수 몸체 안에 명령문이 하나만 있으면 중괄호도 생략 가능
//명령문은 ; 으로 끝나는 모든 명령어들
message = () => "Arrow Funcitions are simple"; //중괄호가 없어서 1개만 가능
console.log(message());

message = (num1,num2) => "Arrow" + num1 + num2;
console.log(message("Funtion is", "good"));

message = (num1,num2) => {
    return "Arrow"+num1+num2;
}

//매개변수가 하나면 소괄호마저 생략 가능
//매개변수가 없거나, 여러 개면 생략 불가능
message = num => "Arrow" + num;
//매개 변수(num) 하나이기 때문에 ()생략하고, 명령문이 하나이기 때문에 {}중괄호 생략함
console.log(message("Funtion"));



