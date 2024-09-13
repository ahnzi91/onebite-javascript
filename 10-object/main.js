// 객체 생성 - 생성자 함수
let object = new Object();
console.log(object); // {}

// 객체 속성 - key, value
let book = {
  title: "자바스크립트 첫걸음",
  author: "안지훈",
  category: "JavaScript",
  year: undefined,
  color: function () {
    console.log("orange");
  },
};

// 객체 속성 사용하는 방법
let car = {
  name: "니로",
  model: "niro",
  color: "navy",
};

// 1. 점 표기법
console.log(car.name); // 니로
console.log(car.model); // niro
console.log(car.color); // navy

// 2. 괄호 표기법
console.log(car["name"]); // 니로
console.log(car["model"]); // niro
console.log(car["color"]); // navy

// car 속성을 출력하는 getValue() 생성
const getValue = (key) => {
  console.log(car[key]);
};
getValue("color"); // navy

// 객체 속성 추가
let cat = {
  age: 2,
};
cat.name = "야옹이";
cat["color"] = "white";
console.log(cat);

// 객체 속성 수정
let cat2 = {
  age: 2,
  name: "야옹이",
  color: "white",
};
cat2.name = "옹이";
cat2["color"] = "red";
console.log(cat2);

// 객체 속성 삭제
let cat3 = {
  age: 2,
  name: "야옹이",
  color: "white",
};

delete cat3.color;
delete cat["age"];
console.log(cat3);

// 객체 속성에 함수가 있는 경우
const person = {
  name: "홍길동",
  age: 23,
  print: function () {
    console.log(`제 이름은 ${this.name}입니다.`);
  },
};
person.print();
person["print"]();
