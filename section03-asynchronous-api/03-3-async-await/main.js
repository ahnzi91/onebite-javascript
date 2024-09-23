// 3초 후에 "3초가 지났습니다." 라는 문구를 출력하는 비동기 코드 만들기
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3초가 지났습니다.");
    }, ms);
  });
};

// async : 비동기 작업을 처리할 때 사용되는 키워드.

// const start = async () => {
//   let result = await delay(3000);
//   console.log(result);
// };

const start = async () => {
  try {
    let result = await delay(3000);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

start();

const workA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workA");
    }, 5000);
  });
};

const workB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workB");
    }, 3000);
  });
};

const workC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workC");
    }, 10000);
  });
};

start();

// await : 해당 작업이 처리 완료될 때까지 다음 작업을 중단한다는 특징이 있다.
// 그러므로 총 18초가 걸린다.
const play = async () => {
  try {
    let resultA = await workA();
    let resultB = await workB();
    let resultC = await workC();
    console.log(resultA);
    console.log(resultB);
    console.log(resultC);
  } catch (error) {
    console.log(error);
  }
};

play();

// Promise.all() 사용하여 병렬처리
// 10초 만에 종료
const play2 = async () => {
  try {
    let result = await Promise.all([workA(), workB(), workC()]);
    result.forEach((res) => console.log(res));
  } catch (error) {
    console.log(error);
  }
};

play2();
