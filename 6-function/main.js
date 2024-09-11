let num1 = 10;
let num2 = 15;
let sum = num1 + num2;
console.log(sum);

function add(num1, num2) {
    return num1 + num2;
    console.log("함수 호출");
}

let result = add(10, 15);

console.log(`두 숫자를 더한 결과는 ${result} 입니다.`);

// Early return pattern : 특정 조건에 부합하지 않으면 바로바로 return 한다.
function compare(num) {
    if (num === 0) {
        console.log("num의 값이 0입니다.");
    } else if (num < 0) {
        console.log("num의 값이 0보다 작습니다.");
    } else {
        if (num >= 10) {
            console.log("num의 값이 10보다 크거나 같습니다.");
        } else {
            console.log("num의 값이 0보다 크고 10보다 작습니다.");
        }
    }
}

compare(15);

// 위의 코드는 가독성이 매우 떨어지는 코드이다.
// Early return pattern을 이용하게 되면 훨씬 더 가독성 있는 코드를 만들 수 있다.
function earlyReturnCompare(num) {
    if (num === 0) {
        return "num의 값이 0입니다.";
    }

    if (num < 0) {
        return "num의 값이 0보다 작습니다.";
    }

    if (num >= 10) {
        return "num의 값이 10보다 크거나 같습니다.";
    }

    return "num의 값이 0보다 크고 10보다 작습니다.";
}

// 코드의 흐름
function print() {
    console.log(1);
    console.log(2);
}

console.log(3);
print();
console.log(4);
