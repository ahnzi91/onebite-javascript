// 동기 처리
const workA = () => {
  console.log("workA");
};

const workB = () => {
  console.log("workB");
};

const workC = () => {
  console.log("workC");
};

workA();
workB();
workC();

// 비동기 처리
// setTimeout(() => {}, delayTime)
setTimeout(() => {
  console.log("비동기");
}, 3000);
console.log("종료");

const work_A = () => {
  setTimeout(() => {
    console.log("Work A");
  }, 5000);
};

const work_B = () => {
  setTimeout(() => {
    console.log("Work B");
  }, 3000);
};
const work_C = () => {
  setTimeout(() => {
    console.log("Work C");
  }, 10000);
};
const work_D = () => {
  console.log("Work D");
};

work_A();
work_B();
work_C();
work_D();
