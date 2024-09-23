// Hoisting: 식별자의 선언무이 스코프의 최상단으로 끌어올려진 듯한 현상
// 함수 호이스팅

connectStrings("study", "hoisting"); // studyhoisting

function connectStrings(str1, str2) {
    console.log(str1 + str2);
}

// 변수 호이스팅
// console.log(num1); // !error: Cannot access "num1" before initialization
let num1 = 123;

console.log(num2); // undefined
var num2 = 123;
