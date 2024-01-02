"use strict";

const outer = document.querySelector(".cursor--outer")
const inner = document.querySelector(".cursor--inner")
const btn = document.querySelector(".btn")

const {width, height, borderRadius, margin} = window.getComputedStyle(outer)

window.addEventListener("mousemove", (event) => {
const {x, y, target} = event
const {x:CoordsX, y:CoordsY} = btn.getBoundingClientRect()

outer.style.transform = `translate(${x}px, ${y}px)`
inner.style.transform = `translate(${x}px, ${y}px)`

if(target.classList.contains("btn")){

    const {width, height, borderRadius} = window.getComputedStyle(btn)

    outer.style.width = width
    outer.style.height = height
    outer.style.borderRadius = borderRadius
    outer.style.margin = 0
    outer.style.transform = `translate(${CoordsX}px, ${CoordsY}px)`
}
else{
    outer.style.width = width
    outer.style.height = height
    outer.style.borderRadius = borderRadius
    outer.style.margin = margin
}


})

