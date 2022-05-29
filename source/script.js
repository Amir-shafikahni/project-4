let usernameElem = document.querySelector(".username");
let passwordElem = document.querySelector(".password");
let logginButtonElem = document.querySelector(".btn");
let verificationMessage = document.querySelector(".verification-message");

function verification() {
  if (usernameElem.value.length <= 12) {
    verificationMessage.style.display = "block";
    verificationMessage.innerHTML =
      "Username should be at least 12 Characters  :(";
    //   to hide the message
    var timer = setInterval(function () {
      verificationMessage.style.display = "none";
      clearInterval(timer);
    }, 4000);
  } else if (passwordElem.value.length <= 8) {
    verificationMessage.style.display = "block";
    verificationMessage.innerHTML =
      "password should be at least 8 chracters  :(";
    var timer = setInterval(function () {
      verificationMessage.style.display = "none";
      clearInterval(timer);
    }, 4000);
  } else {
    verificationMessage.style.display = "block";
    verificationMessage.innerHTML = "Succeessfuly logged in  :)";
    var timer = setInterval(function () {
      verificationMessage.style.display = "none";
      clearInterval(timer);
    }, 4000);
  }
}
