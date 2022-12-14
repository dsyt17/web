let a = "";
let b = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];

const out = document.querySelector(".calc-screen1 p");

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0;
}

function toDisplay(num) {
  out.textContent = Number(num.toFixed(7));
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons1").onclick = (event) => {
  if (!event.target.classList.contains("btn1")) return;
  if (event.target.classList.contains("ac1")) {
    out.textContent = 0;
    return;
  }

  out.textContent = "";

  const key = event.target.textContent;

  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    console.log(a, b, sign);
    return;
  }

  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(a, b, sign);
  }

  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;

      case "/":
        if (b == 0) {
          out.textContent = "Error";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    toDisplay(a);
    console.log(a, b, sign);
  }
};
