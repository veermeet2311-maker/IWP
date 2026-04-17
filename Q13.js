function validateForm() {
    let roll = document.getElementById('roll').value;
    let name = document.getElementById('name').value;
    let dob = document.getElementById('dob').value;

    // 7-digit numeric roll number [cite: 85]
    if (isNaN(roll) || roll.length !== 7) {
        alert("Roll number must be 7 digits");
        return false;
    }
    // Alphabetical name [cite: 86]
    if (!/^[A-Za-z\s]+$/.test(name)) {
        alert("Name must be alphabets only");
        return false;
    }
    // Non-empty DOB [cite: 87]
    if (dob === "") {
        alert("DOB cannot be empty");
        return false;
    }
    alert("Form Submitted"); [cite, 69]
    return true;
}