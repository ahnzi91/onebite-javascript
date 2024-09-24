// DOM에 새로운 요소 추가하는 방법
// createElement()
let $type = document.createElement("div");
$type.className = "info-item";
$type.id = "type";
// 특정 요소에 Text Node를 수정과 삭제하는 것이 아니라 새로 생성하는 작업을 할 땐 createTextNode() DOM API를 사용할 수 있습니다.
let $typeText = document.createTextNode("말티즈");
console.log($type); // <div class="info-item" id="type"></div>
console.log($typeText); // 말티즈

// 생성한 노드를 DOM Tree에 추가
// appendChild() : 전달받은 노드를 원하는 요소에 마지막 자식으로 추가할 수 있습니다.
// 부모 노드를 작성한 다음 부모 노드에 appendChild()를 작성하고 appendChild() 괄호 안에 부모 노드에 새로 추가할 자식 노드를 작성합니다.
let $animalInfo = document.querySelector("div.animal-info");
$animalInfo.appendChild($type);
$type.appendChild($typeText);

let $button = document.createElement("button");
$button.id = "newBtn";
$button.classList.add("new-button");
$button.textContent = "버튼";
$button.addEventListener("click", () => {
  window.alert("클릭");
});

$animalInfo.appendChild($button);

// innerHTML
// 특정 요소의 HTML을 문자열 형태로 읽거나 설정할 수 있습니다.
// 요소의 내부 HTML을 나타내는 문자열을 반환하거나 설정된 문자열을 요소에 자식으로 해석합니다.
console.log($animalInfo.innerHTML);
$animalInfo.innerHTML = "<div id='name'>고양이</div>";
console.log($animalInfo);
