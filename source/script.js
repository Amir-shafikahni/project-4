let usernameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");
let logginButtonElem = document.querySelector(".btn");
let usernameVerification = document.querySelector(".username-verification")
let passwordVerification = document.querySelector(".password-verification")
let verificationMessage = document.querySelector(".verification-message");

function liveUsernameVerification() {
  if (usernameInput.value.length < 11) {
    usernameVerification.innerHTML = "Username should be at least 12 Characters"
    usernameVerification.style.color ="#ff0000"
  }
  else {
    usernameVerification.innerHTML = "Sounds great !"
    usernameVerification.style.color = "#00adb5"
  }
}

function livePasswordVerification(){
  if(passwordInput.value.length < 7){
    passwordVerification.innerHTML = "Password should be at least 8 characters"
    passwordVerification.style.color ="#ff0000"
  }else{
    passwordVerification.innerHTML = "Sounds great !"
    passwordVerification.style.color = "#00adb5"
  }
}

function verification() {
  if (usernameInput.value.length < 12 || passwordInput.value.length < 8) {
    verificationMessage.style.display = "block";
    verificationMessage.style.backgroundColor = "rgb(167 , 65 , 55)";
    verificationMessage.innerHTML =
      "Username should be at least 12 and Password should be at least 8 characters :(";
  } else {
    verificationMessage.style.display = "block";
    verificationMessage.style.backgroundColor = "#00adb5";
    verificationMessage.innerHTML = "Succeessfuly logged in :)";
  }
  //   to hide the message
  setTimeout(function () {
    verificationMessage.style.display = "none";
  }, 5000);
}
