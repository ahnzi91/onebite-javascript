const $fruitSelect = document.getElementById("fruitSelect");

$fruitSelect.addEventListener("change", (event) => {
  console.log(event.target.value);
});

const $username = document.getElementById("username");
const $password = document.getElementById("password");

const $loginButton = document.querySelector("button");

$loginButton.addEventListener("click", (event) => {
  console.log($username.value);
  console.log($password.value);
});
