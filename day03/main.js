console.log("-------------------------------------");

// 미션 1. 화살표 함수 작성하기
console.log("미션 1. 화살표 함수 작성하기");
const multiply = (a, b) => {
    return a * b;
};
let result = multiply(3, 4);
console.log(result);

console.log("-------------------------------------");

// 미션 2. 함수 작성하기
console.log("미션 2. 함수 작성하기");
let book = {
    title: "hello",
    author: "world",
    getSummary: function () {
        return `책 제목은 ${this.title}이고 저자는 ${this.author}입니다.`;
    },
};
console.log(book.getSummary());

console.log("-------------------------------------");

// 미션 3. 스코프와 함수
console.log("미션 3. 스코프와 함수");
function subNumbers(a, b) {
    function addFive(number) {
        return number + 5;
    }
    return a + addFive(b);
}
console.log(subNumbers(3, 7));
console.log(subNumbers(10, 5));

console.log("-------------------------------------");
