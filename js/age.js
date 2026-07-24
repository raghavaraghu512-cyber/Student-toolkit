/* ==========================================
   STUDENT TOOLKIT
   Age Calculator
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const calculateBtn = document.getElementById("calculateAge");
    const resetBtn = document.getElementById("resetAge");

    if (calculateBtn) {
        calculateBtn.addEventListener("click", calculateAge);
    }

    if (resetBtn) {
        resetBtn.addEventListener("click", resetAge);
    }

});

/* ==========================================
   Calculate Age
========================================== */

function calculateAge() {

    const dob = document.getElementById("dob").value;
    const result = document.getElementById("ageResult");

    if (!dob) {

        result.style.display = "block";

        result.innerHTML = `
            <h3>Error</h3>
            <p>Please select your Date of Birth.</p>
        `;

        return;

    }

    const birthDate = new Date(dob);
    const today = new Date();

    if (birthDate > today) {

        result.style.display = "block";

        result.innerHTML = `
            <h3>Error</h3>
            <p>Date of Birth cannot be in the future.</p>
        `;

        return;

    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {

        months--;

        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += previousMonth;

    }

    if (months < 0) {

        years--;
        months += 12;

    }

    const totalDays = Math.floor(
        (today - birthDate) / (1000 * 60 * 60 * 24)
    );

    const totalWeeks = Math.floor(totalDays / 7);

    const totalHours = totalDays * 24;

    const totalMinutes = totalHours * 60;

    result.style.display = "block";

    result.innerHTML = `

        <h3>Your Age</h3>

        <p><strong>${years}</strong> Years</p>

        <p><strong>${months}</strong> Months</p>

        <p><strong>${days}</strong> Days</p>

        <hr>

        <p>Total Days : <strong>${totalDays}</strong></p>

        <p>Total Weeks : <strong>${totalWeeks}</strong></p>

        <p>Total Hours : <strong>${totalHours}</strong></p>

        <p>Total Minutes : <strong>${totalMinutes}</strong></p>

    `;

}

/* ==========================================
   Reset Calculator
========================================== */

function resetAge() {

    document.getElementById("dob").value = "";

    const result = document.getElementById("ageResult");

    result.style.display = "none";

    result.innerHTML = "";

}

/* ==========================================
   Calculate Next Birthday
========================================== */

function nextBirthday() {

    const dob = document.getElementById("dob").value;

    const output = document.getElementById("birthdayInfo");

    if (!dob || !output) return;

    const birth = new Date(dob);
    const today = new Date();

    let next = new Date(
        today.getFullYear(),
        birth.getMonth(),
        birth.getDate()
    );

    if (next < today) {

        next.setFullYear(today.getFullYear() + 1);

    }

    const diff = next - today;

    const remainingDays = Math.ceil(
        diff / (1000 * 60 * 60 * 24)
    );

    output.innerHTML = `
        🎂 Next Birthday in
        <strong>${remainingDays}</strong> day(s).
    `;

}

/* ==========================================
   Auto Birthday Preview
========================================== */

window.addEventListener("DOMContentLoaded", () => {

    const dobInput = document.getElementById("dob");

    if (dobInput) {

        dobInput.addEventListener("change", nextBirthday);

    }

});

/* ==========================================
   END OF age.js
========================================== */