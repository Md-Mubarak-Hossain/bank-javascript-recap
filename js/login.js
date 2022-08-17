document.getElementById('btn-login').addEventListener('click', function () {
    loginValueCheck('email-input-field', 'password-input-field');
})
document.getElementById('show-password').addEventListener('click', function () {
    const pass = document.getElementById('password-input-field');

    if (pass.type === "password") {
        pass.type = "text";
    }
    else {
        pass.type = "password";
    }

})