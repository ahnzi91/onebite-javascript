// fetch() 내장함수를 사용해서 API를 호출 할 수 있습니다.

// Promise 객체를 반환하는 함수는 비동기 처리 함수이고
// 이런 함수는 then()을 사용해 결과 값을 출력할 수 있습니다.
// let response = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

// Response 객체는 API 호출에 성공했을 때 반환되는 API 성공 객체
// console.log(response); // Response 객체 반환

// async - await를 사용하면 위의 코드보다 훨씬 더 가독성이 좋은 코드를 만들 수 있습니다.
const getData = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData();
