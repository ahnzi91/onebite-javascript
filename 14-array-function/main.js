// 우리가 여태 배워온 방법
// for 문을 사용하여 배열 안의 요소에 접근
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// forEach()
arr.forEach((element, index, array) => {
  console.log(element);
  console.log(`${index}번 째 요소는 ${element}입니다.`);
  console.log(array);
});

// map()
// map()이라는 내장 함수는 전달한 콜백 함수를 호출한 결과를 모아서 새로운 배열로 반환해주는 내장 함수이다.
// 배열의 모든 요소에 연산을 적용하고 그 결과로 새로운 배열로 돌려받을 수 있는 내장함수.
let newArray = [];
for (let i = 0; i < arr.length; i++) {
  newArray.push(arr[i] * 10);
}
console.log(newArray); // [10, 20, 30, 40, 50]

// map(currentValue, index, array)
let mapArray = arr.map((element) => {
  return element * 10;
});
console.log(mapArray); // [10, 20, 30, 40, 50]

let colors = ["green", "blue", "purple"];
console.log(colors[2]); // purple
console.log(colors[colors.length - 1]); // purple

// at()
console.log(colors.at(1)); // blue
console.log(colors.at(-1)); // purple

// includes()
// 매개변수로 받은 요소를 배열이 포함하고 있는지 판별하는 내장 함수.
// Boolean 값으로 반환
console.log(colors.includes("blue")); // true
console.log(colors.includes("yellow")); // false
console.log(colors.includes("blue", 2)); // colors 배열에 두 번째 값 부터 "blue"라는 요소가 있는지 검사하는 코드 : false
console.log(colors.includes("blue", 1)); // colors 배열에 첫 번째 값 부터 "blue"라는 요소가 있는지 검사하는 코드 : true

// indexOf()
// 특정 값을 지닌 요소가 몇 번째에 위치하는 요소인지 찾아주는 함수
console.log(colors.indexOf("purple")); // 2
console.log(colors.indexOf("yellow")); // -1
console.log(colors.indexOf("blue", 1)); // 1
console.log(colors.indexOf("yellow")); // -1

console.log("-----------------");

let colors2 = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
  { id: 4, color: "yellow" },
];

// findIndex()
// 배열 요소의 값이 객체 형태라면 color가 "purple"인 객체가 배열의 몇 번째 요소인지 찾기 위해서 사용하는 내장 함수
let index = colors2.findIndex((element) => element.color === "purple");
console.log(index);
let index2 = colors2.findIndex((element, index, array) =>
  console.log(`${index}번 째 값은 id : ${element.id}, color : ${element.color}`)
);
let index3 = colors2.findIndex((element, index, array) => console.log(array));

// find()
// 찾아낸 값 그 자체를 반환하는 내장 함수
let idx = colors2.find((element) => element.color === "purple");
console.log(idx); // { id: 3, color: 'purple' }

// filter()
let filterArray = colors2.filter((element, idx, array) => element.id > 1);
console.log(filterArray);

// slice()
// 배열에서 특정 값들만 따로 추출하여 새로운 배열을 생성하는 내장 함수이다.
let sliceArray = colors2.slice(1, 3);
console.log(sliceArray);

// concat()
// 두 개의 배열을 붙이게 해주는 내장 함수.
let arrConcat1 = ["green", "blue"];
let arrConcat2 = ["purple", "yellow"];
console.log(arrConcat1.concat(arrConcat2)); // ['green', 'blue', 'purple', 'yello']

// join()
// 배열을 하나로 합치는 내장 함수
// concat() 함수와 다른점 : 배열 요소들의 값들을 문자열로 이어주는 내장 함수
// join() 내장 함수의 매개변수에는 구분자를 넣어줄 수 있습니다. default: ,(쉼표)
let arrJoin = ["green", "blue", "purple", "yellow"];
console.log(arrJoin.join()); // green,blue,purple,yellow
console.log(arrJoin.join(" ")); // green blue purple yellow

// sort()
// 정렬해주는 내장 함수. default: 오름차순
let sort = ["green", "blue", "purple"];
sort.sort();
console.log(sort); // ['blue', 'green', 'purple']

// 내림차순
const compare = (a, b) => {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
};
sort.sort(compare);
console.log(sort); // ['purple', 'green', 'blue']
