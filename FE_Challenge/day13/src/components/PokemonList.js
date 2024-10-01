// 알맞은 속성의 값과 색상을 적용할 수 있는 모듈입니다.
// modules 폴더 내부의 typeTag.js 코드를 확인하고, 알맞게 활용해보세요!

import { setPokemonType } from "../modules/typeTag.js";

export default function PokemonList({ $app, initialState, handleItemClick, handleTypeClick }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "pokemon-list";

  $app.appendChild(this.$target);
  this.handleItemClick = handleItemClick;
  this.handleTypeClick = handleTypeClick;

  this.template = () => {
    let temp = [];
    if (this.state) {
      this.state.forEach((element, index) => {
        temp += `
          <div class="pokemon-wrapper">
            <div class="img-wrapper" id="${element.id}">
              <img src="${element.img}" alt="${element.name}"></img>
            </div>
            <div class="pokemon-info">
              <div class="index">No.${element.id}</div>
              <div class="name">${element.name}</div>
              <div class="type">${setPokemonType(element.type)}</div> 
            </div>
          </div>
        `;
      });
    }
    // html 코드는 아래와 같이 제공드립니다.
    // 필요한 코드를 추가적으로 작성해 웹 사이트를 완성하세요.
    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    this.$target.querySelectorAll("div.img-wrapper").forEach((element) => {
      element.addEventListener("click", () => {
        this.handleItemClick(element.id);
      });
    });

    this.$target.querySelectorAll("div.type-tag").forEach((element) => {
      element.addEventListener("click", () => {
        this.handleTypeClick(element.id);
      });
    });
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
