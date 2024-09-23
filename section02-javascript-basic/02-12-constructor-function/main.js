function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayHi = function () {
    console.log("Hi");
  };
}

const person1 = new Person("홍길동", 30, "Manager");
const person2 = new Person("김철수", 25, "Designer");

console.log(person1); // Person {name: '홍길동', age: 30, job: 'Manager', sayHi: ƒ}
console.log(person2); // Person {name: '김철수', age: 25, job: 'Designer', sayHi: ƒ}
