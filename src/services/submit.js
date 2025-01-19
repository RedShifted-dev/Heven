import { validEmail } from "../config/hell.js";



//submit button
const submit = document.getElementById('submit');

submit.addEventListener("click", function (event) {
    event.preventDefault();
    // get input
    const userName = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if fields are empty
    if (userName && email && password) {
        validEmail(email);
    }
});