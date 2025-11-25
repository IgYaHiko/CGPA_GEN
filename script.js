let semesterCount = 0;

document.getElementById("add-semester").addEventListener("click", () => {
    semesterCount++;

    const div = document.createElement("div");
    div.className = "semester";
    div.innerHTML = `
        <label>Semester ${semesterCount} GPA</label>
        <input type="number" step="0.01" min="0" max="10" placeholder="Enter GPA" class="gpa">
    `;

    document.getElementById("semester-list").appendChild(div);
});

document.getElementById("calculate").addEventListener("click", () => {
    const gpaFields = document.querySelectorAll(".gpa");
    if (gpaFields.length === 0) {
        document.getElementById("result").innerText = "Add at least one semester!";
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
        document.getElementById("result").innerText = "Please enter GPA values!";
        return;
    }

    const cgpa = total / count;

    document.getElementById("result").innerText =
        "✨ Your CGPA: " + cgpa.toFixed(2);
});
