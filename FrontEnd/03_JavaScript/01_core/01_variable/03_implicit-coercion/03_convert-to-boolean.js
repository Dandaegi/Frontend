//JS는 boolean 타입이 아닌 Truthy 값(참으로 평가 되는 값)
//또는 Falsy(거짓으로 평가되는 값)으로 구분한다.
//Truthy => true, Falsy => false
if(true){
    console.log('if(true');  //Truthy값이다
    
}
if(false){
    console.log('if(false');  //Falsy값이다
    
}
// true false랑 똑같다
if(1){  //원래는 if(안에) 조건식이 (예를 들어 5>0 등)이 와야하지만 JS에서는 안그래도 된다
    //1은 true이고, 정확히는 Truthy 값이다.
    console.log('나올까?');
    
}
if(0){
    console.log('나올까2?');
    
}
if(undefined) console.log('나올까3?'); //Falsy
if(NaN) console.log('나올까4?');  //Falsy
//null, 빈문자열('')도 Falsy값이다.
if(Infinity) console.log('나올까5?');  //Truthy
if(-Infinity) console.log('나올까6?'); //Truthy
if('JS') console.log('나올까7?');

//flase, undefined, null, 0, NaN, 빈문자열("") 은 모두 Falsy 값이다.
//를 제외한 나머지는 모오오오두 Truthy이다.




