// 함수 표현식
const add = function () {
  return a + b;
};
console.log(add(10, 20));

// 화살표 함수
const add2 = (a, b) => a + b;
console.log(add2(10, 20));

// 콜백 함수 : 다른 함수에 매개변수로 넘겨지는 함수
const printResult = (a, b) => {
  let result = a + b;
  console.log(`결과 : ${result}`);
};
const doubleResult = (a, b) => {
  let result = a + b;
  console.log(`결과 : ${result * 2}`);
};

printResult(5, 3);
doubleResult(5, 3);

// 위의 printResult() 함수와 doubleResult() 함수에는 중복되는 부분이 있다.
// 1. 두 개의 매개변수를 전달 받는다.
// 2. 두 매개변수의 합을 더하는 연산.

// 중복되는 부분을 calculate() 함수로 묶어줍니다.
// calculate() 함수 안에 있는 result 변수를 printResult()와 doubleResut()에 전달하기 위해서는 calculate() 내부에서
// printResult()와 doubleResult()를 호출해 인자로 result를 전달하면 될 것 같습니다.
const calculate = (a, b, callback) => {
  let result = a + b;
  callback(result);
};

const printResult2 = (result) => {
  console.log(`결과 : ${result}`);
};
const doubleResult2 = (result) => {
  console.log(`결과 : ${result * 2}`);
};

calculate(5, 3, printResult2);
calculate(5, 3, doubleResult2);

// 콜백 함수 연습
const testFunc = (callback) => {
  callback();
};

testFunc(() => {
  console.log("콜백 함수 테스트");
});


