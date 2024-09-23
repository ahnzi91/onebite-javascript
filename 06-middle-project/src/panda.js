// API 주소 작성
const API_URL = "https://animal-api-two.vercel.app/";

// 이미지를 추가해 줄 대상 요소 <div id="content"></div> 가져오기
const $content = document.querySelector("div.content");

// 여러 개의 img를 담아준 변수
let template = [];

// API를 호출하는 기능을 하는 함수 - getData()
const getData = async (name) => {
  let res = await fetch(`${API_URL}${name}`); // API_URL을 비동기적으로 호출해주기 위해 await / async 사용

  // try-catch 문을 사용해 에러 처리
  try {
    if (res) {
      // data 변수에 API 호출의 결과 값을 JSON으로 파싱해준다.
      let data = await res.json();
      console.log(data);
      data.photos.forEach((element) => {
        console.log(element);
        // 이미지 태그 작성 후 src에 element.url을 작성해준다.
        template += `<img src="${element.url} />`;
      });
      $content.innerHTML = template;
    }
  } catch (error) {
    console.log(error);
  }
};

// getData 함수 호출
getData("panda");
