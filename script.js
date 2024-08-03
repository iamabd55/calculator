let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let buttonsArray = Array.from(buttons); //all buttons node will become an array

let string = "";
//All values will become as variable using foreach
buttonsArray.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      display.value = string;
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      display.value = string;
    } else if (e.target.innerHTML == "%") {
      string = string / 100;
      display.value += "%";
      if (e.target.innerHTML == "=") {
        display.value = string;
      }
    } else {
      string += e.target.innerHTML;
      display.value = string;
    }
  });
});
