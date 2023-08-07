document.addEventListener("DOMContentLoaded", function() {
    showWelcomeMessage();
});
function showWelcomeMessage() {
    var name = prompt("Please enter your name:");
    if (name !== null && name.trim() !== "") {
        var mark = prompt("Welcome, " + name + "! Please enter your mark:");
        if (mark !== null && mark.trim() !== "" && !isNaN(mark)) {
            mark = Math.floor(Number(mark));
            var result = "";
            var grade = "";
            if (mark >= 0 && mark <= 49) {
                result = "Failed";
                grade = "F";
            } else if (mark >= 50 && mark <= 60) {
                result = "Pass";
                grade = "D";
            } else if (mark >= 61 && mark <= 70) {
                result = "Pass";
                grade = "C";
            } else if (mark >= 71 && mark <= 80) {
                result = "Pass";
                grade = "B";
            } else if (mark >= 81 && mark <= 90) {
                result = "Pass";
                grade = "A";
            } else if (mark >= 91 && mark <= 100) {
                result = "Pass";
                grade = "A+";
            } else {
                result = "Invalid mark";
                grade = "N/A";
            }
            alert("Result: " + result + "\nGrade: " + grade);
        } else {
            alert("Invalid mark entered. Please enter a valid number.");
        }
    } else {
        alert("No name entered. Please enter your name.");
    }
}