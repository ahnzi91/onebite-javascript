"use strict";

// 전역 스코프
let globalNum = 100;

function testFunc() {
    console.log(globalNum);
}
testFunc();
console.log(globalNum);

// 지역 스코프
function testFunc2() {
    let innerNum = 50;
    console.log(innerNum);
}
testFunc2();
// console.log(innerNum); // innerNum is not defined

let global = "나는 전역 변수입니다.";

function outerFunction() {
    let outer = "나는 외부 함수의 변수입니다.";

    function innerFunction() {
        let inner = "나는 내부 함수의 변수입니다.";
        console.log(global);
        console.log(outer);
        console.log(inner);
    }

    innerFunction();
    console.log(global);
    console.log(outer);
    // console.log(inner); // error: inner is not defined
}

outerFunction();

function print() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    // console.log(i); // error : i is not defined
}

print();

function print2() {
    console.log(name);
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);
}

print2();
