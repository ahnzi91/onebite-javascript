// 미션1. 배열, 객체, 반복문
let foods = [
  { name: "Burger", calories: 800 },
  { name: "Apple", calories: 52 },
  { name: "Pizza", calories: 550 },
  { name: "Salad", calories: 150 },
];

for (let i = 0; i < foods.length; i++) {
  if (foods[i].calories >= 500) {
    console.log(foods[i].name);
  }
}

// 미션2. 생성자 함수
function Animal(type, sound) {
  this.type = type;
  this.sound = sound;

  this.makeSound = function () {
    return `${this.type}이(가) ${type.sound} 소리를 냅니다.`;
  };
}

const dog = new Animal("개", "멍멍");
console.log(dog.makeSound()); // 출력: 개이(가) 멍멍 소리를 냅니다.

const cat = new Animal("고양이", "야옹");
console.log(cat.makeSound()); // 출력: 고양이이(가) 야옹 소리를 냅니다.
