const form = document.getElementById("form");
const userName = document.getElementById("username-box");
const email = document.getElementById("email-box");
const password = document.getElementById("password-box");
const passwordCheck = document.getElementById("password-check-box");
//const submit = document.getElementsByClassName("submit-button");

form.addEventListener("submit", e => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();


    if (userNameValue === "") {
        setError(userName, "Username cannot be blank");
    }
    else {
        setSuccess(userName);
    }


    if (emailValue === "") {
        setError(email, "email cannnot be blank");
    }
    // else if (!isEmail(emailValue)) {
    //     setError(email, "It is not valid email");
    // }
    else {
        setSuccess(email);
    }


    if (passwordValue === "") {
        setError(password, "password cannot be blank")
    }
    else {
        setSuccess(password)
    }


    if (passwordCheckValue === "") {
        setError(passwordCheck, "password cannot be blank")
    }
    else if (passwordValue !== passwordCheckValue) {
        setError(passwordCheck, "password does not match")
    }
    else if (passwordValue === passwordCheckValue) {
        setSuccess(passwordCheck)
    }

}

//function isEmail(email)
//{
//  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

//}

function setError(input, message) {
    const formElement = input.parentElement;
    const small = formElement.querySelector("small");
    formElement.className = "form-element error";
    small.innerText = message;
}
 
function setSuccess(input)
{
    const formElement=input.parentElement;
    formElement.className="form-element success";
}




