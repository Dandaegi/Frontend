//문자열 타입
//자바랑 똑같이 문자열 데이터를 나타내는데 쓴다.
//따옴표(''), 큰 따옴표(""), 백틱(``)이 가능하다.
//자바는 문자열을 객체로 표현하지만 js는 원시타입이다.

var string;
string = 'js';
console.log(string);

string = "js";
console.log(string);

string = `js`;
console.log(string);

string = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열로 인식';
console.log(string);

string = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열로 인식";
console.log(string);

//백틱을 사용하면 줄 바꿈이 허용되고, 모든 공백이 있는 그대로 적용된다.
var text = `안녕하세요
반갑습니다`;
console.log(text);

var firstName = "정";
var lastName = "예진";

console.log("제 성은 "+firstName+"이고 이름은 "+lastName+"입니다.");
console.log(`제 성은 ${firstName} 이고 이름은 ${lastName}입니다.`);

//백틱의 표현식 삽입은 반드시 백틱 안에서만 사용해야한다.
console.log("제 성은 ${firstName}이고 이름은 ${lastName}입니다.");
//일반 문자열에서 표현식 삽입하면 그냥 문자열로 취급한다.