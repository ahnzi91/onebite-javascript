let $color = document.getElementById("color");
console.log($color); // <div id="name">강아지</div>

let $animalInfo = document.querySelector(".animal-info");
let $age = document.querySelector("#age");

console.log($animalInfo);
console.log($age);

// querySelectorAll, getElementsByClassName, getElementsByTagName
let $infoItem = document.querySelectorAll("div.info-item");
console.log($infoItem); // NodeList

let infoItemElements = document.getElementsByClassName("info-item");
console.log(infoItemElements); // HTMLCollections

let $div = document.getElementsByTagName("div");
console.log($div); // HTMLCollections

// 요소의 클래스 이름을 변경하는 DOM API
let $name = document.getElementById("name");
$name.className = "dog-name";
console.log($name); // <div id="name" class="dog-name">강아지</div>
console.log($name.className); // dog-name

// 요소의 ID 값을 변경하는 DOM API
let animalInfoElement = document.querySelector("div.animal-info");
animalInfoElement.id = "animal";
console.log(animalInfoElement); // <div class="animal-info" id="animal">...</div>
console.log(animalInfoElement.id); // animal

// 요소의 클래스 값에 접근 가능한 classList
let colorElement = document.getElementById("color");
// dog-color 클래스 추가
colorElement.classList.add("dog-color");
console.log(colorElement); // <div id="color" class="info-item dog-color">갈색</div>
// info-item 클래스 제거
colorElement.classList.remove("info-item");
console.log(colorElement); // <div id="color" class="dog-color">갈색</div>

// Text Node 조작
let ageElement = document.getElementById("age");
ageElement.textContent = "5살";
console.log(ageElement); // <div id="age" class="info-item">5살</div>

// Style 조작
$color.style.color = "blue";
$color.style.fontSize = "30px";
console.log($color); // <div id="color" class="dog-color" style="color: blue; font-size: 30px;">갈색</div>
