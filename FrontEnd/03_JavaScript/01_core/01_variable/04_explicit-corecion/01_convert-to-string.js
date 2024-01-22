//명시적 타입 변환

//개발자의 의도에 따라 타입 변환하는 방법

//1. String클래스 생성자 함수를 new 연산자 없이 호출해서 변환하기
console.log(String(10));   //"10"
console.log(String(NaN));  //"NaN"

//2. Object.prototype.toString 메서드 사용
console.log((10).toString());  //"10"
console.log((NaN).toString());  //"NaN"



