// spread
// 특정 배열의 요소나 객체 프로퍼티 값들을 펼치는 역할을 한다.
// 객체에서의 spread
const toy = {
  type: "bear",
  price: 150000,
};

const blueToy = {
  ...toy,
  color: "blue",
};

const yellowToy = {
  ...toy,
  color: "yellow",
};

console.log(blueToy); // {type: 'bear', price: 150000, color: 'blue'}
console.log(yellowToy); // {type: 'bear', price: 150000, color: 'yellow'}

// 배열에서의 spread
const color1 = ["red", "orange", "yellow"];
const color2 = ["blue", "navy", "purple"];

const rainbow = [...color1, "green", ...color2];
console.log(rainbow); //['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']

// spread 문법은 배열이나 객체에서 반복적인 부분을 "..." 기호를 사용해 퍼뜨릴 수 있고 rainbow 배열처럼 순서에 상관없이 여러 번 반복해서 사용할 수 있다.

// rest
// 나머지 매개 변수
// "..." 기호 사용
// 특정 부분들을 하나의 배열이나 객체로 묶어주는 문법
const greenToy = {
  type: "bear",
  price: 15000,
  color: "green",
};

// const { type, price, color } = greenToy;
// console.log(type); // bear
// console.log(price); // 15000
// console.log(color); // green

// 객체에서의 rest 문법
const { type, ...objRest } = greenToy;
console.log(type); // bear
console.log(objRest); // {price: 15000, color: 'green'}

// rest 문법은 spread와는 다르게 순서에 상관 없이 여러번 작성할 수 없습니다.
// rest 문법은 항상 맨 마지막에 작성해야 합니다.

// 배열에서의 rest 문법
const colors = ["red", "orange", "yellow", "green"];
const [c1, c2, ...arrRest] = colors;
console.log(c1); // red
console.log(c2); // orange
console.log(arrRest); // ['yellow', 'green']

const print = (a, b, ...rest) => {
  console.log(a, b, rest);
};

print(1, 2, 3, 4, 5, 6); //1 2 [3, 4, 5, 6]

const print2 = (...rest) => {
  console.log(rest);
};
const numbers = [1, 2, 3, 4, 5, 6];
// print(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5]); / 1 2 3 4 5 6
print2(...numbers); // [1, 2, 3, 4, 5, 6]
