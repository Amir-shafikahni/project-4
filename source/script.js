let usernameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");
let logginButtonElem = document.querySelector(".btn");
let verificationMessage = document.querySelector(".verification-message");

function verification() {
  if (usernameInput.value.length <= 12 || passwordInput.value.length <= 8) {
    verificationMessage.style.display = "block";
    verificationMessage.style.backgroundColor = "rgb(167 , 65 , 55)";
    verificationMessage.innerHTML =
      "Username should be at least 12 and Password should be at least 8 characters :(";
    //   to hide the message
    setTimeout(function () {
      verificationMessage.style.display = "none";
    }, 5000);
  } else {
    verificationMessage.style.display = "block";
    verificationMessage.style.backgroundColor = "#00adb5";
    verificationMessage.innerHTML = "Succeessfuly logged in  :)";
    //   to hide the message
    setTimeout(function () {
      verificationMessage.style.display = "none";
    }, 5000);
  }
}
