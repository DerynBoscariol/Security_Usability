var formHandle = window.document.querySelector(".login__form");
var nameInput = window.document.querySelector(".login__name");
var passInput = window.document.querySelector(".login__pass");
var nameOutput = window.document.querySelector(".output__user");
var passOutput = window.document.querySelector(".output__pass");
var outputBox = window.document.querySelector(".output");

window.onload = function () {
    "use strict";
    formHandle.onsubmit = function () {
        if (nameInput.value === "") {
            nameInput.classList.add("login__txtbox_error");
            nameInput.focus();
        }
        else if (passInput.value === "") {
            passInput.classList.add("login__txtbox_error");
            passInput.focus();
        }
        if (nameInput.value !== "" && passInput.value !== "") {
            nameOutput.innerHTML = nameInput.value;
            passOutput.innerHTML = passInput.value;
            outputBox.style.display = "block";
        }
        return false;
    };
};