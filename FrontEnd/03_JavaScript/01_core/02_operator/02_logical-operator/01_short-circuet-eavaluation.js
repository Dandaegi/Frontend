//논리 연산자
// || (OR), &&(and), !(not) 논리연산자는 피연산자를 논리연산한다.

// 단축평가(!!면접 질문에 정말 많이 나옴!)
// 표현식을 평가하는 도중 평가 결과가 확정되면 나머지는 생략한다.


//or, and 연산자 표현식의 결과가 때로는 boolaen이 아닐 수 있다.

// apple은 빈 문자열이 아니기 때문에 Truthy값으로 분류돼서 true가 된다.
console.log('apple' || 'banana'); 
console.log(true || false);
console.log(true && false);

console.log(!(true && false));
console.log(!(5>=3 || console.log("아니")));






