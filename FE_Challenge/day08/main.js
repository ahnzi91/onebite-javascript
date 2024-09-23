const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this.value);

    // ? 여기서 this는 무엇을 가리키나요?
    // 여기에서 this는 obj 객체를 가리킵니다.
    // 그래서 그 결과 42가 출력됩니다.
  },
  arrowFunction: () => {
    console.log(this.value);
    // ? 여기서 this는 무엇을 가리키나요?
    // 화살표 함수는 자신만의 this를 가지지 않고 화살표 함수가 정의된 외부의 this를 상속받습니다.
    // 그러므로 화살표 함수 안에서의 this는 window를 가리킵니다.
    // window 객체에는 value라는 프로퍼티가 없으므로 undefined가 출력됩니다.

    // ! 화살표 함수는 간단하게 함수를 선언해서 이용하는 경우 주로 사용합니다. this를 사용하지 않는 경우에 사용하는 것을 권장합니다.
  },
};

obj.regularFunction(); // 출력: 42
obj.arrowFunction(); // 출력: undefined (이유를 설명해보세요)
