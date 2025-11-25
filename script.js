// Mode Switching
const modeSelect = document.getElementById("mode");
const cgpaSection = document.getElementById("cgpa-section");
const gpaSection = document.getElementById("gpa-section");

modeSelect.addEventListener("change", () => {
    if (modeSelect.value === "cgpa") {
        cgpaSection.style.display = "block";
        gpaSection.style.display = "none";
    } else {
        cgpaSection.style.display = "none";
        gpaSection.style.display = "block";
    }
});


// =========================
// CGPA Calculator
// =========================
let semesterCount = 0;

document.getElementById("add-semester").addEventListener("click", () => {
    semesterCount++;

    const div = document.createElement("div");
    div.className = "semester";
    div.innerHTML = `
        <label>Semester ${semesterCount} GPA</label>
        <input type="number" step="0.01" min="0" max="10" placeholder="Enter Semester GPA" class="gpa">
    `;

    document.getElementById("semester-list").appendChild(div);
});


document.getElementById("calculate-cgpa").addEventListener("click", () => {
    const gpaFields = document.querySelectorAll(".gpa");
    if (gpaFields.length === 0) {
        document.getElementById("cgpa-result").innerText = "Add at least one semester!";
        return;
    }

    let total = 0;
    let count = 0;

    gpaFields.forEach(input => {
        const val = parseFloat(input.value);
        if (!isNaN(val)) {
            total += val;
            count++;
        }
    });

    if (count === 0) {
        document.getElementById("cgpa-result").innerText = "Enter valid GPA values!";
        return;
    }

    const cgpa = total / count;
    document.getElementById("cgpa-result").innerText = "Your CGPA: " + cgpa.toFixed(2);
});


// =========================
// GPA Calculator
// =========================
let subjectCount = 0;

document.getElementById("add-subject").addEventListener("click", () => {
    subjectCount++;

    const div = document.createElement("div");
    div.className = "semester";
    div.innerHTML = `
        <label>Subject ${subjectCount} Grade Points</label>
        <input type="number" min="0" max="10" step="0.1" placeholder="Grade Point (e.g., 9, 8, 7)" class="grade">

        <label>Credits</label>
        <input type="number" min="1" max="10" placeholder="Credits (e.g., 3, 4)" class="credit">
    `;

    document.getElementById("subject-list").appendChild(div);
});


document.getElementById("calculate-gpa").addEventListener("click", () => {
    const grades = document.querySelectorAll(".grade");
    const credits = document.querySelectorAll(".credit");

    if (grades.length === 0) {
        document.getElementById("gpa-result").innerText = "Add at least one subject!";
        return;
    }

    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < grades.length; i++) {
        const g = parseFloat(grades[i].value);
        const c = parseFloat(credits[i].value);

        if (!isNaN(g) && !isNaN(c)) {
            totalPoints += g * c;
            totalCredits += c;
        }
    }

    if (totalCredits === 0) {
        document.getElementById("gpa-result").innerText = "Enter valid grade points and credits!";
        return;
    }

    const gpa = totalPoints / totalCredits;

    document.getElementById("gpa-result").innerText =
        "Your GPA: " + gpa.toFixed(2);
});
