/* ==========================================
   STUDENT TOOLKIT
   CGPA Calculator
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const calculateBtn = document.getElementById("calculateCgpa");
    const resetBtn = document.getElementById("resetCgpa");

    if (calculateBtn) {
        calculateBtn.addEventListener("click", calculateCGPA);
    }

    if (resetBtn) {
        resetBtn.addEventListener("click", resetCGPA);
    }

});

/* ==========================================
   Calculate CGPA
========================================== */

function calculateCGPA() {

    const gradeInputs = document.querySelectorAll(".grade");
    const creditInputs = document.querySelectorAll(".credit");

    let totalCredits = 0;
    let totalGradePoints = 0;

    gradeInputs.forEach((gradeInput, index) => {

        const grade = parseFloat(gradeInput.value);
        const credit = parseFloat(creditInputs[index].value);

        if (
            !isNaN(grade) &&
            !isNaN(credit) &&
            grade >= 0 &&
            credit > 0
        ) {

            totalCredits += credit;
            totalGradePoints += grade * credit;

        }

    });

    const resultBox = document.getElementById("cgpaResult");

    if (totalCredits === 0) {

        resultBox.style.display = "block";

        resultBox.innerHTML = `
            <h3>Result</h3>
            <p>Please enter valid grades and credits.</p>
        `;

        return;

    }

    const cgpa = (totalGradePoints / totalCredits).toFixed(2);

    let performance = "";

    if (cgpa >= 9) {

        performance = "🌟 Outstanding";

    }

    else if (cgpa >= 8) {

        performance = "🎉 Excellent";

    }

    else if (cgpa >= 7) {

        performance = "👍 Very Good";

    }

    else if (cgpa >= 6) {

        performance = "🙂 Good";

    }

    else if (cgpa >= 5) {

        performance = "⚠ Average";

    }

    else {

        performance = "❌ Needs Improvement";

    }

    resultBox.style.display = "block";

    resultBox.innerHTML = `

        <h3>CGPA Result</h3>

        <p><strong>CGPA:</strong> ${cgpa}</p>

        <p><strong>Performance:</strong> ${performance}</p>

        <p><strong>Total Credits:</strong> ${totalCredits}</p>

    `;

}

/* ==========================================
   Reset Calculator
========================================== */

function resetCGPA() {

    document.querySelectorAll(".grade").forEach(input => {

        input.value = "";

    });

    document.querySelectorAll(".credit").forEach(input => {

        input.value = "";

    });

    const resultBox = document.getElementById("cgpaResult");

    if (resultBox) {

        resultBox.style.display = "none";

        resultBox.innerHTML = "";

    }

}

/* ==========================================
   Add Subject Row (Optional)
========================================== */

function addSubject() {

    const container = document.getElementById("subjects");

    if (!container) return;

    const row = document.createElement("div");

    row.className = "subject-row";

    row.innerHTML = `

        <input
            type="number"
            class="grade"
            placeholder="Grade Point"
            min="0"
            max="10"
            step="0.01">

        <input
            type="number"
            class="credit"
            placeholder="Credits"
            min="1"
            step="1">

    `;

    container.appendChild(row);

}

/* ==========================================
   Remove Last Subject
========================================== */

function removeSubject() {

    const container = document.getElementById("subjects");

    if (!container) return;

    if (container.children.length > 1) {

        container.removeChild(container.lastElementChild);

    }

}

/* ==========================================
   END OF cgpa.js
========================================== */