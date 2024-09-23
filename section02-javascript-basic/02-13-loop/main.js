// for 문
// 조건에 따라 일정 횟수만큼 같은 코드를 반복 실행해야할 때 사용된다.
// for (초기화식, 조건식, 증감식) {
//    실행해야 할 코드;
// }
for (let i = 1; i < 6; i++) {
  console.log(i); // 1 2 3 4 5
}

// 숫자 5 ~ 1까지 순서대로 출력하는 코드
for (let i = 5; i > 0; i--) {
  console.log(i); // 5 4 3 2 1
}

// while 문
// 조건을 만족할 때 까지 동일한 코드를 반복 수행하는 반복문
// 특정 조건이 "참"이라면 해당 코드를 반복 수행하는 반복문
// ! while문을 사용해 반복문을 작성할 땐 언젠가는 조건문을 만족하지 않아 false가 반환되어 종료가 될 수 있도록 주의하여 작성해야 한다.
// 1 ~ 5까지 숫자 출력하는 코드
let i = 1;
while (i < 6) {
  console.log(i);
  i++;
}

// for문과 while문은 배열의 모든 요소들에 접근해야 할 때 유용하게 사용된다.
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let person = {
  name: "홍길동",
  age: 25,
  height: 180,
};

// Object.keys() 활용하기
let keyArray = Object.keys(person);
for (let i = 0; i < keyArray.length; i++) {
  let key = keyArray[i]; // key
  console.log(`key : ${key}, value : ${person[key]}`);
}

// Object.values() 활용하기
let valueArray = Object.values(person);
for (let i = 0; i < valueArray.length; i++) {
  console.log(`value: ${valueArray[i]}`);
}

// Object.entries()
let newArray = Object.entries(person);
for (let i = 0; i < newArray.length; i++) {
  console.log(`key: ${newArray[i][0]}, value: ${newArray[i][1]}`);
}

// 알아두면 유용한 JavaScript의 또 다른 반복문
//for of - 배열의 모든 요소에 접근해야 될 때 사용
let forOfArray = [1, 2, 3, 4, 5];
for (let i of forOfArray) {
  console.log(i);
}

//for in - 주로 객체에서 사용되며 for문과는 달리 객체의 모든 프로퍼티들을 순회할 수 있음
for (let key in person) {
  console.log(`key : ${key}, value : ${person[key]}`);
}
