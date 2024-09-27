// TabBar 컴포넌트를 모듈로 사용할 예정 : export default 키워드 작성
export default function TabBar({ $app, initialState, onClick }) {
  this.status = initialState;
  this.onClick = onClick;

  this.$target = document.createElement("div");
  this.$target.className = "tab-bar";
  $app.appendChild(this.$target);

  this.template = () => {
    let temp = `
      <div id="all">전체</div>
      <div id="penguin">펭귄</div>
      <div id="koala">코알라</div>
      <div id="panda">판다</div>
    `;

    return temp;
  };

  // 화면 렌더해주는 함수
  this.render = () => {
    this.$target.innerHTML = this.template();

    // 현재 state 값과 동일한 id를 갖는 버튼 요소를 가져와서 할당해준다.
    // 해당 요소에 클래스 이름을 "clicked"로 설정해 배경 색상을 변경해준다.
    let $currentTab = document.getElementById(this.state);
    // $currentTab ? ($currentTab.className = "clicked") : "";
    $currentTab && ($currentTab.className = "clicked");

    const $tabBar = this.$target.querySelectorAll("div");
    $tabBar.forEach((element) => {
      element.addEventListener("click", () => {
        onClick(element.id);
      });
    });
  };

  // state 값을 업데이트 하는 함수
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
