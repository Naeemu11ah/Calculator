let buttons = document.querySelectorAll(".buttons");
let screen = document.querySelector("input");
let dot = document.querySelector(".dot");
let operator = document.querySelectorAll(".operator");
let operators = ["+", "-", "/", "*"];

//enabling Dot again
function dot_recall() {
  current_dot_val = 0;
}

let current_dot_val = 0;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    screen.scrollLeft = screen.scrollWidth;
    //clear_All
    if (button.innerText === "AC") {
      screen.value = "";
      dot_recall();

      //numbers entry
    } else if (
      button.innerText === "0" ||
      button.innerText === "1" ||
      button.innerText === "2" ||
      button.innerText === "3" ||
      button.innerText === "4" ||
      button.innerText === "5" ||
      button.innerText === "6" ||
      button.innerText === "7" ||
      button.innerText === "8" ||
      button.innerText === "9"
    ) {
      screen.value += button.innerText;
    }
    //Calcultion
    else if (button.innerText === "=") {
      try {
        screen.value = eval(screen.value);
        dot_recall();
      } catch {
        screen.value = "Error";
      }

      //deletion
    } else if (button.innerText === "Del") {
      screen.value = screen.value.slice(0, -1);
      dot_recall();
    }
    //Factorial
    else if (button.innerText === "!") {
      let val = screen.value;
      let mul = 1;
      if (val === "0") {
        screen.value = 1;
      } else if (val < "0") {
        screen.value = "Error";
      } else {
        for (let i = 1; i <= val; i++) {
          mul *= i;
          screen.value = mul;
        }
      }
      dot_recall();
    }
    //Percentage
    else if (button.innerText === "%") {
      let val = screen.value;
      screen.value = val / 100;
      dot_recall();

      //Dot
    } else if (button.innerText === ".") {
      if (current_dot_val === 0) {
        screen.value += dot.innerText;
      }
      current_dot_val++;
    }
  });
});

//operators
operator.forEach((operate) => {
  operate.addEventListener("click", () => {
    let btn_text = operate.value;
    let screen_text = screen.value;
    if (operators.includes(btn_text)) {
      if (
        screen_text.length === "0" ||
        operators.includes(screen_text.slice(-1))
      ) {
        return;
      }
    }
    screen.value += btn_text;
    dot_recall();
  });
});
