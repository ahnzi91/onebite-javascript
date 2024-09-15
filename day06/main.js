function fakeApiCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John Doe", age: 30 });
    }, 2000);
  });
}

async function fetchUserData() {
  try {
    const user = await fakeApiCall();
    console.log(`사용자 이름: ${user.name}`);
  } catch (error) {
    console.log("API 호출 중 오류가 발생했습니다.");
  }
}

fetchUserData(); // 출력: 2초 후 "사용자 이름: John Doe"
