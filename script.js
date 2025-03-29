let emailElement = document.getElementById("email");
let passwordElement = document.getElementById("password");
let submitButton = document.getElementById("submit");
let emailMsgElement = document.querySelector("#email-msg");

let passwordMsgElement = document.getElementById("password-msg");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  let emailValue = emailElement.value;
  let passwordValue = passwordElement.value;
  let isValid = true;
  // email validation
  if (
    emailValue.length <= 3 ||
    !emailValue.includes("@") ||
    !emailValue.includes(".")
  ) {
    isValid = false;
    emailMsgElement.style.color = "red";
    emailMsgElement.textContent =
      "Make sure email is more than 3 characters and has @ and a.";
  } else {
    emailMsgElement.textContent = "";
  }

  //password validation
  if (passwordValue.length <= 8) {
    isValid = false;
    passwordMsgElement.style.color = "red";
    passwordMsgElement.textContent =
      "Make sure password is more than 8 characters.";
  } else {
    passwordMsgElement.textContent = "";
  }

  if (isValid) {
    let confirmation = confirm("Are you sure to submit?");
    if (confirmation) {
      alert("Successful signup");
      passwordMsgElement.style.color = "green";
      passwordMsgElement.textContent = "All good to go.";
    } else {
      emailValue = "";
      passwordValue = "";
      emailMsgElement.textContent = "";
      passwordMsgElement.textContent = "";
    }
  }
});
