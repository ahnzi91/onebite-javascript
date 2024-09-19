### 미션1. DOM API

index.js 파일을 생성하고, 파일의 내부에
버튼 클릭 시 텍스트 요소의 내용을 변경하는 함수를 작성하세요.

DOM API를 사용하여 요소를 선택하고, 이벤트 리스너를 추가해야 합니다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM API Quiz</title>
  </head>
  <body>
    <p id="text">기본 텍스트</p>
    <button id="changeTextButton">텍스트 변경</button>
    <script src="src/index.js"></script>
  </body>
</html>
```

### 미션2. DOM API & Select Tag

id 가 app인 div 요소의 내부에 아래의 코드들을 넣어주세요.

```html
<select id="skills">
  <option value="javascript">Javascript</option>
  <option value="next">Next.js</option>
  <option value="react">React.js</option>
  <option value="typescript">TypeScript</option>
</select>
```

> 단, createElement, appendChild를 사용해서 생성해주세요.

> select 태그의 값을 변경할 때 마다, 변경된 값을 출력하는 기능도 작성해주세요.

**HTML코드**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Select Tag Quiz</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <div id="app">
      <!-- 여기에 요소들을 추가 -->
    </div>
    <script src="src/index.js"></script>
  </body>
</html>
```
