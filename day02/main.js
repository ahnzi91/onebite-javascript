"use strict";

// 미션1. switch case문 작성하기
let cat = "고양이";
switch (cat) {
  case "dog":
    console.log("강아지");
    break;
  case "tiger":
    console.log("호랑이");
    break;
  case "cat":
    console.log("고양이");
    break;
  case "lion":
    console.log("사자");
    break;
  default:
    console.log("동물");
}

// 미션2. 함수 작성하기
let answer = "";

function connectStrings(str1, str2) {
  answer = str1 + " " + str2;
}

connectStrings("hello", "javascript");

console.log(answer);