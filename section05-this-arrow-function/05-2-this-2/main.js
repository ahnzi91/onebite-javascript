// 생성자 -> 새로운 객체 생성 / new 키워드 사용

function Cafe(menu) {
  console.log(this); // Cafe {}
  this.menu = menu;
}

let myCafe = new Cafe("latte");
console.log(myCafe); // Cafe {menu: 'latte'}

// 콜백함수
const cafe = {
  brand: "이디야",
  menu: "",
  setMenu: function (menu) {
    this.menu = menu;
  },
};

function getMenu(menu, callback) {
  callback(menu);
}

getMenu("핫초코", cafe.setMenu);

console.log(cafe);

// 자바스크립트의 this는
