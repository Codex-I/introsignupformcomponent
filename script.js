"use strict";

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

let formValidation = (id) => {
  if (id.value.trim().length === 0) {
    const paragraph = id.nextElementSibling;
    id.classList.add("bg-image");
    paragraph.classList.remove("hidden");
  } else {
    const paragraph = id.nextElementSibling;
    id.classList.remove("bg-image");
    paragraph.classList.add("hidden");
  }
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  formValidation(firstName);
  formValidation(lastName);
  formValidation(email);
  formValidation(password);
});
