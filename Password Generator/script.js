"use strict";

const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!'^+6/()=?_#shs{{1}|;:+*<*-";

const minus_btn = document.querySelector(".minus");
const counterEl = document.querySelector(".counter");
const plus_btn = document.querySelector(".plus");

let counter = 6;
counterEl.textContent = counter;

const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");

const generate_btn = document.querySelector(".generate-btn");
const passwordEl = document.querySelector(".password");

const copy_btn = document.querySelector(".copy-btn");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

const modal_title = document.querySelector(".modal h2");
const modal_message = document.querySelector(".modal p");
const modal_btn = document.querySelector(".modal button");
const error_message = document.querySelector(".error-message");

plus_btn.addEventListener("click", (event) => {
  event.preventDefault();
  if (counter < 20) {
    counter++;
  }
  counterEl.textContent = counter;
});
minus_btn.addEventListener("click", (event) => {
  event.preventDefault();
  if (counter > 6) {
    counter--;
  }
  counterEl.textContent = counter;
});

const getRandomCharacter = () => {
  const characters = [];

  if (numbersInput.checked) {
    characters.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }
  if (uppercaseInput.checked) {
    characters.push(
      upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
    );
  }
  if (lowercaseInput.checked) {
    characters.push(
      lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
    );
  }
  if (symbolsInput.checked) {
    characters.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }
  if (!characters.length) {
    return "";
  }
  console.log(characters);
  return characters[Math.floor(Math.random() * characters.length)];
};

generate_btn.addEventListener("click", (event) => {
    event.preventDefault();
    let password = [];
  for (let i = 0; i < counter; i++) {
    password += getRandomCharacter();
  }
  passwordEl.textContent = password;

  if (passwordEl.textContent === ""){
    error_message.classList.add("active");
}
  else{
    error_message.classList.remove("active");
  }
});

copy_btn.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.add("active")
    backdrop.classList.add("active")

    const passwordValue = passwordEl.textContent
    if(passwordValue){
        modal_title.textContent = "Success"
        modal_title.style.color = "green"
        modal_message.textContent = `Your password "${passwordValue}" was successfully copied to clipboard.`
    }
    else{
        modal_title.textContent = "Error"
        modal_title.style.color = "red"
        modal_message.textContent = `There is  nothing to copy.`
    }
});

const closeModal = () => {
    modal.classList.remove("active")
    backdrop.classList.remove("active")
}

modal_btn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);
