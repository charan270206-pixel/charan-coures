
// Course Enrollment
function enroll(courseName) {
    alert("You selected: " + courseName +
        "\nPlease login to continue enrollment.");
}

// Registration Form
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("regEmail").value;
        const role = document.getElementById("role").value;

        alert("Registration Successful!\n" +
            "Name: " + name +
            "\nEmail: " + email +
            "\nRole: " + role);

        registerForm.reset();
    });
}

// Login Form
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        alert("Login form submitted!\nBackend connection pending.");
    });
}

// Instructor Course Form
const courseForm = document.getElementById("courseForm");

if (courseForm) {
    courseForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const title = document.getElementById("courseTitle").value;
        const price = document.getElementById("coursePrice").value;

        alert("Course Details:\n" +
            "Title: " + title +
            "\nPrice: ₹" + price);

        courseForm.reset();
    });
}
