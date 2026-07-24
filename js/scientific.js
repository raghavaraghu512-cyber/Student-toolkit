/* ==========================================
   STUDENT TOOLKIT
   Scientific Calculator
========================================== */

const display = document.getElementById("display");

/* ==========================================
   Display Functions
========================================== */

function appendValue(value) {

    display.value += value;

}

function clearDisplay() {

    display.value = "";

}

function deleteLast() {

    display.value = display.value.slice(0, -1);

}

/* ==========================================
   Calculate Expression
========================================== */

function calculate() {

    try {

        display.value = eval(display.value);

    }

    catch {

        display.value = "Error";

    }

}

/* ==========================================
   Scientific Operations
========================================== */

function square() {

    display.value = Math.pow(Number(display.value), 2);

}

function cube() {

    display.value = Math.pow(Number(display.value), 3);

}

function sqrtValue() {

    display.value = Math.sqrt(Number(display.value));

}

function power10() {

    display.value = Math.pow(10, Number(display.value));

}

function reciprocal() {

    display.value = 1 / Number(display.value);

}

function absoluteValue() {

    display.value = Math.abs(Number(display.value));

}

/* ==========================================
   Trigonometry
========================================== */

function sinValue() {

    display.value = Math.sin(Number(display.value) * Math.PI / 180);

}

function cosValue() {

    display.value = Math.cos(Number(display.value) * Math.PI / 180);

}

function tanValue() {

    display.value = Math.tan(Number(display.value) * Math.PI / 180);

}

/* ==========================================
   Logarithms
========================================== */

function logValue() {

    display.value = Math.log10(Number(display.value));

}

function lnValue() {

    display.value = Math.log(Number(display.value));

}

/* ==========================================
   Constants
========================================== */

function insertPI() {

    display.value += Math.PI;

}

function insertE() {

    display.value += Math.E;

}

/* ==========================================
   Keyboard Support
========================================== */

document.addEventListener("keydown", function(e){

    if(!display) return;

    if(e.key==="Enter"){

        e.preventDefault();

        calculate();

    }

    if(e.key==="Escape"){

        clearDisplay();

    }

});

/* ==========================================
   END OF scientific.js
========================================== */