const display = document.getElementById('display');

function append(value) {
  if (display.innerText === "0") display.innerText = "";
  display.innerText += value;
}

function clearDisplay() {
  display.innerText = "0";
}

function del() {
  let text = display.innerText;
  if (text.length > 1) {
    display.innerText = text.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}

function calculate() {
  let expression = display.innerText
    .replace(/√/g, "Math.sqrt")
    .replace(/log/g, "Math.log10")
    .replace(/ln/g, "Math.log")
    .replace(/sin/g, "Math.sin")
    .replace(/cos/g, "Math.cos")
    .replace(/tan/g, "Math.tan")
    .replace(/\^/g, "**");

  try {
    let result = eval(expression);
    if (isNaN(result)) throw "Error";
    display.innerText = result;
  } catch (e) {
    display.innerText = "Error";
  }
}
