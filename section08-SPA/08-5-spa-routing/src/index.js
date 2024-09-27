// changePage(이동할 페이지)
const changePage = (page) => {
  let $content = document.getElementById("content");
  $content.textContent = `현재 보고 있는 페이지는 ${page}입니다.`;
  // history(state, title, url)
  // state : 페이지의 상태를 나타내는 객체
  // title : 브라우저 타이틀
  // url : 해당 페이지 주소
  history.pushState({ page }, `Title ${page}`, `/${page}`);
};

// popstate : history 값이 변경될 때 발생되는 이벤트
window.addEventListener("popstate", (event) => {
  if (event.state) {
    let $content = document.getElementById("content");
    $content.textContent = `현재 보고 있는 페이지는 ${event.state.page}입니다.`;
  }
});

// 1 페이지 보기 버튼
let $page1 = document.getElementById("page1");
$page1.addEventListener("click", () => {
  changePage("page1");
});

// 2 페이지 보기 버튼
let $page2 = document.getElementById("page2");
$page2.addEventListener("click", () => {
  changePage("page2");
});

// 3 페이지 보기 버튼
let $page3 = document.getElementById("page3");
$page3.addEventListener("click", () => {
  changePage("page3");
});

// 뒤로가기
const goBack = () => {
  history.back();
};

// 앞으로 가기
const goForward = () => {
  history.forward();
};

let $goBack = document.getElementById("goBack");
$goBack.addEventListener("click", goBack);

let $goForward = document.getElementById("goForward");
$goForward.addEventListener("click", goForward);
