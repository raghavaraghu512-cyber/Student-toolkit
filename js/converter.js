/* ==========================================
   STUDENT TOOLKIT
   Unit Converter
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const convertBtn = document.getElementById("convertButton");
    const resetBtn = document.getElementById("resetConverter");

    if (convertBtn) {
        convertBtn.addEventListener("click", convertUnit);
    }

    if (resetBtn) {
        resetBtn.addEventListener("click", resetConverter);
    }

});

/* ==========================================
   Convert Unit
========================================== */

function convertUnit() {

    const category = document.getElementById("converterType").value;
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;
    const value = parseFloat(document.getElementById("inputValue").value);

    const result = document.getElementById("converterResult");

    if (isNaN(value)) {

        result.style.display = "block";

        result.innerHTML = `
            <h3>Error</h3>
            <p>Please enter a valid value.</p>
        `;

        return;

    }

    let converted = value;

    switch (category) {

        /* =====================
           Length
        ===================== */

        case "length":

            converted = convertLength(value, from, to);

            break;

        /* =====================
           Weight
        ===================== */

        case "weight":

            converted = convertWeight(value, from, to);

            break;

        /* =====================
           Temperature
        ===================== */

        case "temperature":

            converted = convertTemperature(value, from, to);

            break;

        default:

            result.style.display = "block";

            result.innerHTML = `
                <h3>Error</h3>
                <p>Unsupported conversion.</p>
            `;

            return;

    }

    result.style.display = "block";

    result.innerHTML = `

        <h3>Conversion Result</h3>

        <p>

            <strong>${value}</strong> ${from}

            =

            <strong>${converted.toFixed(4)}</strong> ${to}

        </p>

    `;

}

/* ==========================================
   Length
========================================== */

function convertLength(value, from, to) {

    const meter = {

        meter:1,
        kilometer:1000,
        centimeter:0.01,
        millimeter:0.001,
        inch:0.0254,
        foot:0.3048

    };

    return value * meter[from] / meter[to];

}

/* ==========================================
   Weight
========================================== */

function convertWeight(value, from, to) {

    const kg = {

        kilogram:1,
        gram:0.001,
        pound:0.453592,
        ounce:0.0283495

    };

    return value * kg[from] / kg[to];

}

/* ==========================================
   Temperature
========================================== */

function convertTemperature(value, from, to) {

    if (from === to) return value;

    let celsius;

    if (from === "celsius") {

        celsius = value;

    }

    else if (from === "fahrenheit") {

        celsius = (value - 32) * 5 / 9;

    }

    else {

        celsius = value - 273.15;

    }

    if (to === "celsius") return celsius;

    if (to === "fahrenheit") return (celsius * 9 / 5) + 32;

    return celsius + 273.15;

}

/* ==========================================
   Reset
========================================== */

function resetConverter() {

    document.getElementById("inputValue").value = "";

    const result = document.getElementById("converterResult");

    result.style.display = "none";

    result.innerHTML = "";

}

/* ==========================================
   END OF converter.js
========================================== */