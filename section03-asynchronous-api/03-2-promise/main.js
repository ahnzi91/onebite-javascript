const executor = (resolve, reject) => {
  setTimeout(() => {
    resolve("성공");
    reject("실패");
  }, 3000);
};

const promise = new Promise(executor);
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// callback 지옥..
// const workA = (value, callback) => {
//   setTimeout(() => {
//     callback(value + 5);
//   }, 5000);
// };

// const workB = (value, callback) => {
//   setTimeout(() => {
//     callback(value - 3);
//   }, 3000);
// };

// const workC = (value, callback) => {
//   setTimeout(() => {
//     callback(value + 10);
//   }, 10000);
// };

// workA, workB, workC 순서대로 호출 할 수 있게 코드 작성
// workA(10, (resultA) => {
//   console.log(`workA : ${resultA}`);
//   workB(resultA, (resultB) => {
//     console.log(`workB : ${resultB}`);
//     workC(resultB, (resultC) => {
//       console.log(`workC : ${resultC}`);
//     });
//   });
// });

// 비동기 함수를 위와 같이 코딩하면 함수의 실행 순서를 알기 쉽고 유연한 프로그래밍을 할 수 있다는 장점이 있지만,
// 코드가 매우 복잡해지고 가독성이 떨어지면서 많은 오류를 발생시킬 수 있습니다.

// promise 객체를 사용하여 callback 지옥 탈출하기
const workA = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 5);
    }, 5000);
  });
  return promise;
};

const workB = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value - 3);
    }, 3000);
  });
  return promise;
};

const workC = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 10000);
  });
  return promise;
};

// workA(10).then((resultA) => {
//   console.log(`Work A : ${resultA}`);
//   workB(resultA).then((resultB) => {
//     console.log(`Work B : ${resultB}`);
//     workC(resultB).then((resultC) => {
//       console.log(`Work C : ${resultC}`);
//     });
//   });
// });

// 조금 더 간단한 코드
// promise chainging
workA(10)
  .then((resultA) => {
    console.log(`Work A : ${resultA}`);
    return workB(resultA);
  })
  .then((resultB) => {
    console.log(`Work B : ${resultB}`);
    return workC(resultB);
  })
  .then((resultC) => {
    console.log(`Work C : ${resultC}`);
  });
