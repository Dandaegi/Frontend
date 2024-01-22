/*
    undefined 타입의 값은 undefined가 유일하다.
    var로 선언한 변수는 암묵적으로 undefined로 초기화 된다.(값을 넣어주지 않았을 때)
    값을 할당하지 않은 변수를 출력하거나, 참조하면 unedfined가 반환된다.
    (흔히 에러났을 때 에러 대신 많이 보인다.)
    define은 정의하다라는 뜻이다. 그래서 undefined는 정의되지 않았다라는 뜻이다.
    파이썬에서 def로 함수를 선언하는데 이것도 define의 약자이다.
*/

var test;
console.log(test);

/*
    null 타입
    null의 값도 null이 유일하다.
    변수에 값이 없다는 것을 *의도적으로 명시할 때* 사용한다.
*/
var test = null;
var test2 = "null";
console.log("test의 자료형은 :"+typeof test+", 값은 : "+test);
console.log("test의 자료형은 :"+typeof test2+", 값은 : "+test2);
console.log(test);
console.log(test2);

test = test + "able";  //객체 + 문자열 = 문자열 null은 객체가 아니라 원시 값 중 하나이다.
test2 = test2 + "able"; //문자열 + 문자열 = 문자열
//자기 마음대로 타입을 바꿔서 에러를 안나게 만들어 버린다.
console.log(test);
console.log(test2);

console.log(typeof test);
console.log(typeof test2);





