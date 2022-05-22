const button = document.querySelector("button");
const input = document.getElementById("inputEmail");
let dashboard = document.getElementById("bigDashboard");
let icons = document.getElementById("smallIcons");
let wrongEmail = document.getElementById("wrongInput");
let emptyEmail = document.getElementById("emptyInput");
let inputContent = "";

// wrongEmail.style.visibility = "hidden";
// emptyEmail.style.visibility = "hidden";

wrongEmail.style.display = "none";
emptyEmail.style.display = "none";
dashboard.style.padding = "5vh";
icons.style.paddingTop = "0";
input.style.borderColor = "hsl(0, 2%, 82%)";
input.style.opacity = "0.5";

function updateValue(e) {
  const textContent = e.target.value;
  inputContent = textContent.toString();
  // wrongEmail.style.visibility = "hidden";
  // emptyEmail.style.visibility = "hidden";
  wrongEmail.style.display = "none";
  emptyEmail.style.display = "none";
  dashboard.style.padding = "5vh";
  icons.style.paddingTop = "0";
  input.style.borderColor = "hsl(0, 2%, 82%)";
  input.style.opacity = "1";
}

const emailValidation = (textContent) => {
  input.style.opacity = "0.5";
  if (inputContent.length === 0) {
    // wrongEmail.style.visibility = "hidden";
    // emptyEmail.style.visibility = "visible";
    wrongEmail.style.display = "none";
    emptyEmail.style.display = "";
    dashboard.style.padding = "0";
    icons.style.paddingTop = "1%";
    input.style.borderColor = "hsl(354, 100%, 66%)";
  } else if (
    inputContent.indexOf("@") === -1 ||
    inputContent.indexOf("@") === 0 ||
    inputContent.indexOf("@") === inputContent.length - 1
  ) {
    // wrongEmail.style.visibility = "visible";
    // emptyEmail.style.visibility = "hidden";
    wrongEmail.style.display = "";
    emptyEmail.style.display = "none";
    dashboard.style.padding = "0";
    icons.style.paddingTop = "1%";
    input.style.borderColor = "hsl(354, 100%, 66%)";
  }
};

input.addEventListener("input", updateValue);
button.addEventListener("click", emailValidation);

//MOBILE
