let colors = ["green", "blue", "purple"];

let c1 = colors[0];
let c2 = colors[1];
let c3 = colors[2];
console.log(c1); // green
console.log(c2); // blue
console.log(c3); // purple

// 구조 분해 할당
// 배열의 구조 분해 할당은 colors 배열의 요소들을 분해한다음 그 값들을 순서대로 새로운 변수에 할당하는 것

let [color1, color2, color3] = colors;
console.log(color1); // green
console.log(color2); // blue
console.log(color3); // purple

// 선언 분리 할당 - 따로 배열을 선언해주지 않고 변수에 바로 할당해주기
let colorFirst, colorSecond, colorThird;
[colorFirst, colorSecond, colorThird] = ["green", "blue", "purple"];
console.log(colorFirst); // green
console.log(colorSecond); // blue
console.log(colorThird); // purple

// 배열의 길이보다 더 많거나 적은 변수를 할당하기
// 1. 배열의 길이보다 적은 변수 할당
let a1, a2;
[c1, c2] = ["green", "blue", "purple"];
console.log(c1); // green
console.log(c2); // blue

// 2. 배열의 길이보다 많은 수의 변수 할당
let b1, b2, b3, b4;
[b1, b2, b3, b4] = ["green", "blue", "purple"];
console.log(b1); // green
console.log(b2); // blue
console.log(b3); // purple
console.log(b4); // undefined

// 남은 변수에 undefined라는 값을 할당하고 싶지 않다면 기본값을 지정해 줄 수 있다.
let d1, d2, d3, d4;
[d1, d2, d3, d4 = "yellow"] = ["green", "blue", "purple"];
console.log(d1); // green
console.log(d2); // blue
console.log(d3); // purple
console.log(d4); // yellow

// 사용자가 원하는 값을 남은 변수들에 할당해주는 것을 "기본값 할당"이라고 부른다.
// 배열 요소의 값을 추출할 때 자주 사용되지만 두 개의 변수값을 서로 바꿀 때 사용되기도 한다.

// 배열 구조 분해
let a = 10;
let b = 5;

[a, b] = [b, a];
console.log(a, b); // 5, 10

// 객체 구조 분해
let eColors = {
  e1: "green",
  e2: "blue",
  e3: "purple",
};

// let e1 = eColors.e1;
// let e2 = eColors.e2;
// let e3 = eColors.e3;

// console.log(e1); // green
// console.log(e2); // blue
// console.log(e3); // purple

let { e1, e2, e3 } = eColors;

console.log(e1); // green
console.log(e2); // blue
console.log(e3); // purple
