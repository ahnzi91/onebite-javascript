// 미션 1
let text = document.getElementById("text");
let changeTxtBtn = document.getElementById("changeTextButton");

changeTxtBtn.addEventListener("click", function () {
  text.textContent = "텍스트 변경";
});

// 미션 2
const app = document.getElementById("app");

// select tag
const select = document.createElement("select");
select.id = "skills";

// options
const option1 = document.createElement("option");
option1.value = "javascript";
option1.textContent = "Javascript";

const option2 = document.createElement("option");
option2.value = "next";
option2.textContent = "Next.js";

const option3 = document.createElement("option");
option3.value = "react";
option3.textContent = "React.js";

const option4 = document.createElement("option");
option4.value = "typescript";
option4.textContent = "TypeScript";

select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);
select.appendChild(option4);

app.appendChild(select);

// addEventListner
select.addEventListener("change", (event) => {
  let selectedValue = event.target.value;
  console.log(selectedValue);
});
