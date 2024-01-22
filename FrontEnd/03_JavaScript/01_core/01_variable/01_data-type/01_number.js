// 자바와 마찬가지로 js도 데이터 타입이 존재한다. js는 총 7개의 데이터 타입이 있다.

// 1. 숫자 타입
// 자바는 정수와 실수를 구분해서 int, long, float, double 등과 같은 여러 숫자 타입을 써야하지만
// js는 그런거 없고 그냥 숫자만 쓴다. (깊게 보면 js는 모든 수를 실수로 처리한다.)

//정수, 실수, 음수 모두 숫자타입이다.
//자료형 변수 = 값;
var integer = 10;
var float = 5.5;
var nagative = -10;

//숫자타입은 모두 실수로 처리되므로
console.log(10===10.0); //같다.

//실수끼리 나누기이므로 소수점까지 처리된다.
console.log(10/4);

/*
    숫자 타입은 추가적으로 세가지 특별한 값도 있다.
    Infinity : 양수 무한대
    -Infinity : 음수 무한대
    NaN : 산술 연산 불가 (Not a Number)
 */

    console.log(10/0);
    console.log(10/-0);
    console.log(1*'문자열');