"use strict";

function changeColor() {
    let color = document.body.style.color;
    if (color == "black") {
        document.body.style.color = "orange";
    } else {
        document.body.style.color = "black";
    }
}