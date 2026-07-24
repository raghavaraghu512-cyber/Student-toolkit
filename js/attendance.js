/* ==========================================
   STUDENT TOOLKIT
   Attendance Calculator
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const calculateBtn = document.getElementById("calculateAttendance");
    const resetBtn = document.getElementById("resetAttendance");

    if (calculateBtn) {
        calculateBtn.addEventListener("click", calculateAttendance);
    }

    if (resetBtn) {
        resetBtn.addEventListener("click", resetAttendance);
    }

});

/* ==========================================
   Calculate Attendance
========================================== */

function calculateAttendance() {

    const attended = parseFloat(document.getElementById("attendedClasses").value);
    const total = parseFloat(document.getElementById("totalClasses").value);
    const required = parseFloat(document.getElementById("requiredAttendance").value);

    const result = document.getElementById("attendanceResult");

    if (
        isNaN(attended) ||
        isNaN(total) ||
        isNaN(required)
    ) {

        result.style.display = "block";

        result.innerHTML = `
            <h3>Error</h3>
            <p>Please fill all fields.</p>
        `;

        return;

    }

    if (attended > total || total <= 0) {

        result.style.display = "block";

        result.innerHTML = `
            <h3>Error</h3>
            <p>Invalid attendance values.</p>
        `;

        return;

    }

    const currentAttendance = ((attended / total) * 100).toFixed(2);

    let html = `
        <h3>Attendance Report</h3>

        <p><strong>Current Attendance:</strong>
        ${currentAttendance}%</p>
    `;

    if (currentAttendance >= required) {

        const canMiss = Math.floor(
            (attended * 100 - required * total) / required
        );

        html += `
            <p style="color:green;">
                ✅ You already satisfy the required attendance.
            </p>

            <p>
                You can safely miss approximately
                <strong>${Math.max(canMiss,0)}</strong>
                more class(es).
            </p>
        `;

    }

    else {

        let extra = 0;

        while (((attended + extra) / (total + extra)) * 100 < required) {

            extra++;

        }

        html += `
            <p style="color:red;">
                ❌ Required attendance not achieved.
            </p>

            <p>
                You need to attend
                <strong>${extra}</strong>
                more consecutive class(es).
            </p>
        `;

    }

    result.style.display = "block";
    result.innerHTML = html;

}

/* ==========================================
   Reset
========================================== */

function resetAttendance() {

    document.getElementById("attendedClasses").value = "";
    document.getElementById("totalClasses").value = "";
    document.getElementById("requiredAttendance").value = "";

    const result = document.getElementById("attendanceResult");

    result.style.display = "none";
    result.innerHTML = "";

}

/* ==========================================
   Live Attendance Percentage
========================================== */

function updateAttendancePreview() {

    const attended = parseFloat(document.getElementById("attendedClasses").value);
    const total = parseFloat(document.getElementById("totalClasses").value);

    const preview = document.getElementById("attendancePreview");

    if (!preview) return;

    if (
        isNaN(attended) ||
        isNaN(total) ||
        total <= 0
    ) {

        preview.innerHTML = "";

        return;

    }

    preview.innerHTML = `
        Current Attendance:
        <strong>${((attended / total) * 100).toFixed(2)}%</strong>
    `;

}

/* ==========================================
   Attach Live Events
========================================== */

window.addEventListener("DOMContentLoaded", () => {

    const attendedInput = document.getElementById("attendedClasses");
    const totalInput = document.getElementById("totalClasses");

    if (attendedInput) {

        attendedInput.addEventListener(
            "input",
            updateAttendancePreview
        );

    }

    if (totalInput) {

        totalInput.addEventListener(
            "input",
            updateAttendancePreview
        );

    }

});

/* ==========================================
   END OF attendance.js
========================================== */