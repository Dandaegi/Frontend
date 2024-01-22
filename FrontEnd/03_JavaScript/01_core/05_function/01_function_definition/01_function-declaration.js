//함수 선언

//js는 코드를 첫 줄부터 읽지만 함수를 만나면 읽지 않고 호출이 돼야 함수를 읽는다.
//function 함수이름(받을 변수 명){  //받을 변수 명은 매개변수 라고 한다.
//   받을 변수 명으로 뭐 할건지 작성하기
//  return;은 코드의 흐름을 함수를 호출함 지점으로 다시 돌려보낸다.
//  return 값; 은 함수를 호출한 지점으로 값을 가지고 돌려보낸다.
//}
function hello(name){  //2
    return `${name}님 안녕하세요`;  //3
}

console.log(hello('정예진')); //1 //4

function number(){
    return 50;
}

function number2(num){
    return num;
}
console.log(number()+number2(25));
