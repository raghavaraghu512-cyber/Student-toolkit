/* ==========================================
   STUDENT TOOLKIT
   Percentage Calculator
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const calculateBtn = document.getElementById("calculatePercentage");
    const resetBtn = document.getElementById("resetPercentage");

    if (calculateBtn) {
        calculateBtn.addEventListener("click", calculatePercentage);
    }

    if (resetBtn) {
        resetBtn.addEventListener("click", resetPercentage);
    }

});

/* ==========================================
   Calculate Percentage
========================================== */

function calculatePercentage() {

    const obtained = parseFloat(
        document.getElementById("obtainedMarks").value
    );

    const total = parseFloat(
        document.getElementById("totalMarks").value
    );

    const result = document.getElementById("percentageResult");

    if (isNaN(obtained) || isNaN(total)) {

        result.style.display = "block";

        result.innerHTML = `
            <h3>Error</h3>
            <p>Please enter both obtained and total marks.</p>
        `;

        return;
    }

    if (total <= 0) {

        result.style.display = "block";

        result.innerHTML = `
            <h3>Error</h3>
            <p>Total marks must be greater than zero.</p>
        `;

        return;
    }

    if (obtained > total || obtained < 0) {

        result.style.display = "block";

        result.innerHTML = `
            <h3>Error</h3>
            <p>Obtained marks cannot exceed total marks.</p>
        `;

        return;
    }

    const percentage = ((obtained / total) * 100).toFixed(2);

    let grade = "";
    let remark = "";

    if (percentage >= 90) {

        grade = "A+";
        remark = "🌟 Outstanding";

    } else if (percentage >= 80) {

        grade = "A";
        remark = "🎉 Excellent";

    } else if (percentage >= 70) {

        grade = "B";
        remark = "👍 Very Good";

    } else if (percentage >= 60) {

        grade = "C";
        remark = "🙂 Good";

    } else if (percentage >= 50) {

        grade = "D";
        remark = "⚠ Average";

    } else {

        grade = "F";
        remark = "❌ Needs Improvement";

    }

    result.style.display = "block";

    result.innerHTML = `

        <h3>Percentage Result</h3>

        <p><strong>Obtained Marks:</strong> ${obtained}</p>

        <p><strong>Total Marks:</strong> ${total}</p>

        <p><strong>Percentage:</strong> ${percentage}%</p>

        <p><strong>Grade:</strong> ${grade}</p>

        <p><strong>Remark:</strong> ${remark}</p>

    `;

}

/* ==========================================
   Reset Calculator
========================================== */

function resetPercentage() {

    document.getElementById("obtainedMarks").value = "";
    document.getElementById("totalMarks").value = "";

    const result = document.getElementById("percentageResult");

    result.style.display = "none";
    result.innerHTML = "";

}

/* ==========================================
   Live Percentage Preview
========================================== */

function updatePercentagePreview() {

    const obtained = parseFloat(
        document.getElementById("obtainedMarks").value
    );

    const total = parseFloat(
        document.getElementById("totalMarks").value
    );

    const preview = document.getElementById("percentagePreview");

    if (!preview) return;

    if (
        isNaN(obtained) ||
        isNaN(total) ||
        total <= 0 ||
        obtained > total
    ) {

        preview.innerHTML = "";
        return;

    }

    preview.innerHTML = `
        Current Percentage:
        <strong>${((obtained / total) * 100).toFixed(2)}%</strong>
    `;

}

/* ==========================================
   Attach Live Events
========================================== */

window.addEventListener("DOMContentLoaded", () => {

    const obtainedInput = document.getElementById("obtainedMarks");
    const totalInput = document.getElementById("totalMarks");

    if (obtainedInput) {

        obtainedInput.addEventListener(
            "input",
            updatePercentagePreview
        );

    }

    if (totalInput) {

        totalInput.addEventListener(
            "input",
            updatePercentagePreview
        );

    }

});

/* ==========================================
   END OF percentage.js
========================================== */