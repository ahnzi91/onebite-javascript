// function Counter() {
//   this.count = 0;
//   setInterval(function () {
//     this.count++;
//     console.log(this.count);
//   }, 2000);
// }

// const counter = new Counter();

// setInterval() 함수에 전달된 콜백 함수의 this는 생성자 함수를 통해 새로 생성된 Counter() 객체를 가르키지 않고 전역 객체인 window 객체를 가리키기 때문에 숫자가 1씩 증가되어 출력되는 것이 아니라 NaN이라는 값이 2초마다 출력된다.

function Counter2() {
  this.count = 0;
  setInterval(() => {
    this.count++;
    console.log(this.count);
  }, 2000);
}

const counter2 = new Counter2();

const cafe = {
  brand: "이디야",
  menu: "아메리카노",
  print: () => {
    console.log(this);
  },
};

cafe.print(); // window 객체 바인딩
