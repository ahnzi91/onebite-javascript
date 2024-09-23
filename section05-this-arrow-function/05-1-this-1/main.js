// 전역 공간
// window 객체는 웹브라우저의 전역 객체로 전역 공간에 항상 존재하는 객체를 의미한다.
console.log(this); // window 객체

// 함수
function func() {
  console.log(this);
}
func(); // window 객체

// 메서드 - 객체 프로퍼티에 저장된 함수
// 함수를 메서드로써 호출하면 메서드를 포함하고 있는 객체 자체가 출력된다.
const cafe = {
  brand: "이디야",
  menu: "아메리카노",
  // print: function () {
  //   console.log(this);
  // },

  newCafe: {
    brand: "이디야",
    menu: "라떼",
    print: function () {
      console.log(this);
    },
  },
};
// cafe.print(); // {brand: '이디야', menu: '아메리카노', print: ƒ}
cafe.newCafe.print(); // {brand: '이디야', menu: '라떼', print: ƒ}

const coffee = {
  brand: "이디야",
  menu: "아메리카노",
  print: function () {
    console.log(this);
  },
};
const myCoffee = coffee.print;
console.log(myCoffee); // window 전역 객체
// this는 자신이 속한 객체를 가리키는 키워드이다.
// 자신이 포함하고 있는 함수가 어떻게 호출되었는가에 따라 가리키는 값이 달라지는 키워드이다.
// coffee 객체에서 this를 포함하고 있는 print 함수는 메서드로써 호출된 것이 아니라 전역 공간에서 일반 함수로써 호출이 되었다.
// 그렇기 때문에 myCoffee를 호출한 객체인 전역 객체, window 객체가 호출된다.

// this는 함수가 선언된 위치나 방법에 영향을 받지 않고 무조건 함수가 호출된 방법에 따라 가리키는 값이 달라진다.
