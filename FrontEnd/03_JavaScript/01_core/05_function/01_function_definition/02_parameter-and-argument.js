//매개변수와 인자(인수)

//함수 선언문
function hello(name){  //name은 매개변수
    //매개변수는 함수 내부에서만 참조(사용)할 수 있다.
    console.log(name); //함수는 함수의 끝 괄호 } 를 만나거나 return을 만나면 종료되고 자신을 호출한 자리로 돌아가게 한다.
    return name;

    

}
//console.log(name); 에러

//함수 호출
var result = hello('정예진');
console.log(result);

function hello2(name){
    console.log(name+'님 안녕하세요');
    return name;
   
    
}

hello2();  //js에서는 매개변수가 있는 함수에 인자를 주지 않아도 에러가 안난다. 

//응용
function hello3(name){ //name == undifined
    if(name){  // == if(undifined)  :  undifined == Falsy == false : if(false)
        console.log(name+'님 안녕하세요');  //여기로 들어오지 않는다
        return name;
       
    }
    else if(!name){  //else if(!undefined) : undifined == Falsy == false : else if(!false) : else if(ture)
        console.log('값을 넣어주세요');  //여기로 들어온다.
        return null;  //null을 가지고 감
        
    }
    
}

var test =  hello3();  //함수호출
console.log(test);


var test2 = hello3('정예진');
console.log(test2);

function hello4(name, age){
    if(name && age){
        return `${name}은 ${age}살`;
    } else if(name || age){
        if(name){
            return `${name}이 안녕`;
        } else {
            return `너년 ${age}살`
        }
    } else {
        return null;
    }
}
var test3 = hello4('정지섭')  // 정지섭이 안녕
var test4 = hello4(24);  // 24이 안녕
console.log(test4);

var test5 = hello4('정지섭', 26);  // 정지섭은 26살
var test6 = hello4();  // null

function plus(num1, num2){
    var result = num1 + num2;
    return result;
}
function devide(num1, num2){
    return num1 / num2;
}

console.log(devide(50,plus(30,70)));

function loop(){
    console.log(50);
    loop(); //재귀호출 : 함수가 자기 자신 안에서 자신을 또 부르는 함수
    // 실행하면 무한루프에 빠지게 되고 강제 종료하지 않는 이상 끌 수 없다.
    // 함수 내에서 조건문으로 나누어서 처리하면 좋은 로직이 될 수 있지만
    // 잘못하면 무한루프에 빠진다.
}

function dico(){
    console.log('disco');

    function discord(name){
        return name;
    }
    console.log(discord('디스코드'));
}
//함수 내부나 외부 어디든 모든 코드를 다 작성할 수 있다.
dico();






