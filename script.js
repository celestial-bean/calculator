function main() {
  var lastKeyPressed = "";

  function updateDisplay(e) {
    document.getElementById("display").textContent += e.target.textContent;
  }

  function setupButtons() {
    var numkey = document.querySelectorAll(".numKey");

    numkey.forEach(numkey =>
      numkey.addEventListener('click', e => {
        lastKeyPressed = e.target.textContent;
        updateDisplay(e)
      }));
    var opkey = document.querySelectorAll(".opKey");
    opkey.forEach(opkey =>
      opkey.addEventListener("click", function(e) {
        if (!(["+", "-", "/", "x"].includes(lastKeyPressed))) {
          lastKeyPressed = e.target.textContent;

          document.querySelector(".display").textContent += e.target.textContent;

        }
      }))
    var equalkey = document.querySelector(".equal");
    equalkey.addEventListener("click", function() {
      operate(document.querySelector(".display").textContent)
    })
  }

  function sub(num) {
    var result = num.split("-");
    result = Number(num[0]) - Number(num[1]);
    return result;

  }

  function add(num) {
    var result = num.split("+");
    result = Number(result[0]) + Number(result[1]);
    return result;

  }

  function divide(num) {
    var result = num.split("/");
    if (Number(num[1]) == 0) {
      return 0;
    }
    result = Number(num[0]) / Number(num[1]);
    return result;
  }

  function mult(num) {
    var result = num.split("x");
    result = Number(result[0]) * Number(result[1]);
    return result;
  }

  function operate(data) {
    let result = 0;
    let terms = 0;
    var validData = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    data = data.replace(/\s/g, '');

    console.log(`data: ${data}`)
    //12x34
    let opIndex = -1;
    let operation = "";

    opIndex = Math.min([data.indexOf("x"), data.indexOf("/")].filter((num) => {
      return num != -1
    }))
    if (opIndex == -1) {
      opIndex = Math.min([opIndex, data.indexOf("+"), data.indexOf("-")].filter((num) => {
        return num != -1
      }));
    }

  


  //get first
  //12x34
  var firstIndex;
  var lastIndex;
  console.log(`op index: ${opIndex}`);
  for (var firstIndex = opIndex - 1; validData.includes(data[firstIndex]) && firstIndex >=
    0; firstIndex--) {}
firstIndex++
  console.log(`first index: ${firstIndex}`);
  for (var lastIndex = opIndex+1; lastIndex < data.length && validData.includes(data[lastIndex]); lastIndex++) {}
  // lastIndex--;
  console.log(`last index: ${lastIndex}`);
  if (lastIndex == data.length) {
    var segment = data.slice(firstIndex);
  } else {
    var segment = data.slice(firstIndex, lastIndex + 1)
  }
  //

  console.log(`calculating: ${segment}`)
  switch (data[opIndex]) {
    case "x":
      data = data.replace(segment, mult(segment));
      break;
    case "/":
      data = data.replace(segment, divide(segment));
      break;
    case "+":
      data = data.replace(segment, add(segment));
      break;
    case "-":
      data = data.replace(segment, sub(segment));
      break;
    default:
      document.querySelector(".display").textContent = data;
      return;
  }
  operate(data);
}

setupButtons();
}
main();
