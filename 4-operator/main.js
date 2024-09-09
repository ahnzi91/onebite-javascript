// 산술 연산자
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// 나머지 연산자
console.log(num1 % 2); // 0
console.log(num2 % 2); // 1

// 증감 연산자
// 후위 연산자
let num3 = 10;
console.log(num1++); // 10: num1에 할당된 값인 10에 1을 더하기 바로 직전 값인 10을 출력한다.
console.log(num1);   // 11
// 전위 연산자
console.log(++num1); // 12 : 현재 11로 변한 num1의 값에 숫자 1을 더한 값인 12가 출력된다.

// 감소 연산자
let num4 = 10;
console.log(num4--); // 10
console.log(num4);   // 9
console.log(--num4); // 8

// 대입 연산자
let num5 = 10;
num5 = num5 + 10;
console.log(num5); // 15

// 복합 대입 연산자
let num6 = 10;
num6 += 10;
console.log(num6); // 15

// 비교 연산자
// 일치
let num7 = 10;
let num8 = "10";
console.log(num7 == num8);  // false
console.log(num7 === num8); // true

// 불일치
console.log(num7 !== num8);  // true
console.log(num7 != num8); // false

// 대소 비교 연산자
let a = 10;
let b = 20;
let c = 10;
console.log(a < b);  // true
console.log(a > b);  // false
console.log(b >= c); // true 
console.log(a > c);  // false

// 연결 연산자
let price = 10000;
console.log("가격 : " + price + "원"); // 가격 : 10000원

// 논리 연산자
// true false

// NOT 연산자
let isClicked = true;
let isOpened = false;
console.log(!isClicked); // false
console.log(isOpened);   // true

// OR 연산자
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// AND 연산자
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false


// null 병합 연산자
// A ?? B
let a1;
let a2 = 10;
console.log(num1 ?? 20); // 20
console.log(num2 ?? 20); // 10

// 삼항 연산자
// A ? B : C
// A는 조건문이다.
let b1 = 100;
let result = b1 % 2 === 0 ? "짝수" : "홀수";
console.log(result); // 짝수