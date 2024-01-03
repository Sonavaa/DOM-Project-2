"use strict";

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const left_btn = document.querySelector("#left__btn");
const right_btn = document.querySelector("#right__btn");

let index = 0;

      right_btn.addEventListener("click", () => {
        if(index === slides.length - 3) {
            index = 0
        }
        else{
            index ++
        }
        slider.style.transform = `translateX(-${index * 310}px)`;
      })

      left_btn.addEventListener("click", () => {
        if(index === 0) {
            index = slides.length - 3
        }
        else{
            index --
        }
        slider.style.transform = `translateX(-${index * 310}px)`;
      })