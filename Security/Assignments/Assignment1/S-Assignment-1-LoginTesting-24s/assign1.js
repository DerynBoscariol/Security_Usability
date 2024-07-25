window.onload = function () {
    "use strict";
    var formHandle = window.document.querySelector(".login__form");
    var userInput = window.document.querySelector(".login__name");
    var passInput = window.document.querySelector(".login__pass");
    var outputBox = window.document.querySelector(".output");

    formHandle.onsubmit = function () {
        if(checkLogin(userInput.value, passInput.value) === true)
        {
            outputBox.innerHTML = "Welcome Back!";
            outputBox.style.display = "block";
        } else {
            outputBox.style.display = "block";
            outputBox.innerHTML = checkLogin(userInput.value, passInput.value);
        }

        console.log(userInput.value, passInput.value);
        return false;
    };

};