// 객체 리터럴

//자바와 상당히 비슷하다.

//빈 객체 만들기
var student = {};
//객체
var student2 = {
    //키 : 값으로 구성된 프로퍼티
    //프로퍼티는 객체의 상태를 나타내는 값
    //프로퍼티
    name:'정예진',
    age: 26,

    //메소드: 프로퍼티를 참조하고 조작할 수 있는 동작!
    getInfo: function(){ //함수 쓸 때 명령어 꼭 써야됨
        return `${this.name}은 ${this.age}세 입니다.`
    },
    setInfo: function(name){
        this.name = name;
    }
}





//객체 안에 프로퍼티랑 메소드가 있다.
//객체는 키 : 값으로 구성된 여러 변수들이랑 여러 메소드의 집합
console.log(typeof student2);
console.log(student2);
console.log(student2.name);
console.log(student2.age);
console.log(student2.getInfo());
student2.setInfo('정지섭'); //인자 줌
console.log(student2.name);

var students = {
    name: '정예진',
    age: '26',
    width: '68',
    height: '162',
    //stdents안에 name을 인자로 받은 name으로 바꿔주는 메소드
    setName: function(name){
        students.name = name;
    },
    setAge : age => students.age = age,
    setWidth : width => this.width = width,
}
console.log("=====================");

//console.log(students);
//console.log(students.name);
//students.setName('정지섭');
//console.log(students);
//console.log(students.name);
//console.log(students);
console.log(students);
students.setAge(44);
console.log(students);






