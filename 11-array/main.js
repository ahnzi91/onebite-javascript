let arr = new Array(1, 2, 3);
let arr2 = new Array(3);

console.log(arr);
console.log(arr2);

// 배열 리터럴
let arr3 = [1, 2, 3];
let arr4 = [3];

console.log(arr3);
console.log(arr4);

// 여러 개의 자료형을 배열에 넣어본다.
let arr5 = [
  { name: "홍길동" },
  1,
  "array",
  function () {
    console.log("hello world");
  },
  null,
  undefined,
];

console.log(arr5);

// 배열에 접근하는 방법
let array = [1, "hello", null];

console.log(array[0]); // 1
console.log(array[1]); // hello
console.log(array[2]); // null

// 배열 요소 추가 방법
// 1. push() : 배열의 마지막 인덱스에 요소 추가
// 2. unshift() : 배열의 첫 번째 인덱스에 요소 추가
let fruits = ["apple", "orange", "peach"];
fruits.push("grape");
console.log(fruits); // ['apple', 'orange', 'peach', 'grape']

fruits.unshift("watermelon");
console.log(fruits); // ["watermelon", "apple", "orange", "peach", "grape"]

// 배열 요소 수정
// Javascript에서 배열은 객체로 분류되는 자료형으로 "객체"라고 볼 수 있습니다.
let animal = ["cat", "dog", "hamster"];
animal = ["cat", "rabiit", "hamster"];
animal[2] = "parrot";
console.log(animal); // ['cat', 'rabiit', 'parrot']

// 배열 요소 삭제 방법
// 1. pop() : 배열의 마지막 요소 삭제
// 2. shift() : 배열의 첫 번째 요소 삭제
// 3. splice() : 배열에서 특정 인덱스의 요소 삭제
const colors = ["purple", "skyblue", "green"];
colors.pop();
console.log(colors); // ['purple', 'skyblue']

colors.push("green");

colors.shift();
console.log(colors); // ['skyblue', 'green']

colors.unshift("purple");
colors.push("yellow", "orange");

console.log(colors); // ['purple', 'skyblue', 'green', 'yellow', 'orange']

// splice(start, deleteCount);
colors.splice(1, 3);
console.log(colors); // ['purple', 'orange']

// length() : 배열의 크기를 알아볼 수 있는 함수
console.log(colors.length);
