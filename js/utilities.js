

function getInputValueById(elementId) {
    const input = document.getElementById(elementId);
    if (input.value == '' || isNaN(input.value)) {
        alert('enter amount');
        input.value = '';
        return 0;
    }
    const inputValue = parseFloat(input.value);
    input.value = '';
    return inputValue;

}


function getTextValueById(elementId) {
    return parseFloat((document.getElementById(elementId)).innerText);
}


function setTextValueById(elementId, newValue) {
    document.getElementById(elementId).innerText = newValue;

}

function loginValueCheck(elementEmail, password) {
    const email = document.getElementById(elementEmail);
    const pass = document.getElementById(password);
    if (email.value === 'mubarak@dev.com' && pass.value === 'secret123') {
        const goBankPage = window.location.href = 'bank.html'
        return goBankPage;
    }
    else {
        alert('enter valid input.');
        pass.value = '';
    }

}